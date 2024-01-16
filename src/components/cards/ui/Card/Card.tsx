import { FC } from 'react';
import { CardData } from '../../model/types/Card';
import classes from './Card.module.css';

interface Props {
  card: CardData;
}

export const Card: FC<Props> = ({ card }) => {
  return (
    <div className={classes.card}>
      <img className={classes.img} src="/public/card_3.jpg" alt="Card Image" />

      <div className={classes.info_container}>
        <h3 className={classes.name}>{card.name.toUpperCase()}</h3>
        <p className={classes.info}>
          Редкость: <p className={classes.special}>{card.rarity}</p>
        </p>
        <p className={classes.info + ' ' + classes.special}>+{card.score}</p>
      </div>
    </div>
  );
};
