import classes from "./CartButton.module.css";
import { layoutActions } from "../../store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const CartButton = (props) => {
  const totalCart = useSelector((state) => state.cart.productsCount);
  const dispatch = useDispatch();

  const cartButtonHandler = () => {
    dispatch(layoutActions.toggleCart());
  };
  return (
    <button className={classes.button} onClick={cartButtonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalCart}</span>
    </button>
  );
};

export default CartButton;
