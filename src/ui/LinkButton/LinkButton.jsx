import { Link, useNavigate } from 'react-router-dom';
import style from './LinkButton.module.css';
import PropTypes from 'prop-types';


function LinkButton({ children, to, type }) {
  const navigate = useNavigate();

  const className = `${style.btn}`;

  if (to === '-1')
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  if (type === 'primary')
    return (
      <Link to={to} className={className + ' btn-primary'}>
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
  to: PropTypes.string.isRequired,
  type: PropTypes.string,
};


export default LinkButton;
