"use client";

import React, { useEffect } from "react";
import "./styles.scss";
import { db } from "@/services/db";
import Link from "next/link";

interface ButtonProps {
    onClick?: () => void;
}
export const ButtonCart = ({ onClick }: ButtonProps): React.JSX.Element => {
    const [countOrders, setCountOrders] = React.useState<number>(0);
    const GetOrder = async () => {
        setCountOrders(
            await db.orders.toArray().then((values) => {
                return values.length;
            })
        );
    };
    useEffect(() => {
        GetOrder();
    }, []);

    return (
        <Link href="/cart">
            <button
                onClick={onClick}
                className="button button__cart"
                tabIndex={0}
                aria-label="Кнопка"
            >
                {`${countOrders ? `Корзина | ${countOrders}` : `Корзина`}`}
            </button>
        </Link>
    );
};
