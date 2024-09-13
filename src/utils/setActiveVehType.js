export const setActiveVehType = ({
  value,
  activeTypeCar,
  setActiveTypeCar,
}) => {
  let updateIdElements;
  const isActive = activeTypeCar === value;

  if (isActive) {
    updateIdElements = "";
  } else {
    updateIdElements = value;
  }

  setActiveTypeCar(updateIdElements);
};
