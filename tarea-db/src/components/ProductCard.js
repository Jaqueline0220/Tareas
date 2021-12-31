import React from 'react';
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';
import { useCountdown } from './useCountdown';
export const ProductCard = ({ product, seconds }) => {
  const navigate = useNavigate();

  const { countdown, isDisabled } = useCountdown(seconds);

  return (
    <div className="caja">
      <div
        className={`${'product-card__image'} ${isDisabled ? 'product-card__item--disabled' : ''}`}>
        <span className="product-card__time">{`${countdown}s`}</span>
        <img src={product.image} alt={product.title} />
        <h3 className={'product-card__title'}>{product.title}</h3>
        <div className={'product-card__footer'}>
          <p className={'product-card__price'}>
            Precio:<br></br>
            {product.price}
          </p>
          <button
            type="button"
            disabled={isDisabled}
            className={`${'product-card__button'} ${
              isDisabled ? 'product-card__button--disabled' : ''
            }`}
            onClick={() => navigate(`/detalle/${product.id}`)}>
            Ver Detalle
          </button>
        </div>
      </div>
    </div>
  );
};
