import styles from "../styles/navbar.module.css";
import StateContext from "../contexts/state";
import { useContext } from "react";
import actions from "../reducers/actions";
import { Link } from 'react-router-dom' 	

function Navbar() {
	const { state, dispatch } = useContext(StateContext);
	const total = state.cart.reduce((sum, item) => sum + item.quantity, 0);

	function openModal() {
		dispatch({
			type: actions.OPEN_MODAL,
		});
	}

	return (
		<nav className={styles.navbar}>
			 
			 <Link to="/menu">
			 	<img src={'imagenes/cut-logo.png'} width="250px"/>
			 </Link>
			
			
			<figure className={styles.contenedorLocation}>
                    <i className="fas fa-map-marker-alt"></i>
                    <span  className={styles.location}>León</span>
                        <i id="searchIcon" className="fas fa-search"></i>
                        <span className={styles.search}>Comida...</span>      
          
			</figure>
			
			<figure onClick={openModal}>
				<span>Carrito</span>
				<small>{total}</small>
			</figure>

		</nav>
	);
}

export default Navbar;
