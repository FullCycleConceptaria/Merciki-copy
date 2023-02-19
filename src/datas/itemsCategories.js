import pig from '../assets/img/thumbnail/pig.jpg';
import house from '../assets/img/thumbnail/house.jpg';
import clothes from '../assets/img/thumbnail/clothes.jpg';
import books from '../assets/img/thumbnail/books.jpg';
import horse from '../assets/img/thumbnail/horse.jpg';
import child from '../assets/img/thumbnail/child.jpg';
import gameboy from '../assets/img/thumbnail/gameboy.jpg';
import sport from '../assets/img/thumbnail/sport.jpg';
import soap from '../assets/img/thumbnail/soap.jpg';
import fruit from '../assets/img/thumbnail/fruit.jpg';

import cdItem from '../assets/img/thumbnail/goodDeals/cd.jpg';
import clothesItem from '../assets/img/thumbnail/goodDeals/clothes.jpg';
import bookItem from '../assets/img/thumbnail/goodDeals/book.jpg';
import illustration from '../assets/img/thumbnail/goodDeals/illustration.jpg';


export const itemsCategories = [
  {
    id: 1,
    link: 'good_deals',
    src: pig,
    title: 'Good deals',
    text: 'Treat yourself by spending a single Merci',
    each: [
      {
        id: 1,
        src: cdItem,
        title: '3 japanese cd',
        price: '1',
        state: 'good',
        more: '',
      },
      {
        id: 2,
        src: clothesItem,
        title: `Some clothes i don't wear`,
        price: '1',
        state: 'a little used',
        more: '',
      },
      {
        id: 3,
        src: bookItem,
        title: 'a good book',
        price: '1',
        state: 'perfect',
        more: 'title: titanic',
      },
    ],
  },
  {
    id: 2,
    link: 'house',
    src: house,
    title: 'House',
    text: 'Treat yourself by spending a single Merci',
    each: [
      {
        id: 1,
        src: illustration,
        title: 'Something',
        price: 'some',
        state: 'ok',
        more: '',
      },
      {
        id: 2,
        src: illustration,
        title: `Something`,
        price: 'some',
        state: 'ok',
        more: '',
      },
      {
        id: 3,
        src: illustration,
        title: `Something`,
        price: 'some',
        state: 'ok',
        more: '',
      },
    ],
  },
  {
    id: 3,
    link: 'clothes_andaccessories',
    src: clothes,
    title: 'Clothes and accessories',
    text: 'Clothes, shoes, for adults and children',
    each: [
      {
        id: 1,
        src: illustration,
        title: 'Something',
        price: 'some',
        state: 'ok',
        more: '',
      },
      {
        id: 2,
        src: illustration,
        title: `Something`,
        price: 'some',
        state: 'ok',
        more: '',
      },
      {
        id: 3,
        src: illustration,
        title: `Something`,
        price: 'some',
        state: 'ok',
        more: '',
      },
    ],
  },
  {
    id: 4,
    link: 'reading',
    src: books,
    title: 'Reading',
    text: 'Books, comics, magazines',
    each: [
      {
        id: 1,
        src: illustration,
        title: 'Something',
        price: 'some',
        state: 'ok',
        more: '',
      },
      {
        id: 2,
        src: illustration,
        title: `Something`,
        price: 'some',
        state: 'ok',
        more: '',
      },
      {
        id: 3,
        src: illustration,
        title: `Something`,
        price: 'some',
        state: 'ok',
        more: '',
      },
    ],
  },
  {
    id: 5,
    link: 'games_and_toy',
    src: horse,
    title: 'Games and toys',
    text: 'Video and board game',
    each: [
      {
        id: 1,
        src: illustration,
        title: 'Something',
        price: 'some',
        state: 'ok',
        more: '',
      },
      {
        id: 2,
        src: illustration,
        title: `Something`,
        price: 'some',
        state: 'ok',
        more: '',
      },
      {
        id: 3,
        src: illustration,
        title: `Something`,
        price: 'some',
        state: 'ok',
        more: '',
      },
    ],
  },
  {
    id: 6,
    link: 'childcare',
    src: child,
    title: 'Childcare',
    text: 'Child clothing, accessories, banners, strollers...',
    each: [
      {
        id: 1,
        src: illustration,
        title: 'Something',
        price: 'some',
        state: 'ok',
        more: '',
      },
      {
        id: 2,
        src: illustration,
        title: `Something`,
        price: 'some',
        state: 'ok',
        more: '',
      },
      {
        id: 3,
        src: illustration,
        title: `Something`,
        price: 'some',
        state: 'ok',
        more: '',
      },
    ],
  },
  {
    id: 7,
    link: 'multimedia',
    src: gameboy,
    title: 'Multimedia and electronics',
    text: 'Phone, computeur, picture, videos...',
    each: [
      {
        id: 1,
        src: illustration,
        title: 'Something',
        price: 'some',
        state: 'ok',
        more: '',
      },
      {
        id: 2,
        src: illustration,
        title: `Something`,
        price: 'some',
        state: 'ok',
        more: '',
      },
      {
        id: 3,
        src: illustration,
        title: `Something`,
        price: 'some',
        state: 'ok',
        more: '',
      },
    ],
  },
  {
    id: 8,
    link: 'sport',
    src: sport,
    title: 'Sport',
    text: 'Equipment, clothes, material...',
    each: [
      {
        id: 1,
        src: illustration,
        title: 'Something',
        price: 'some',
        state: 'ok',
        more: '',
      },
      {
        id: 2,
        src: illustration,
        title: `Something`,
        price: 'some',
        state: 'ok',
        more: '',
      },
      {
        id: 3,
        src: illustration,
        title: `Something`,
        price: 'some',
        state: 'ok',
        more: '',
      },
    ],
  },
  {
    id: 9,
    link: 'self_care',
    src: soap,
    title: 'Self Care',
    text: 'Shampoo, soap, make-up...',
    each: [
      {
        id: 1,
        src: illustration,
        title: 'Something',
        price: 'some',
        state: 'ok',
        more: '',
      },
      {
        id: 2,
        src: illustration,
        title: `Something`,
        price: 'some',
        state: 'ok',
        more: '',
      },
      {
        id: 3,
        src: illustration,
        title: `Something`,
        price: 'some',
        state: 'ok',
        more: '',
      },
    ],
  },
  {
    id: 10,
    link: 'food',
    src: fruit,
    title: 'Food',
    text: 'Fruits and vegetables',
    each: [
      {
        id: 1,
        src: illustration,
        title: 'Something',
        price: 'some',
        state: 'ok',
        more: '',
      },
      {
        id: 2,
        src: illustration,
        title: `Something`,
        price: 'some',
        state: 'ok',
        more: '',
      },
      {
        id: 3,
        src: illustration,
        title: `Something`,
        price: 'some',
        state: 'ok',
        more: '',
      },
    ],
  },
];