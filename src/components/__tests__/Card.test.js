import { render, screen } from "@testing-library/react";
import Card from "../Card";
import MOCK_DATA from "../mocks/cardMock.json";
import MOCK_DATA_WITH_LABEL from "../mocks/cardMockWithLabel.json";
import "@testing-library/jest-dom";
import React from "react";
import { withDiscountLabel } from "../Card";

it("Should render Card component with props data", () => {
  // prop name should be same otherwise will throw error
  render(<Card restaurant={MOCK_DATA} />);

  const name = screen.getByText("McDonald's");
  expect(name).toBeInTheDocument();
});

it("Should render Card component with label", () => {
  const RestaurantCardDiscount = withDiscountLabel(Card);
  render(<RestaurantCardDiscount restaurant={MOCK_DATA_WITH_LABEL} />);

  const discount = screen.getByText("40% OFF UPTO ₹80");
  expect(discount).toBeInTheDocument();
});
