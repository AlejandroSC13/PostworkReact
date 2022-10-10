import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import StateContext from "../contexts/state";
import actions from "../reducers/actions";
import useHttp from "../hooks/useHttp";
import styles from "../styles/meal.module.css"

import { Link } from 'react-router-dom'


function Meal(){

    const { id } = useParams();
    const { request } = useHttp();
    const { dispatch, state } = useContext(StateContext);

	useEffect(() => {
		async function fetchMeals() {
            console.log(id);
			const data = await request({ url: `https://food-station-6d336-default-rtdb.firebaseio.com/comida/${id-1}.json` });
			
            dispatch({
                type: actions.SET_MEAL,
                payload: data,
            });
		}

		fetchMeals();
	}, [request]);
    console.log(state.meal)

    return(
        
        <div id="menu-container" className={styles["menu-container"]}>
			<section className={styles.menu}>
				<div className={styles.main}>
                    <div class={styles["container"]}>
                        <img className={styles["img-meal"]}
                            src={state.meal.img}
                        />

                    <div class={styles["container__text"]}>
                        <h1>{state.meal.name}</h1>
                        <div class={styles["container__text__star"]}>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        </div>
                        <p id={styles.desc}>
                        If you're fan of caramel cake, then you'll love our Caramel Cake Pancakes.
                        We Complete these over-the-top pancakes with Caramel Syrup.
                        </p>
                        <div className={styles.contAdd}>
                        <h3 id={styles.add}>Agregar al carrito</h3>
                        <small>Elegir 1</small>
                        </div>
                        
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="anime" name="hobby" />
                            <label class="form-check-label" >Agua mineral de lata</label>
                         </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="manga" name="hobby" />
                            <label class="form-check-label" >Refresco de lata de limon</label>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="disabled"  name="hobby" />
                            <label class="form-check-label" >Refresco de lata de coca cola</label>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="disabled-checked"   name="hobby" />
                            <label class="form-check-label" >Refresco de lata de manzana</label>
                        </div>
                    </div>

                    <Link  to="/menu">
                        <button  className={styles['btn-regresar']} >Regresar</button>
                    </Link>
                </div>

                </div>
            </section>
        </div>
    )
}

export default Meal;