export enum TypeCard {
    Apartament = 'Apartament',
    Room ='Room',
};

export type CitesCardProps = {
    id: number,
    mark: boolean,
    img: string,
    priceValue: number,
    priceText: string,
    bookMark: boolean,
    title: string,
    cardType: TypeCard,
}
