import { CitesCardProps } from "./cites-card";
import { UserProps } from "./user";

export type OffersProps = CitesCardProps & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: UserProps;
  images: string[];
  maxAdults: number;
}
