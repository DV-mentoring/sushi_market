import React from 'react'
import './../styles/components/_category.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function Category() {
  return (
    <>
    <div className="section">
        <div className="category">
            <div className="category__content">
                <div className="category__list">
                    <ul>
                        <li><Link href="">Наборы</Link></li>
                        <li><Link href="">Роллы и суши</Link></li>
                        <li><Link href="">Премиум</Link></li>
                        <li><Link href="">Темпура</Link></li>
                        <li><Link href="">Запеченные</Link></li>
                        <li><Link href="">Горячее и салаты</Link></li>
                        <li><Link href="">Напитки и десерты</Link></li>
                        <li><Link href="">Специи</Link></li>
                        <li><Link href="">Соусы</Link></li>
                    </ul>
                </div>
                <div className="category__delivery">
                    <h4>Доставка и оплата</h4>
                </div>
                <div className="category__language">
                    <h4>RU/KZ</h4>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}