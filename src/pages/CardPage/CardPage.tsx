import { useGetPlayerCardsQuery } from '@/components/cards/model/api/cardApi';
import { useState } from 'react';
import { useTelegram } from '../../utils/hooks/useTelegram';
import { CardData, CardList, SortBar } from '@/components/cards';
import classes from './CardPage.module.css';

const CardPage = () => {
  const { user } = useTelegram();
  console.log(user);
  const { data: player, isLoading, isError } = useGetPlayerCardsQuery(user?.id?.toString() || '');
  const cards: CardData[] = player?.card_collection || [];
  const [currentCards, setCurrentCards] = useState<CardData[]>([...cards]);

  return (
    <div className={classes.page}>
      <SortBar cards={cards} setCurrentCards={setCurrentCards} />
      <CardList cards={currentCards} isError={isError} isLoading={isLoading} />
    </div>
  );
};

export default CardPage;
