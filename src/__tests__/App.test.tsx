import React from "react";
import { render, screen } from "@testing-library/react";

import { App } from "../components/App/App";

test("Renders React App", () => {
  render(<App />);
  const element = screen.getByText("React App");
  expect(element).toBeInTheDocument();
});
