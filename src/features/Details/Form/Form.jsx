
import Button from '../../../ui/Button/Button';
import styles from './Form.module.css';

const Form = () => {
  return (
    <div className={styles.wrap_form}>
      <h2 className={styles.title_form}>Book your campervan now</h2>
      <p className={styles.subtitle_form}>
        Stay connected! We are always ready to help you.
      </p>
      <form>
        <div className={styles.wrap_input}>
          <input
            className={styles.input_form}
            type="text"
            id="name"
            name="name"
            pattern="^[A-Za-z\s]+$"
            title="Please enter letters and spaces only"
            required
            placeholder="Name"
          />

          <input
            className={styles.input_form}
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email"
          />

          <input
            className={styles.input_form}
            type="date"
            id="bookingDate"
            name="bookingDate"
            required
            placeholder="Booking date"
          />
          <textarea
            className={`${styles.input_form} ${styles.textarea_form}`}
            id="comment"
            name="comment"
            rows="4"
            cols="50"
          ></textarea>
        </div>
        <Button className={styles.btn_form} type="submit">
          Send
        </Button>
      </form>
    </div>
  );
};

export default Form;
