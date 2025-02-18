import { useState } from "react";
import Button from "./button";
import { Plus, Minus, Trash2 } from "lucide-react";

const Quantity = ({ onClick, className }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
    onClick();
  };

  return (
    <div className="flex w-full gap-1">
      <Button
        className="border-border relative w-full border md:w-fit"
        onClick={() => setCount((prev) => Math.max(0, prev - 1))}
      >
        <Trash2
          className={`absolute inset-0 m-auto h-[1.2rem] w-[1.2rem] transition-all duration-300 ${count === 1 ? "scale-100 opacity-100" : "scale-0 opacity-0"} `}
        />

        <Minus
          className={`h-[1.2rem] w-[1.2rem] transition-all duration-300 ${count > 1 ? "scale-100 opacity-100" : "scale-0 opacity-0"} `}
        />
      </Button>
      <input
        value={count}
        type="number"
        onChange={(e) => setCount(Math.max(0, parseInt(e.target.value) || 0))}
        className="border-border w-12 cursor-pointer rounded-lg border px-3 py-2 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />

      <Button
        className="border-border w-full border md:w-fit"
        onClick={handleClick}
      >
        <Plus className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    </div>
  );
};

export default Quantity;
