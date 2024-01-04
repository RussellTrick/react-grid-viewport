import React from "react";
import "./Sidebar.scss";

interface SidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  rows: number;
  columns: number;
  onRowsChange: (newRows: number) => void;
  onColumnsChange: (newColumns: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isCollapsed,
  onToggleCollapse,
  rows,
  columns,
  onRowsChange,
  onColumnsChange,
}) => {
  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <button
        onClick={onToggleCollapse}
        className={`burger-icon ${isCollapsed ? "" : "open"}`}
      ></button>
      {isCollapsed ? null : (
        <div className="sidebar-items-container">
          <label htmlFor="rows">Rows</label>
          <input
            name="rows"
            type="number"
            min="1"
            max="10"
            value={rows}
            onChange={(e) => onRowsChange(Number(e.target.value))}
          />
          <label htmlFor="columns">Columns</label>
          <input
            name="columns"
            type="number"
            min="1"
            max="10"
            value={columns}
            onChange={(e) => onColumnsChange(Number(e.target.value))}
          />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
