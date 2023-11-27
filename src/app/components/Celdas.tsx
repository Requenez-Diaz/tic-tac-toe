"use client";

interface CellProps {
  value: "X" | "O" | null;
  onClick: () => void;
}

const Celdas: React.FC<CellProps> = ({ value, onClick }) => (
  <div
    onClick={onClick}
    className='bg-gray-800 p-4 text-center border cursor-pointer hover:bg-gray-700'
  >
    {value}
  </div>
);

export default Celdas;
