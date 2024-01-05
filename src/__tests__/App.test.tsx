// App.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { App } from "../components/App/App";

// Mock ResizeObserver
class ResizeObserverMock {
  observe() {}
  disconnect() {}
  unobserve() {}
}

global.ResizeObserver = ResizeObserverMock;

describe("App Component", () => {
  test("renders with default props", () => {
    render(<App />);

    // Add assertions to check if the components are rendered properly
    expect(screen.getByTestId("App")).toBeInTheDocument();
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    expect(screen.getByTestId("grid")).toBeInTheDocument();
    // Add more assertions as needed
  });

  // Add more tests for state changes, interactions, etc.
});
