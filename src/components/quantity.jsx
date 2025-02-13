import { useState } from "react";
import Button from "./button";
import { Plus, Minus, Trash2 } from "lucide-react";

const Quantity = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex w-fit gap-1">
      <Button
        className="border-border relative border"
        onClick={() => setCount((prev) => Math.max(0, prev - 1))}
      >
        <Trash2
          className={`absolute inset-0 m-auto h-[1.2rem] w-[1.2rem] transition-all duration-300 ${count === 0 ? "scale-100 opacity-100" : "scale-0 opacity-0"} `}
        />

        <Minus
          className={`h-[1.2rem] w-[1.2rem] transition-all duration-300 ${count > 0 ? "scale-100 opacity-100" : "scale-0 opacity-0"} `}
        />
      </Button>
      <input
        value={count}
        type="number"
        onChange={(e) => setCount(Math.max(0, parseInt(e.target.value) || 0))}
        className="border-border w-12 cursor-pointer rounded-lg border px-3 py-2 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />

      <Button
        className="border-border border"
        onClick={() => setCount((prev) => prev + 1)}
      >
        <Plus className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    </div>
  );
};

export default Quantity;
