import { Check } from "lucide-react";
import { useState } from "react";

const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  const toggle = () => {
    setChecked(!checked);
  };

  return (
    <>
      <button
        onClick={toggle}
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
