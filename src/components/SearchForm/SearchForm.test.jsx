import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchForm from "./SearchForm";

test("renders an input with value equal to initial value passed in props", () => {
  render(<SearchForm initialQuery="Hello" />);
  expect(screen.getByDisplayValue("Hello")).toBeInTheDocument();
});

test("typing in input and clicking Submit button calls onSearch prop with proper value", () => {
  const onSearchMock = jest.fn();
  render(<SearchForm initialQuery="" onSearch={onSearchMock} />);

  const input = screen.getByDisplayValue("");
  const button = screen.getByRole("button", { name: /search/i });

  fireEvent.change(input, { target: { value: "New Query" } });
  fireEvent.click(button);

  expect(onSearchMock).toHaveBeenCalledWith("New Query");
});

test("typing in input and pressing Enter calls onSearch prop with proper value", () => {
  const onSearchMock = jest.fn();
  render(<SearchForm initialQuery="" onSearch={onSearchMock} />);

  const input = screen.getByDisplayValue("");

  fireEvent.change(input, { target: { value: "Another Query" } });
  fireEvent.keyPress(input, { key: "Enter", code: "Enter" });

  expect(onSearchMock).toHaveBeenCalledWith("Another Query");
});
