import PersonProps from '../types/Person';

type PeopleObject = {
  [key: string]: PersonProps;
};

// prettier-ignore
const people: PeopleObject = {
  'Mai': {
    name: 'Maiara Rodrigues',
    nickName: 'Mai',
    photo: 'mai.jpg',
  },
  'Gus': {
    name: 'Gustavo Bento de Paula',
    nickName: 'Gus',
    photo: 'gus.jpg',
  },
  'Clei': {
    name: 'Cleidiano Oliveira de Souza',
    nickName: 'Clei',
    photo: 'clei.jpg',
  },
  'Yanas': {
    name: 'Rodrigo Yanase',
    nickName: 'Yanas',
    photo: 'yanas.jpg',
  },
  'Doug': {
    name: 'Douglas "Amarelo" Lopes',
    nickName: 'Doug',
    photo: 'doug.jpg',
  },
  'Thatá': {
    name: 'Thaís Fukuda',
    nickName: 'Thatá',
    photo: 'thata.jpg',
  },
  'Rafa': {
    name: 'Rafael "Zica" Martins',
    nickName: 'Rafa',
    photo: 'rafa.jpg',
  },
  'John': {
    name: 'John Guerson',
    nickName: 'John',
    photo: 'john.jpg',
  },
};

export default people;
