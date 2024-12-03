import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import './styles.scss';

export default function Footer() {
  return (
    <>
        <div className="section section-footer">
          <div className="wrapper footer">
            <div className='footer__container'>
              <div className="footer__logo">
                <Image
                    src="/footerLogo.svg"
                    width={159}
                    height={50}
                    className='card__image'
                    alt="">
                </Image>
                <h2>+7 747 095 83 04</h2>
              </div>
              <hr className='footer-show-mobile' />
              <div className="footer__apps">
                <Link href={"#"}>
                  <Image
                      src="/appstore.svg"
                      width={120}
                      height={40}
                      className='card__image'
                      alt="">
                  </Image>
                </Link>
                <Link href={"#"}>
                  <Image
                      src="/googleplay.png"
                      width={120}
                      height={40}
                      className='card__image'
                      alt="">
                  </Image>
                </Link>
              </div>
              <hr className='footer-show-mobile' />
              <div className="footer__options">
                <ul>
                  <li>
                    <Link href="#">Политика конфиденциальности</Link>
                  </li>
                  <li>
                    <Link href="#">Согласие на обработку ПД</Link>
                  </li>
                  <li>
                    <Link href="#">Контактная и правовая информация</Link>
                  </li>
                  <li>
                    <Link href="#">Акции</Link>
                  </li>
                  <li>
                    <Link href="#">Программа лояльности “Ёби-клуб”</Link>
                  </li>
                  <li>
                    <Link href="#">О компании</Link>
                  </li>
                </ul>
              </div>

            </div>
            <hr />
            <div className="footer__adress">
              <p>ЁбиДоёби - Доставка суши и роллов в Павлодаре</p>
            </div>
            <hr/>
            <div className="footer__copy">
              <div>
                <h4>Ёбидоёби, 2024</h4>
                <p>Информация на сайте носит справочный характер. Внешний вид и состав блюд могут отличаться от представленных на сайте.
                Подробности у операторов. акции и скидки не суммируются и не распространяются на наборы, десерты, напитки</p>                
              </div>
              <div>
                <Link href="#">Наверх</Link>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
