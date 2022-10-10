import styles from "../styles/checkout.module.css";
import StateContext from "../contexts/state";
import { useContext } from "react";
import Button from "../ui/button";
import { Link } from 'react-router-dom';

function Checkout(){
    const { state, dispatch } = useContext(StateContext);

    return(
        <div id="menu-container" className={styles["menu-container"]}>
            <section className={styles.menu}>
				<div className={styles.main}>
                    <h1>Tu orden:</h1>
                    <ul className={styles["cart-modal"]}>
                    {state.cart.map((cartItem) => (
                            <li>
                                <section className={styles["cart-item"]}>
                                    <article>
                                        <h2>{cartItem.meal.name}</h2>
                                        <div>
                                            <h4>$ {cartItem.meal.price}</h4>
                                            <figure>
                                                <h4>x {cartItem.quantity}</h4>
                                            </figure>
                                        </div>
                                    </article>
                                </section>
                            </li>
                        ))}
                    </ul>    
                </div>
                    <Link to="/menu">
                        <Button className={styles.pagar}>Pagar</Button>
                    </Link>
                </section>
        </div>
    )
}

export default Checkout;