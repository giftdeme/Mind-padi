// ReusableShacdnButton.tsx
import { FC } from "react";
import { Button } from "./button";

interface CustomButtonProps {
  isActive: boolean;
  ariaLabel: string;
  className?: string;
  size?: string | "sm"
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomButton: FC<CustomButtonProps> = ({
  isActive,
  onClick = () => {},
  ariaLabel,
  className = "",
  size,
  ...rest
}) => {
  return (
    <Button
      onClick={onClick}
      className={`rounded-3xl text-[0.8rem] text-white transition-colors duration-300 ${
        isActive ? "bg-blue-600" : "bg-blue-800 hover:bg-blue-600"
      } ${className}`}
      size="sm"
      aria-label={ariaLabel}
      {...rest} // Spread size, variant, disabled, etc.
    >
      {ariaLabel}
    </Button>
  );
};

export default CustomButton;
