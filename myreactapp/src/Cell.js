import './Cell.css';
function Cell({x, y}) {
    const CELL_SIZE = 20
    return (
        <div className="Cell" style={{
            left: `${CELL_SIZE * x + 1}px`,
            top: `${CELL_SIZE*y + 1}px`,
            width: `${CELL_SIZE -1}px`,
            height: `${CELL_SIZE -1}px`,
        }} />
    );
}

export default Cell;