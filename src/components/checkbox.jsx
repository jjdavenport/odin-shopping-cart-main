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
        }  cursor-pointer transition-colors duration-200 ease-in-out size-5 flex justify-center items-center rounded-sm border border-primary`}
      >
        {checked && <Check className="h-5 text-secondary" />}
      </button>
    </>
  );
};

export default Checkbox;
