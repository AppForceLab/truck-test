import Icon from '../features/Catalog/Icon/Icon';

export const createIconStarsArr = (number, notActive, active) => {
  let i = 0;

  const iconsStar = [];

  while (i < 5) {
    if (number > i) {
      iconsStar.push(
        <Icon className={active} width="16" height="16" name="star2" />
      );
      i++;
    } else {
      iconsStar.push(
        <Icon className={notActive} width="16" height="16" name="star" />
      );
      i++;
    }
  }

  return iconsStar;
};
