import Icon from '../features/Catalog/Icon/Icon';

export const createEquipment = () => {
  return [
    {
      id: 'e1',
      value: 'ac',
      svg: <Icon width="32" height="32" name="ac" />,
      text: 'AC',
    },
    {
      id: 'e2',
      value: 'transmission',
      svg: <Icon width="32" height="32" name="automatic" />,
      text: 'Automatic',
    },
    {
      id: 'e3',
      value: 'kitchen',
      svg: <Icon width="32" height="32" name="kitchen" />,
      text: 'Kitchen',
    },
    {
      id: 'e4',
      value: 'TV',
      svg: <Icon width="32" height="32" name="tv" />,
      text: 'TV',
    },
    {
      id: 'e5',
      value: 'shower',
      svg: <Icon width="32" height="32" name="bathroom" />,
      text: 'Bathroom',
    },
  ];
};