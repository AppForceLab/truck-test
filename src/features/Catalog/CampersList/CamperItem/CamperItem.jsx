import { useEffect, useState } from "react";
import CamperDetails from "../CamperDetails/CamperDetails";
import LinkButton from "../../../../ui/LinkButton/LinkButton";
import Button from "../../../../ui/Button/Button";
import { getCamperById } from "../../../../services/api";
import Icon from "../../Icon/Icon";
import styles from "./CamperItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { clickFavorites, setFilter } from "../../../../redux/catalogSlice";
import { getFavoritesSelector, getFilter } from "../../../../redux/selectors";

const CamperItem = ({ catalog }) => {
  const [camper, setCamper] = useState({});
  const [page, setPage] = useState(1);
  const [filteredCampers, setFilteredCampers] = useState([]);
  const dispatch = useDispatch();
  const favorites = useSelector(getFavoritesSelector);
  const filter = useSelector(getFilter);

  // Helper function to filter campers
  const applyFilters = (campers) => {
    let filtered = campers;

    // Filter by location
    if (filter.location !== "") {
      filtered = filtered.filter((item) => item.location === filter.location);
    }

    // Filter by equipment
    if (filter.equipment.length > 0) {
      filtered = filtered.filter((item) => {
        return filter.equipment.every((eq) => {
          switch (eq.toLowerCase()) {
            case "transmission":
              return item.transmission !== "manual";
            case "ac":
              return item.AC === true;
            case "shower":
              return item.bathroom === true;
            case "kitchen":
              return item.kitchen === true;
            case "tv":
              return item.TV === true;
            default:
              return false;
          }
        });
      });
    }

    if (filter.type !== "") {
      filtered = filtered.filter((item) => item.form === filter.type);
    }

    return filtered;
  };

  useEffect(() => {
    setFilteredCampers(applyFilters(catalog));
    setPage(1); // Reset the page when the filter or catalog changes
  }, [filter, catalog]);

  useEffect(() => {
    return () => {
      dispatch(setFilter({ location: "", equipment: [], type: "" })); // Clear filters
    };
  }, [dispatch]);

  const handleClickShowMore = async (id) => {
    const data = await getCamperById(id);
    setCamper(data);
  };

  const isActive = (camperId) => favorites.some(({ id }) => id === camperId);

  const handleAddFavorites = (id) => {
    dispatch(clickFavorites(id));
  };

  const handlerLoadMore = () => {
    if (page * 4 >= filteredCampers.length) {
      return; // Do nothing if no more campers to load
    }
    setPage((prevPage) => prevPage + 1);
  };

  // Calculate the campers to display based on the current page
  const displayedCampers = filteredCampers.slice(0, page * 4);

  return (
    <>
      {filteredCampers.length === 0 && (
        <h4 className={styles.not_found}>
          Sorry, we couldn't find any campers that match your search.
        </h4>
      )}

      {displayedCampers.map((item) => {
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
                      onClick={() => handleAddFavorites(id)}
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
                    name="city"
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
      
      {page * 4 < filteredCampers.length && (
        <Button
          type="button"
          className={styles.button_load_more}
          onClick={handlerLoadMore}
        >
          Load more
        </Button>
      )}
    </>
  );
};

export default CamperItem;
