import { useLoaderData } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCampers } from '../../redux/catalogSlice';
// import styles from './Catalog.module.css'

function Catalog() {
    const campers = useLoaderData();
    const dispatch = useDispatch();

    dispatch(setCampers(campers));

    console.log(campers);
    return (
        <div>
            <h1>Catalog</h1>
        </div>
    )
}

export default Catalog