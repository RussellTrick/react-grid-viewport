import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Sidebar from "../components/Sidebar/Sidebar";

describe("Sidebar Component", () => {
  test("renders with default props", () => {
    render(
      <Sidebar
        isCollapsed={false}
        onToggleCollapse={() => {}}
        rows={3}
        columns={3}
        setRows={() => {}}
        setColumns={() => {}}
      />
    );

    // check if the component is rendered properly
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    expect(screen.getByTestId("burger-icon")).toBeInTheDocument();
    // more assertions
  });

  test("expands and collapses Sidebar on button click", () => {
    const onToggleCollapseMock = jest.fn();
    render(
      <Sidebar
        isCollapsed={false}
        onToggleCollapse={onToggleCollapseMock}
        rows={3}
        columns={3}
        setRows={() => {}}
        setColumns={() => {}}
      />
    );

    // Click the button to expand Sidebar
    fireEvent.click(screen.getByTestId("burger-icon"));
    expect(onToggleCollapseMock).toHaveBeenCalledTimes(1);
  });

  test("does not set columns beyond the maximum limit", async () => {
    const onColumnsChangeMock = jest.fn();
    render(
      <Sidebar
        isCollapsed={false}
        onToggleCollapse={() => {}}
        rows={3}
        columns={3}
        setRows={() => {}}
        setColumns={onColumnsChangeMock}
      />
    );

    const columnInput = screen.getByTestId("columns-input") as HTMLInputElement;

    // Set columns to a value greater than the maximum limit
    fireEvent.change(columnInput, {
      target: {
        value: "14",
      },
    });

    // Check that the setColumns mock function was called with the expected value
    expect(onColumnsChangeMock).toHaveBeenCalledWith(10);

    // Set columns to a value greater than the maximum limit
    fireEvent.change(columnInput, {
      target: {
        value: "20",
      },
    });

    // Check that the setColumns mock function was called with the expected value
    expect(onColumnsChangeMock).toHaveBeenCalledWith(10);
  });

  test("does not set columns below the minimum limit", async () => {
    const onColumnsChangeMock = jest.fn();
    render(
      <Sidebar
        isCollapsed={false}
        onToggleCollapse={() => {}}
        rows={3}
        columns={3}
        setRows={() => {}}
        setColumns={onColumnsChangeMock}
      />
    );

    const columnInput = screen.getByTestId("columns-input") as HTMLInputElement;

    // Set columns to a value greater than the maximum limit
    fireEvent.change(columnInput, {
      target: {
        value: "0",
      },
    });

    // Check that the setColumns mock function was called with the expected value
    expect(onColumnsChangeMock).toHaveBeenCalledWith(1);

    // Set columns to a value greater than the maximum limit
    fireEvent.change(columnInput, {
      target: {
        value: "-5",
      },
    });

    // Check that the setColumns mock function was called with the expected value
    expect(onColumnsChangeMock).toHaveBeenCalledWith(1);
  });

  test("does not set rows beyond the maximum limit", async () => {
    const onRowsChangeMock = jest.fn();
    render(
      <Sidebar
        isCollapsed={false}
        onToggleCollapse={() => {}}
        rows={3}
        columns={3}
        setRows={onRowsChangeMock}
        setColumns={() => {}}
      />
    );

    const rowInput = screen.getByTestId("rows-input") as HTMLInputElement;

    // Set columns to a value greater than the maximum limit
    fireEvent.change(rowInput, {
      target: {
        value: "15",
      },
    });

    // Check that the setColumns mock function was called with the expected value
    expect(onRowsChangeMock).toHaveBeenCalledWith(10);

    // Set columns to a value greater than the maximum limit
    fireEvent.change(rowInput, {
      target: {
        value: "22",
      },
    });

    // Check that the setColumns mock function was called with the expected value
    expect(onRowsChangeMock).toHaveBeenCalledWith(10);
  });

  test("does not set rows below the minimum limit", async () => {
    const onRowsChangeMock = jest.fn();
    render(
      <Sidebar
        isCollapsed={false}
        onToggleCollapse={() => {}}
        rows={3}
        columns={3}
        setRows={onRowsChangeMock}
        setColumns={() => {}}
      />
    );

    const rowInput = screen.getByTestId("rows-input") as HTMLInputElement;

    // Set columns to a value greater than the maximum limit
    fireEvent.change(rowInput, {
      target: {
        value: "0",
      },
    });

    // Check that the setColumns mock function was called with the expected value
    expect(onRowsChangeMock).toHaveBeenCalledWith(1);

    // Set columns to a value greater than the maximum limit
    fireEvent.change(rowInput, {
      target: {
        value: "-5",
      },
    });

    // Check that the setColumns mock function was called with the expected value
    expect(onRowsChangeMock).toHaveBeenCalledWith(1);
  });
});
