import React from "react";
interface CeldaProps {
  value: string;
  onClick: () => void;
  isRighBorder: boolean;
  isBottomBorder: boolean;
}
function Celda({ value, onClick, isRighBorder, isBottomBorder }: CeldaProps) {
  return (
    <div>
      <div
        className={`border ${isRighBorder ? "border-r-2" : ""} 
            ${isBottomBorder ? "border-b-2" : ""}`}
        onClick={onClick}
      >
        {value}
      </div>
    </div>
  );
}
export default Celda;
