import { useState } from "react";
import CamperDetails from "../CamperDetails/CamperDetails";
import LinkButton from "../../../../ui/LinkButton/LinkButton";
import { getCamperById } from "../../../../services/api";
import Icon from "../../Icon/Icon";
import styles from "./CamperItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites, delFavorites } from "../../../../redux/catalogSlice";
import { getFavoritesSelector } from "../../../../redux/selectors";

const CamperItem = ({ catalog }) => {
  const [camper, setCamper] = useState({});
  const dispatch = useDispatch();
  const favorites = useSelector(getFavoritesSelector);

  const handelClickShowMore = async (id) => {
    const data = await getCamperById(id);
    setCamper(data);
  };

  const isActive = (camperId) => favorites.some(({ id }) => id === camperId);

  const handlerAddFavorites = (camper) => {
    const findIbxAdvert = favorites.findIndex(({ id }) => id === camper.id);

    if (findIbxAdvert !== -1) {
      dispatch(delFavorites(camper.id));
      return;
    }

    dispatch(addFavorites(camper));
  };

  return (
    <>
      {catalog.map((item) => {
        const {
          id,
          name,
          description,
          gallery,
          location,
          rating,
          price,
          reviews,
          transmission,
          engine,
          kitchen,
          TV,
          bathroom,
          AC,
        } = item;
        return (
          <li className={styles.item} key={id}>
            <div className={styles.wrap_img}>
              <img
                className={styles.image}
                src={gallery[0]["thumb"]}
                alt={name}
                width={290}
                height={310}
              />
            </div>
            <div className={styles.wrap_right_part}>
              <div className={styles.wrap_head_item}>
                <div className={styles.wrap_subtitle}>
                  <h4 className={styles.name_and_prise_text}>{name}</h4>
                  <div className={styles.wrap_price}>
                    <h4 className={styles.name_and_prise_text}>
                      €{price.toFixed(2)}
                    </h4>
                    <Icon
                      className={`${styles.heart} ${
                        isActive(id) && styles.active_heart
                      }`}
                      width="24"
                      height="24"
                      name="heart"
                      onClick={() => handlerAddFavorites(camper)}
                    />
                  </div>
                </div>
                <div className={styles.wrap_reviews}>
                  <Icon
                    className={styles.active_star}
                    width="16"
                    height="16"
                    name="star2"
                  />
                  <p className={styles.reviews}>
                    {rating}({reviews.length} Reviews)
                  </p>
                  <Icon
                    className={styles.map_pin}
                    width="16"
                    height="16"
                    name="map-pin"
                  />
                  <p>{location}</p>
                </div>
              </div>
              <p className={styles.description_advert}>{description}...</p>

              <CamperDetails
                transmission={transmission}
                engine={engine}
                kitchen={kitchen}
                ac={AC}
                tv={TV}
                bathroom={bathroom}
              />

              <LinkButton
                type="show-more"
                className={styles.button_show_more}
                to={`/catalog/${id}`}
              >
                Show more
              </LinkButton>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default CamperItem;
