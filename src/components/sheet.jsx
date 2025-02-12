import Button from "./button";
import { X } from "lucide-react";

const Sheet = () => {
  return (
    <>
      <div className="w-full fixed inset-0 bg-black">
        <aside className="w-4/12 p-4">
          <Button>
            <X />
          </Button>
        </aside>
      </div>
    </>
  );
};

export default Sheet;
