import Quantity from "./quantity";

const SheetItem = ({ img, title }) => {
  return (
    <>
      <div className="flex justify-between">
        <img src={img} />
        <div>
          <span>{title}</span>
        </div>
        <Quantity />
      </div>
    </>
  );
};

export default SheetItem;
