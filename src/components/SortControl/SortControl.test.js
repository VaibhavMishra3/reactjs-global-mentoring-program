import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SortControl from "./SortControl";

describe("SortControl Component", () => {
  test("renders label and select dropdown", () => {
    render(<SortControl currentSort="releaseDate" onSortChange={() => {}} />);

    expect(screen.getByText("Sort by")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Release Date")).toBeInTheDocument();
  });

  test("calls onSortChange callback when an option is selected", () => {
    const handleSortChange = jest.fn();
    render(
      <SortControl currentSort="releaseDate" onSortChange={handleSortChange} />
    );

    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "title" },
    });
    expect(handleSortChange).toHaveBeenCalledWith("title");
  });

  test("matches snapshot", () => {
    const { asFragment } = render(
      <SortControl currentSort="releaseDate" onSortChange={() => {}} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
