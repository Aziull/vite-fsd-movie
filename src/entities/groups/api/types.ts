import {UserProfileDto} from "../@x/user";
import {MediaDto} from "../@x/media";

export type GroupId = Brand<Id, 'groupId'>


export type SubscriberDto = Omit<UserProfileDto, 'phoneNumber' | 'birthday'>;

export type GroupDto = {
  id: number,
  subscribers: SubscriberDto[],
  owner: SubscriberDto,
  title: string,
  image: string,
  description: string,
}

export type GroupRecommendedMediaDto = {
  id: number,
  movie: MediaDto
}
