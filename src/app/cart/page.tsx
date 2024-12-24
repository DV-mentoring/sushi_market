"use client";

import "./styles.scss";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { Section } from "@/components/section/Section";
import Image from "next/image";
import { ButtonDeleteCart } from "@/components/buttons/button-delete-cart/ButtonDeleteCart";
import { ButtonOrder } from "@/components/buttons/button-order/ButtonOrder";
import { ButtonOrderCancel } from "@/components/buttons/button-order-cancel/ButtonOrderCancel";
import Link from "next/link";
import { db, Order, Sticks } from "@/services/db";
import { useEffect, useState } from "react";
import { withButton } from "@/components/buttons/HOC/withButton";
import { ButtonListCartSticks } from "@/components/buttons/button-list-cart-sticks/ButtonListCartSticks";
import { ButtonListCart } from "@/components/buttons/button-list-cart/ButtonListCart";

export default function Page() {
    const [error, setError] = useState("");
    const [setsOrder, setOrderSets] = useState<Order[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const ButtonSticksExtended = withButton(ButtonListCartSticks);
    const ButtonOrderExtended = withButton(ButtonListCart);
    const ButtonClearCartExtended = withButton(ButtonDeleteCart);
    const PRICE_STICK = 30;
    const sticksOrder: Sticks[] = [{ id: 0, count: 1, price: PRICE_STICK }];
    const [totalPriceSticks, setTotalPriceSticks] =
        useState<number>(PRICE_STICK);

    const handleGetSticks = async (_totalPriceSticks: number) => {
        setTotalPriceSticks(totalPriceSticks + _totalPriceSticks);
    };

    const GetSets = async () => {
        try {
            const res = await db.orders.toArray();
            setOrderSets(res);
        } catch (error) {
            setError(`Error ${error}`);
        }
    };

    const GetTotalPrice = async () => {
        try {
            const res = await db.orders.toArray();
            res.forEach((order) => {
                setTotalPrice(
                    (prevPrice) => prevPrice + order.price * order.count
                );
            });
        } catch (error) {
            setError(`Error ${error}`);
        }
    };
    const GetTotalPriceSticks = async () => {
        try {
            const resStick = await db.sticks.toArray();
            resStick.forEach((stick) => {
                setTotalPriceSticks(
                    (prevPrice) => prevPrice + stick.price * stick.count
                );
            });
        } catch (error) {
            setError(`Error ${error}`);
        }
    };
    useEffect(() => {
        GetTotalPrice();
        GetTotalPriceSticks();
        GetSets();
    }, []);

    return (
        <>
            <Header />
            <Section>
                <div className="cart">
                    <div className="cart__content">
                        <hr />
                        <div className="cart__title">
                            <h1>
                                <b>Корзина</b>
                            </h1>
                            <ButtonClearCartExtended clearAll>
                                <Image
                                    width={18}
                                    height={18}
                                    src="/trash-svgrepo-com.svg"
                                    alt="delete"
                                />
                            </ButtonClearCartExtended>
                        </div>
                        {error ? (
                            <h1>{error}</h1>
                        ) : (
                            setsOrder.map((setOrder) => (
                                <div key={setOrder.key} className="cart__item">
                                    <Image
                                        src="/sushi-card1.png"
                                        width={60}
                                        height={60}
                                        alt="Суша"
                                    />
                                    <div className="cart__text">
                                        <h3>
                                            <b>{setOrder.name}</b>
                                            <p>{setOrder.weight}</p>
                                        </h3>
                                    </div>
                                    <ButtonOrderExtended props={setOrder} />
                                    <div className="cart__price">
                                        <h3>{setOrder.price} ₸</h3>
                                    </div>
                                    <ButtonDeleteCart Order={setOrder}>
                                        <Image
                                            width={18}
                                            height={18}
                                            src="/trash-svgrepo-com.svg"
                                            alt="delete"
                                        />
                                    </ButtonDeleteCart>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                <div className="cart">
                    <div className="cart__content">
                        <hr />
                        <div className="cart__title">
                            <h2>
                                <b>Приборы</b>
                            </h2>
                        </div>
                        <div className="cart__item">
                            <Image
                                src="/sushi-card1.png"
                                width={60}
                                height={60}
                                alt="Суша"
                            />
                            <div className="cart__text">
                                <h3>
                                    <b>Палочки</b>
                                </h3>
                            </div>
                            <ButtonSticksExtended
                                onSendTotalPrice={handleGetSticks}
                                props={sticksOrder[0]}
                            />
                            <div className="cart__price">
                                <h3>{totalPriceSticks} ₸</h3>
                            </div>
                        </div>
                        <div className="order-details">
                            <h2>
                                <b>
                                    Сумма заказа:{" "}
                                    {totalPrice + totalPriceSticks} ₸
                                </b>
                            </h2>
                            <div className="order-details__button-conainer">
                                <Link href="/">
                                    <ButtonOrderCancel>
                                        Отменить
                                    </ButtonOrderCancel>
                                </Link>
                                <ButtonOrder>Заказать</ButtonOrder>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            <Footer />
        </>
    );
}
