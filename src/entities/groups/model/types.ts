import { UserProfile } from "../@x/user";
import {Media} from "../@x/media";

export type GroupId = Brand<Id, 'groupId'>


export type Subscriber = Omit<UserProfile, 'phoneNumber' | 'birthday'>;

export type Group = {
    id: GroupId,
    subscribers: Subscriber[],
    owner: Subscriber,
    title: string,
    image: Url,
    description: string,
}

export type GroupRecommendedMedia = {
  id: number,
  media: Media
}
