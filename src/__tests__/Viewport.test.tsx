// Viewport.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Viewport from "../components/Viewport/Viewport";

// Mock ResizeObserver
class ResizeObserverMock {
  observe() {}
  disconnect() {}
  unobserve() {}
}

global.ResizeObserver = ResizeObserverMock;

describe("Viewport Component", () => {
  test("renders with default dimensions", () => {
    render(<Viewport />);

    // check if the component is rendered properly
    expect(screen.getByTestId("viewport")).toBeInTheDocument();
    // more assertions
  });

  // more tests.
});
