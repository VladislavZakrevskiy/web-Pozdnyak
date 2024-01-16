import { Loader } from '@/components/common/Loader/Loader';
import { FC } from 'react';
import { CardData } from '../../model/types/Card';
import { Card } from '../Card/Card';
import classes from './CardList.module.css';

interface Props {
  cards: CardData[];
  isLoading: boolean;
  isError: boolean;
}

export const CardList: FC<Props> = ({ cards, isError, isLoading }) => {
  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (isError || !cards) {
    return <div></div>;
  }

  return (
    <div className={classes.list}>
      {cards.map((card) => (
        <Card key={card.card_id} card={card} />
      ))}
    </div>
  );
};
