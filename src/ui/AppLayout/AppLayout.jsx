import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import { Outlet, useNavigation } from 'react-router-dom';
import style from './AppLayout.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className={style.container}>
      <Header />

      {isLoading ? <Loader /> : <Outlet />}
      <ToastContainer />
    </div>
      
  );
}

export default AppLayout;
