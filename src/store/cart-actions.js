import { layoutActions } from ".";
import { cartActions } from ".";

//Thunk Action Creators

//Get Action Creator
export const getCartData = () => {
  return async (dispatch) => {
    const getRequest = async () => {
      const response = await fetch(
        "https://react-test-backend-c06c8-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Getting cart data failed");
      }

      const data = await response.json();
      return data;
    };

    try {
      const cartData = await getRequest();
      dispatch(
        cartActions.addProductsToCart({
          products: cartData.products || [],
          productsCount: cartData.productsCount,
        })
      );
    } catch (error) {
      dispatch(
        layoutActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Get cart information failed",
        })
      );
    }
  };
};

//Send Action Creator
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      layoutActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending the cart information",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-test-backend-c06c8-default-rtdb.firebaseio.com/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };

    try {
      await sendRequest();

      dispatch(
        layoutActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart information successfully",
        })
      );
    } catch (error) {
      dispatch(
        layoutActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sent cart information failed",
        })
      );
    }
  };
};
