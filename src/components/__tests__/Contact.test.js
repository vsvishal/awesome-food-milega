import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// For grouping test cases use describe()
describe("Contact Us Page Test Case", () => {
  // test case function name can be it or test
  it("Should load heading inside Contact component", () => {
    render(<Contact />);

    // Quering
    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside Contact component", () => {
    render(<Contact />);

    // const button = screen.getByRole("button");
    const button = screen.getByText("Submit");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  test("Check placeholder email is inside Contact component", () => {
    render(<Contact />);
    const email = screen.getByPlaceholderText("Email address");
    // Assertion
    expect(email).toBeInTheDocument();
  });

  test("Should load 2 input boxes on the Contact component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    console.log("inputBoxes length", inputBoxes.length);
    expect(inputBoxes.length).toBe(3);
  });
});

// test("Should load heading inside Contact component", () => {
//   render(<Contact />);

//   // Quering
//   const heading = screen.getByRole("heading");

//   // Assertion
//   expect(heading).toBeInTheDocument();
// });
