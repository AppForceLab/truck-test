import { Link, useNavigate } from "react-router-dom";
import style from "./LinkButton.module.css";
import PropTypes from "prop-types";

function LinkButton({ children, to, type, onClick }) {
  const navigate = useNavigate();

  const className = `${style.btn}`;

  if (to === "-1")
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  if (type === "primary")
    return (
      <Link to={to} className={style.btn}>
        {children}
      </Link>
    );

  if (type === "search")
    return (
      <Link to={to} onClick={onClick} className={style.btn_search}>
        {children}
      </Link>
    );

  if (type === "show-more")
    return (
      <Link
        className={style.btn_show_more}
        to={to}
      >
        {children}
      </Link>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  type: PropTypes.string,
};

export default LinkButton;
