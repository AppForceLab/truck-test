import styles from "./Form.module.css";
import Button from "../../../ui/Button/Button";
import { toast } from "react-toastify";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const bookingDate = form.bookingDate.value;

    // Validate name (should only contain letters and spaces)
    if (!/^[A-Za-z\s\u0400-\u04FF]+$/.test(name)) {
      toast.error("Name can only contain letters and spaces.", {
        position: "top-right",
        autoClose: 5000,
        pauseOnHover: true,
        theme: "colored",
      });
      return;
    }

    // Validate email (simple validation check)
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address.", {
        position: "top-right",
        autoClose: 5000,
        pauseOnHover: true,
        theme: "colored",
      });
      return;
    }

    // Check if booking date is entered
    if (!bookingDate) {
      toast.error("Please select a booking date.", {
        position: "top-right",
        autoClose: 5000,
        pauseOnHover: true,
        theme: "colored",
      });
      return;
    }

    toast.success("Your booking has been submitted!", {
      position: "top-right",
      autoClose: 5000,
      pauseOnHover: true,
      theme: "colored",
    });
  };

  return (
    <div className={styles.wrap_form}>
      <h2 className={styles.title_form}>Book your campervan now</h2>
      <p className={styles.subtitle_form}>
        Stay connected! We are always ready to help you.
      </p>
      <form onSubmit={handleSubmit}>
        <div className={styles.wrap_input}>
          <input
            className={styles.input_form}
            type="text"
            id="name"
            name="name"
            pattern="^[A-Za-z\s\u0400-\u04FF]+$"
            title="Please enter letters and spaces only"
            required
            placeholder="Name*"
          />

          <input
            className={styles.input_form}
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email*"
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
            placeholder="Comment"
            rows="4"
            cols="50"
          ></textarea>
        </div>
        <div className={styles.wrap_btn}>
          <Button className={styles.btn_form} type="submit">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
