import { useRouteError } from 'react-router-dom';
import LinkButton from '../LinkButton/LinkButton';
import styles from './Error.module.css';

function Error() {
  const error = useRouteError();
  return (
    <div className={styles.error_wrap}>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>

      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
