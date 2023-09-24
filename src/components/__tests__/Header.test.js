import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/redux/appStore";
import { BrowserRouter } from "react-router-dom";

it("Should load login button inside Header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Prefer getByRole() over getByText()
  const loginBtn = screen.getByRole("button", { name: "Login" });

  //   const loginBtn = screen.getByText("Login");
  expect(loginBtn).toBeInTheDocument();
});

it("Should render Header component with a Cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Also use regex
  const cartItems = screen.getByText(/🛒/);
  //   const cartItems = screen.getByText("🛒0");
  expect(cartItems).toBeInTheDocument();
});

it("Should change Login Button to Logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginBtn = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginBtn);

  const logoutBtn = screen.getByRole("button", { name: "Logout" });

  expect(logoutBtn).toBeInTheDocument();
});
