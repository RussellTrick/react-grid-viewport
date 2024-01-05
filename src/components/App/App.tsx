import React, { useState } from "react";
import "./App.scss";
import Sidebar from "../Sidebar/Sidebar";
import Grid from "../Grid/Grid";

/**
 * App Component
 */
export function App() {
  const [rows, setRows] = useState(3);
  const [columns, setColumns] = useState(3);
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div data-testid="App" className="App">
      <Sidebar
        rows={rows}
        columns={columns}
        setRows={setRows}
        setColumns={setColumns}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!isSidebarCollapsed)}
      />
      <Grid rows={rows} columns={columns} />
    </div>
  );
}
