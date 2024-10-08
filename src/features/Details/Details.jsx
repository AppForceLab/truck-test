import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Button from "../../ui/Button/Button";
import Icon from "../../ui/Icon/Icon";
import Features from "./Features/Features";
import Form from "../Details/Form/Form";
import Reviews from "./Reviews/Reviews";
import styles from "./Details.module.css";

function Details() {
  const [toggleActiveBtn, setToggleActiveBtn] = useState("features");

  const camper = useLoaderData();

  const handleClickFeatures = () => {
    setToggleActiveBtn("features");
  };

  const handleClickReviews = () => {
    setToggleActiveBtn("reviews");
  };

  const {
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
    ac,
    bathroom,
    tv,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
    details,
    form,
    length,
    width,
    height,
    tank,
    consumption,
  } = camper;

  const vehicleDetails = {
    form,
    length,
    width,
    height,
    tank,
    consumption,
  };

  return (
    <main className={styles.container}>
      <div className={styles.modal_content}>
        <div className={styles.wrap_head_modal}>
          <h4 className={styles.name}>{name}</h4>
        </div>
        <div className={styles.wrap_loc_and_rating}>
          <Icon
            className={styles.active_star}
            width="16"
            height="16"
            name="star2"
          />
          <p className={styles.reviews}>{rating} (Reviews)</p>
          <Icon className={styles.map_pin} width="16" height="16" name="city" />
          <p>{location}</p>
        </div>
        <h4 className={styles.price}>€{price.toFixed(2)}</h4>
        <ul className={styles.gallery}>
          {gallery.map((img) => (
            <li className={styles.wrap_img} key={img.original}>
              <img className={styles.image} src={img.original} alt={name} />
            </li>
          ))}
        </ul>
        <p className={styles.desc}>{description}</p>
        <div className={styles.wrap_btn}>
          {
            <Button
              onClick={handleClickFeatures}
              className={`${styles.btn_modal} ${
                toggleActiveBtn === "features" && styles.active_btn
              }`}
              type="button"
            >
              Features
            </Button>
          }
          {
            <Button
              onClick={handleClickReviews}
              className={`${styles.btn_modal} ${
                toggleActiveBtn === "reviews" && styles.active_btn
              }`}
              type="button"
            >
              Reviews
            </Button>
          }
        </div>

        <div className={styles.wrap_features}>
          {toggleActiveBtn === "features" && (
            <>
              <Features
                vehicleDetails={vehicleDetails}
                transmission={transmission}
                engine={engine}
                kitchen={kitchen}
                ac={ac}
                bathroom={bathroom}
                tv={tv}
                radio={radio}
                refrigerator={refrigerator}
                microwave={microwave}
                gas={gas}
                water={water}
                details={details}
              />
              <Form />
            </>
          )}
          {toggleActiveBtn === "reviews" && (
            <>
              <Reviews reviews={reviews} />
              <Form />
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default Details;
