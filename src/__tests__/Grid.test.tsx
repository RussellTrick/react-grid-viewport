import React from "react";
import { render, screen } from "@testing-library/react";
import Grid from "../components/Grid/Grid";

// Mock ResizeObserver
class ResizeObserverMock {
  observe() {}
  disconnect() {}
  unobserve() {}
}

global.ResizeObserver = ResizeObserverMock;

describe("Grid Component", () => {
  test("renders with the correct number of rows and columns", () => {
    render(<Grid rows={3} columns={4} />);

    const gridElement = screen.getByTestId("grid");
    const columnElements = screen.getAllByTestId("grid-column");
    const viewportElements = screen.getAllByTestId("viewport");

    // Check that the grid element is rendered
    expect(gridElement).toBeInTheDocument();

    // Check the number of rendered columns
    expect(columnElements).toHaveLength(4);

    // Check the number of rendered viewports
    expect(viewportElements).toHaveLength(12); // 3 rows * 4 columns
  });
});
