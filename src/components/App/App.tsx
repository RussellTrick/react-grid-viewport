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
    <div className="App">
      <Sidebar
        rows={rows}
        columns={columns}
        onRowsChange={setRows}
        onColumnsChange={setColumns}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!isSidebarCollapsed)}
      />
      <Grid rows={rows} columns={columns} />
    </div>
  );
}
