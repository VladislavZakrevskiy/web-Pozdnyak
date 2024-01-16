import { Dispatch, FC, SetStateAction, useState } from 'react';
import { CardData } from '../../model/types/Card';
import classes from './SortBar.module.css';
import { SortBarItem } from './SortBarItem';
import { Rarity } from '@/types/Rarity';

interface Props {
  setCurrentCards: Dispatch<SetStateAction<CardData[]>>;
  cards: CardData[];
}

export const SortBar: FC<Props> = ({ setCurrentCards, cards }) => {
  const [activeBtn, setActiveBtn] = useState<'All' | Rarity>('All');

  const onClickAll = () => {
    setCurrentCards(cards);
    setActiveBtn('All');
  };

  const onClickRarityBuilder = (rarity: Rarity) => () => {
    setCurrentCards(cards.filter((card) => card.rarity === rarity));
    setActiveBtn(rarity);
  };

  return (
    <div className={classes.sortbar}>
      <SortBarItem isActive={activeBtn === 'All'} onClick={onClickAll}>
        Все
      </SortBarItem>
      {Object.values(Rarity).map((rarity) => (
        <SortBarItem isActive={activeBtn === rarity} onClick={onClickRarityBuilder(rarity)}>
          {rarity}
        </SortBarItem>
      ))}
    </div>
  );
};
