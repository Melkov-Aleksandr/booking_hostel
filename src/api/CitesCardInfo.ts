import { TypeCard, CitesCardProps } from '../components/citys-card/citys-card.props';

const Cards: CitesCardProps[] = [
    {
        id: 1,
        mark: true,
        img: 'img/apartment-01.jpg',
        priceValue: 120,
        priceText: 'night',
        bookMark: false,
        title: 'Beautiful & luxurious apartment at great location',
        cardType: TypeCard.Apartament,
    },
    {
        id: 2,
        mark: true,
        img: 'img/room.jpg',
        priceValue: 80,
        priceText: 'night',
        bookMark: true,
        title: 'Wood and stone place',
        cardType: TypeCard.Room,
    },
    {
        id: 3,
        mark: false,
        img: 'img/apartment-02.jpg',
        priceValue: 132,
        priceText: 'night',
        bookMark: false,
        title: 'Canal View Prinsengracht',
        cardType: TypeCard.Apartament,
    },
    {
        id: 4,
        mark: true,
        img: 'img/apartment-03.jpg',
        priceValue: 180,
        priceText: 'night',
        bookMark: false,
        title: 'Nice, cozy, warm big bed apartment',
        cardType: TypeCard.Apartament,
    },
    {
        id: 5,
        mark: false,
        img: 'img/room.jpg',
        priceValue: 80,
        priceText: 'night',
        bookMark: true,
        title: 'Wood and stone place',
        cardType: TypeCard.Room,
    },
]

export const getCards = () => Cards;
