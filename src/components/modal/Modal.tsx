"use client"

import React, { ReactNode } from 'react'
import './styles.scss';

interface ModalProps {
    children: ReactNode; // Тип для дочерних элементов
  }



const Modal: React.FC<ModalProps> = ({ children }) => {
    {/* Функционал модального окна */}
    const [isModalActive, setIsModalActive] = React.useState(false);

    const toggleModal = () => {
        setIsModalActive(!isModalActive);
        console.log(isModalActive);
    };
    {/* Функционал модального окна */}

  return (
    <>
        <div onClick={toggleModal} className={`overlay ${isModalActive ? "active" : ""}`}>
          <span className='modal__element'></span>
          <div className="modal">
            { children }
          </div>
        </div>
    </>
  )
}

export default Modal;
