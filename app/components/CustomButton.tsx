import React from "react";

const CustomButton = ({
  label,
  onClick,
  disabledState,
}: {
  label: string;
  onClick: () => void;
  disabledState: boolean;
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        disabled={disabledState}
        className="border-2 border-amber-200 m-2 px-2 hover:pointer-events-auto"
      >
        {label}
      </button>
    </div>
  );
};

export default CustomButton;
