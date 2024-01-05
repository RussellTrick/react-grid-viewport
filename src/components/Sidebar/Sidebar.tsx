import React from "react";
import "./Sidebar.scss";

interface SidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  rows: number;
  columns: number;
  setRows: (newRows: number) => void;
  setColumns: (newColumns: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isCollapsed,
  onToggleCollapse,
  rows,
  columns,
  setRows,
  setColumns,
}) => {
  const handleColumnsChange = (newValue: number) => {
    const clampedValue = Math.min(Math.max(newValue, 1), 10); // Max and Min value on columns
    setColumns(clampedValue);
  };

  const handleRowsChange = (newValue: number) => {
    const clampedValue = Math.min(Math.max(newValue, 1), 10); // Max and Min value on rows
    setRows(clampedValue);
  };
  return (
    <div
      data-testid="sidebar"
      className={`sidebar ${isCollapsed ? "collapsed" : ""}`}
    >
      <button
        onClick={onToggleCollapse}
        className={`burger-icon ${isCollapsed ? "" : "open"}`}
        data-testid="burger-icon"
      ></button>

      <div
        className={`sidebar-items-container ${isCollapsed ? "collapsed" : ""}`}
      >
        <label htmlFor="rows">Rows</label>
        <input
          name="rows"
          type="number"
          min="1"
          max="10"
          value={rows}
          onChange={(e) => handleRowsChange(Number(e.target.value))}
          data-testid="rows-input"
        />
        <label htmlFor="columns">Columns</label>
        <input
          name="columns"
          type="number"
          min="1"
          max="10"
          value={columns}
          onChange={(e) => handleColumnsChange(Number(e.target.value))}
          data-testid="columns-input"
        />
      </div>
    </div>
  );
};

export default Sidebar;
