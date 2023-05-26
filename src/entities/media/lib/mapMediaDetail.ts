import { MediaDetailDto, MediaDto } from "../api/types"
import { MediaDetail } from "../model/types"
import { mapMedia } from "./mapMedia"

export const mapMediaDetail = (dto: MediaDetailDto): MediaDetail => {
    return {
        ...mapMedia(dto as MediaDto),
        directors: dto.directors,
        actors: dto.actors,
        tagline: dto.tagline,
        description: dto.description,
        country: dto.country,
        worldPremiere: dto.world_premiere,
        budget: dto.budget,
        feedInUsa: dto.feed_in_usa,
        feedInWorld: dto.feed_in_world,
        draft: dto.draft,
        type: dto.type
    }
}