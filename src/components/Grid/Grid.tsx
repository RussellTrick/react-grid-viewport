import Viewport from "../Viewport/Viewport";
import "./Grid.scss";
interface GridProps {
  rows: number;
  columns: number;
}

const Grid = ({ rows, columns }: GridProps) => {
  // Create an array of row indices
  const rowIndices = Array.from({ length: rows }, (_, index) => index);

  // Create an array of column indices
  const columnIndices = Array.from({ length: columns }, (_, index) => index);

  return (
    <div className="grid">
      {columnIndices.map((columnIndex) => (
        <div key={columnIndex} className="grid-column">
          {rowIndices.map((rowIndex) => (
            <Viewport key={rowIndex} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
