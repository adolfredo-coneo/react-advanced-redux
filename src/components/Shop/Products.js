import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const productsList = [
  {
    id: "1",
    title: "Mouse Pad",
    price: 6,
    description: "This is a first product - amazing!",
  },
  {
    id: "2",
    title: "Magic Mouse",
    price: 15,
    description: "Magic Mouse for Mac!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productsList.map(({ id, title, price, description }) => (
          <ProductItem
            key={id}
            id={id}
            title={title}
            price={price}
            total={price}
            description={description}
            quantity={1}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
