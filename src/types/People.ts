import PersonProps from './Person';

type PeopleProps = {
  people: {
    [key: string]: PersonProps;
  };
};

export default PeopleProps;
