import styles from "../styles/notfound.module.css";

function Notfound(){
    return(
        <div id="menu-container" className={styles["menu-container"]}>
            <section className={styles.menu}>
                <div className={styles.main}>
                    <h1>Lo sentimos, esta pagina no existe...</h1>
                    <img src={'imagenes/logo-not-found.png'} width="150px"/>
                </div>
            </section>
        </div>
    )
}

export default Notfound;