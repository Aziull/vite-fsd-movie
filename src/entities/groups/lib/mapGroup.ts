import {GroupDto, GroupRecommendedMediaDto, SubscriberDto} from "../api/types";
import {Group, GroupId, GroupRecommendedMedia, Subscriber} from "../model/types";

export const mapGroup = (dto: GroupDto): Group => {
    return {
        id: dto.id as GroupId,
        subscribers: dto.subscribers.map(mapSubscriber),
        owner: mapSubscriber(dto.owner),
        title: dto.title,
        image: dto.image,
        description: dto.description

    }
}
export const mapSubscriber = (dto: SubscriberDto): Subscriber => {
    return{
        id: dto.id,
        lastName: dto.last_name,
        firstName: dto.first_name,
        avatar: dto.avatar
    }
}

export const mapGroupRecommendation = (dto: GroupRecommendedMediaDto): GroupRecommendedMedia => {
  return {
    id: dto.id,
    media: dto.movie,
  }
}
