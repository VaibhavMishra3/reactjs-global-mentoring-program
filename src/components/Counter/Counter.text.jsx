import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("renders initial value provided in props", () => {
  const { getByText } = render(<Counter initialValue={10} />);
  expect(getByText("Count: 10")).toBeInTheDocument();
});

test('click event on "decrement" button decrements the displayed value', () => {
  const { getByText } = render(<Counter initialValue={5} />);
  const decrementButton = getByText("-");
  fireEvent.click(decrementButton);
  expect(getByText("Count: 4")).toBeInTheDocument();
});

test('click event on "increment" button increments the displayed value', () => {
  const { getByText } = render(<Counter initialValue={5} />);
  const incrementButton = getByText("+");
  fireEvent.click(incrementButton);
  expect(getByText("Count: 6")).toBeInTheDocument();
});
