const Product = ({ img, title, price, href }) => {
  return (
    <>
      <a href={href}>
        <img src={img} />
        <span>{title}</span>
        <span>{price}</span>
      </a>
    </>
  );
};

export default Product;
