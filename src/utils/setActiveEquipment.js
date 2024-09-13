export const setActiveEquipment = ({
    value,
    activeElements,
    setActiveElements,
  }) => {
    let updateIdElements;
    const isActive = activeElements.includes(value);
  
    if (isActive) {
      updateIdElements = activeElements.filter(el => el !== value);
    } else {
      updateIdElements = [...activeElements, value];
    }
  
    setActiveElements(updateIdElements);
  };