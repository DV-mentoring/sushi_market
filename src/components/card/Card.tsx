import React from 'react'
import './styles.scss';
import Image from 'next/image';
import ICard from '../sets/ICard';
import Button from '../button/Button';


interface CardProps {
  card: ICard;
}


const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <>
        <div key={card.id} className="card">
            <Image
                src={card.image  || '/productBlurIcon.svg'}
                width={262}
                height={262}
                className='card__image'
                alt="">
            </Image>
            <div className="card__content">
                <div className="card__option">
                    <h4 className='card__title'><b>{card.title}</b></h4>
                    <p className='card__weight'>{card.weight} г</p>
                </div>
                <p className='card__description'>{card.description}</p>
                <div className="card__option">
                    <h3 className='card__price'><b>{card.price} ₸</b></h3>
                    <Button style='button button__cart-alt'>В Корзину</Button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card;
