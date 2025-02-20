import { Check } from "lucide-react";

const Checkbox = ({ onClick, checked }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`${
          checked ? "bg-primary" : "hover:bg-border"
        } border-primary flex aspect-square size-5 cursor-pointer items-center justify-center rounded-sm border transition-colors duration-200 ease-in-out`}
      >
        {checked && <Check className="text-secondary h-5" />}
      </button>
    </>
  );
};

export default Checkbox;
