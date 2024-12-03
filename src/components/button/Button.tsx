import React from 'react';
import './styles.scss';

  interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    style: string;
  }

export default function Button({ onClick, children, style }: ButtonProps) {

  return (
    <>
        <button onClick={onClick} className={style} role="button" tabIndex={0} aria-label="Кнопка">
          { children }
        </button>
    </>
  );
}
