import { Rarity } from "@/types/Rarity"

export interface CardData {
    card_id: number
    name: string
    rarity: Rarity
    srcAsset: string
    score: number
}
