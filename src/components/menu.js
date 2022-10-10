import styles from "../styles/menu.module.css";
import Button from "../ui/button";
import MenuContext from "../contexts/menu";
import { useContext, useRef } from "react";
import StateContext from "../contexts/state";
import actions from "../reducers/actions";
import { Link } from 'react-router-dom';

function Menu() {
	const inputs = useRef([]);
	const meals = useContext(MenuContext);
	const { dispatch } = useContext(StateContext);

	function addMeal(index) {
		const meal = meals[index];
		const input = inputs.current[index];

		if (input.value) {
			dispatch({
				type: actions.ADD_MEAL,
				payload: { meal, quantity: parseInt(input.value) },
			});

			dispatch({
				type: actions.OPEN_MODAL,
			});

			input.value = "1";
		}
	}

	return (
		<div id="menu-container" className={styles["menu-container"]}>
			<section className={styles.menu}>
			<h1>Menu</h1>
				<div className={styles.main}>
				
				{meals.map((item, index) => (
					
					<div className={styles.card}>
						<Link  style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/meal/${item.id}`} >
						<div className={styles.layercontainer}>
							<img src={item.img} width="100%"/> 
							<div className={styles.layer}>
								<h2>Ver más</h2>
							</div>
						</div>
						
						</Link>  
							<div className={styles["body-card"]}> 
								<h3>{item.name}</h3>
								<p>{item.desc}</p>
								<div className={styles["add-cart"]}>
									<p>${item.price}</p>
									<div>
										<div className={styles["add-meal"]}>
													<label> Cantidad</label>										
													<input
													defaultValue={1}
													type="number"
													ref={(el) => (inputs.current[index] = el)}
													className = {styles.cantidad}
													/>		
										</div>
										<Button className={styles.button} onClick={() => addMeal(index)}>+ Agregar</Button>
									</div>
								</div>
																
							</div> 
						
					</div>
					
				))}
				</div>
			</section>
		</div>
	);
}

export default Menu;
