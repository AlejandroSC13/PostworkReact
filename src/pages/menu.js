import Navbar from "../ui/navbar";
import Menu from "../components/menu";
import CartModal from "../components/cart-modal";
import { useReducer, useState, useEffect } from "react";

import MenuContext from "../contexts/menu";
import useHttp from "../hooks/useHttp";

function MenuPage() {
	const [meals, setMeals] = useState([]);
	const { request } = useHttp();

	useEffect(() => {
		async function fetchMeals() {
			const data = await request({ url: "https://food-station-6d336-default-rtdb.firebaseio.com/comida.json" });
			setMeals(data || []);
		}

		fetchMeals();
	}, [request]);
	
	return (
		<MenuContext.Provider value={meals}>
				<Menu />
		</MenuContext.Provider>
	);
}

export default MenuPage;
