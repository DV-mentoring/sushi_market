import React from "react";
import "./styles.scss";
import Image from "next/image";
import { ICard } from "@/components/sets/ICard";
import { ButtonAddCard } from "@/components/buttons/button-add-card/ButtonAddCard";
import { withButton } from "@/components/buttons/HOC/withButton";
import { Order } from "@/services/db";

interface CardProps {
    card: ICard;
}

export const Card: React.FC<CardProps> = ({ card }) => {
    const [src, setSrc] = React.useState(card.image || "/productBlurIcon.png");
    const ButtonAddCardExtended = withButton(ButtonAddCard);
    const OrderProp: Order = {
        name: card.title,
        weight: card.weight,
        key: card.id,
        count: 1,
        price: card.price,
    };

    return (
        <div key={card.id} className="card">
            <Image
                src={src}
                width={262}
                height={262}
                className="card__image"
                alt={card.title}
                onError={() => setSrc("/productBlurIcon.png")}
            />
            <div className="card__content">
                <div className="card__option">
                    <h4 className="card__title">
                        <b>{card.title}</b>
                    </h4>
                    <p className="card__weight">{card.weight} г</p>
                </div>
                <p className="card__description">{card.description}</p>
                <div className="card__option">
                    <h3 className="card__price">
                        <b>{card.price} ₸</b>
                    </h3>
                    <ButtonAddCardExtended Order={OrderProp}>
                        В корзину
                    </ButtonAddCardExtended>
                </div>
            </div>
        </div>
    );
};
