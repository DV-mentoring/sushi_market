import "./styles.scss";
import React, { useEffect } from "react";
import { db, Order } from "@/services/db";

interface ButtonProps {
    props: Order;
}

export const ButtonListCart = ({ props }: ButtonProps): React.JSX.Element => {
    const [count, setCount] = React.useState(1);

    const DeleteOrder = async (): Promise<void> => {
        await db.orders.delete(props.id);
    };

    const EditOrder = async (newOrderCount: number): Promise<void> => {
        await db.orders.update(props.id, {
            count: newOrderCount,
        });
    };

    const handleOrderPlusSticks = () => {
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

    const handleOrderMinusSticks = () => {
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

    useEffect(() => {
        setCount(props.count);
    }, []);

    return (
        <div className="counter-order">
            <button
                className={
                    count === 1 ? "button-counter disable" : "button-counter"
                }
                onClick={handleOrderMinusSticks}
                disabled={count === 1}
            >
                -
            </button>
            <h3 className="counter">
                <b>{count}</b>
            </h3>
            <button className="button-counter" onClick={handleOrderPlusSticks}>
                +
            </button>
        </div>
    );
};
