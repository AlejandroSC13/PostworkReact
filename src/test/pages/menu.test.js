import { render, screen } from "@testing-library/react";
import Menu from "../../pages/menu";
import StateContext from "../../contexts/state";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

// Mock de toda la biblioteca "react-router-dom"
jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useNavigate: jest.fn(),
}));

describe("Menu", () => {
	let dispatch;
	let container;

	beforeEach(async () => {
		// jest.fn() crea un mock
		window.fetch = jest.fn();
		dispatch = jest.fn();

        dispatch.mockResolvedValueOnce({
			json: async () => [
				{
                    desc: "Cafe tipo Macciato con topping de caramelo",
                    id: 1,
                    img: "https://tse1.mm.bing.net/th/id/OIP.nb-IB_qdi_-Wx33Z-X9CrAHaHa?pid=ImgDet&rs=1",
                    name: "Caramel Macciato",
                    price: 89
                },
			],
			ok: true,
		});

		const rendered = await act(async () =>
			render(
				<StateContext.Provider value={{ dispatch, state: {} }}>
					<Menu />
				</StateContext.Provider>
			)
		);

		container = rendered.container;
	});

	it("should render", async () => {
		const menuContainer = container.querySelector("#menu-container");
		expect(menuContainer).toBeInTheDocument();
	});

    it("should display meals", async () => {
		const name = await screen.findByText("Menu");
		//const description = await screen.findByText("Cafe con chocolate blanco y crema batida");

		expect(name).toBeInTheDocument();
		//expect(description).toBeInTheDocument();
	});

    
	it("should add meals to cart", async () => {
		const button = await screen.findByRole("button");
		expect(button).toBeInTheDocument();

		const input = container.querySelector('input[type="number"]');
		expect(input).toBeInTheDocument();

		userEvent.click(button);

		expect(dispatch).not.toHaveBeenCalled();

		input.value = "10";

		userEvent.click(button);

		expect(dispatch).toHaveBeenCalled();
	});
	
});