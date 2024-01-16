export interface PlayerData {
  player_id: string;
  first_name: string;
  last_name?: string ;
  username?: string ;
  score_all_time: number;
  score_season: number;
  free_tryings: number;
  last_trying: Date;
}
