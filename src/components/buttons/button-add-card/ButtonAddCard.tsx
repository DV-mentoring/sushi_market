import "./styles.scss";
import React, { useEffect } from "react";
import { db, Order } from "@/services/db";

interface ButtonProps {
    children?: React.ReactNode;
    Order: Order;
}

export const ButtonAddCard = ({
    children,
    Order,
}: ButtonProps): React.JSX.Element => {
    const [status, setStatus] = React.useState("");
    const [count, setCount] = React.useState(1);
    const [id, setId] = React.useState(0);

    const DeleteOrder = async (): Promise<void> => {
        await db.orders.delete(id);
    };

    const EditOrder = async (newOrderCount: number): Promise<void> => {
        await db.orders.update(id, {
            count: newOrderCount,
        });
    };

    const AddOrder = async () => {
        try {
            const newId = await db.orders.add({
                name: Order.name,
                weight: Order.weight,
                key: Order.key,
                count: 1,
                price: Order.price,
            });

            if (newId !== undefined) setId(newId);
        } catch (error) {
            setStatus(`Error ${error}`);
        }
    };

    const handleOrderPlus = () => {
        if (count < 10) {
            const newOrderCount = count + 1;
            setCount(count + 1);
            EditOrder(newOrderCount);
        } else {
            const newOrderCount = 10;
            setCount(10);
            EditOrder(newOrderCount);
        }
    };

    const handleOrderMinus = () => {
        if (count <= 1) {
            const newOrderCount = count - 1;
            setCount(newOrderCount);
            DeleteOrder();
        } else {
            const newOrderCount = count - 1;
            setCount(newOrderCount);
            EditOrder(newOrderCount);
        }
    };

    const handleAddCart = () => {
        const newOrderCount = count + 1;
        setCount(1);
        EditOrder(newOrderCount);
        AddOrder();
    };

    const GetStateButton = async () => {
        try {
            const res = await db.orders.where("key").equals(Order.key).first();
            if (res?.key === Order.key) {
                setCount(res.count);
                if (res.id !== undefined) setId(res.id);
                else setStatus("Status res.id undefined");
            } else setCount(0);
        } catch (error) {
            setStatus(`Error ${error}`);
        }
    };

    useEffect(() => {
        GetStateButton();
    }, []);

    useEffect(() => {
        setCount(count);
    }, [Order.key, count]);

    return count !== 0 ? (
        <div className="counter-order">
            <button className="button-counter" onClick={handleOrderMinus}>
                -
            </button>
            <h3 className="counter">
                <b>{status || count}</b>
            </h3>
            <button className="button-counter" onClick={handleOrderPlus}>
                +
            </button>
        </div>
    ) : (
        <button
            onClick={handleAddCart}
            className="button button__add-cart"
            tabIndex={0}
            aria-label="Кнопка"
        >
            {children}
        </button>
    );
};
