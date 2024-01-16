import { rtkApi } from '@/store/rtkApi';
import { CardData } from '../types/Card';
import { PlayerData } from '@/components/player';

const userApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getPlayerCards: build.query<PlayerData & { card_collection: CardData[]; fav_card_collection: CardData[] }, string>({
      query: (player_id: string) => ({ url: '/cards', params: { player_id } }),
    }),
  }),
});

export const { useGetPlayerCardsQuery } = userApi;
