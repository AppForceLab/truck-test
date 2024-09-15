import Icon from '../ui/Icon/Icon';

export const createVehicleType = () => {
  return [
    {
      id: 't1',
      value: 'van',
      svg: <Icon width="40" height="28" name="van" />,
      text: 'Van',
    },
    {
      id: 't2',
      value: 'fullyIntegrated',
      svg: <Icon width="40" height="28" name="fully_Integrated" />,
      text: 'Fully Integrated',
    },
    {
      id: 't3',
      value: 'alcove',
      svg: <Icon width="40" height="28" name="alcove" />,
      text: 'Alcove',
    },
  ];
};
