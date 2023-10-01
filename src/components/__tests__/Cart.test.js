import { fireEvent, render, screen } from "@testing-library/react";
import RestuarantMenu from "../RestuarantMenu";
import Header from "../Header";
import Cart from "../Cart";
import { act } from "react-dom/test-utils";
import React from "react";
import MOCK_MENU from "../mocks/mockMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/redux/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_MENU),
  });
});

it("Should load RestaurantMenu component", async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <RestuarantMenu />
          <Cart />
        </BrowserRouter>
      </Provider>
    );
  });

  const accordionHeader = screen.getByText("Burgers & Wraps (10)");
  fireEvent.click(accordionHeader);

  const items = screen.getAllByTestId("foodItems");
  expect(items.length).toBe(10);

  const addBtns = screen.getAllByRole("button", { name: "ADD +" });
  fireEvent.click(addBtns[0]);
  expect(screen.getByText("🛒1")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);
  expect(screen.getByText("🛒2")).toBeInTheDocument();

  // here length is 12 since (10 items + 2 cart items)
  expect(screen.getAllByTestId("foodItems").length).toBe(12);

  // Clear Cart
  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect(screen.getAllByTestId("foodItems").length).toBe(10);

  expect(
    screen.getByText("Your cart is empty. Please add items to the card")
  ).toBeInTheDocument();
});
