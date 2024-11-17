

interface SquareProps {
    value: string | null; 
    onSquareClick: React.MouseEventHandler<HTMLButtonElement>;
}

function Square({ value,onSquareClick }: SquareProps) {
    return (
        <button onClick={onSquareClick} className="square">{value}</button>
    );
}

export default Square;
