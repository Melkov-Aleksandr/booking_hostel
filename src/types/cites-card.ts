import { CitesProps } from "./city";
import { LocationProps } from "./location";

export enum CardType {
  Apartament = 'apartament',
  Room = 'room',
  House = 'house',
}

export type CitesCardProps = {
  id: string;
  title: string;
  type: CardType;
  price: number;
  city: CitesProps;
  location: LocationProps;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}
