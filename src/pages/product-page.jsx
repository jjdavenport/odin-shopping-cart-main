const ProductPage = ({ img, title, category, price, description }) => {
  return (
    <>
      <div>
        <img src={img} />
        <span>{title}</span>
        <span>{category}</span>
        <span>{price}</span>
        <p>{description}</p>
      </div>
    </>
  );
};

export default ProductPage;
