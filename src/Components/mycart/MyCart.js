import { useSelector } from "react-redux";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./mycart.css";

import {
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../../redux/cart";

const MyCart = () => {
  var totalprice = 0;
  const Navigate = useNavigate();
  const cartselector = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // function patudha hamile argument ni patunu paryo mapp garya ko name(cartitems) J xa tai hunxa passing value(cartitems)
  const handleRemoveFromCart = (cartitems) => {
    dispatch(deleteItem(cartitems));
  };
  const handleIncreaseitem = (cartitems) => {
    dispatch(increaseQuantity(cartitems));
  };
  const handleDecreaseitem = (cartitems) => {
    dispatch(decreaseQuantity(cartitems));
  };

  const handleCartClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-container">
      {cartselector.cartitem.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/category">
              <AiOutlineArrowLeft />
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {cartselector.cartitem?.map((cartitems) => (
              <div className="cart-item">
                <div className="cart-product">
                  <img src={cartitems.images[0].imageName} alt="" />
                  <div>
                    <h3>{cartitems.title}</h3>

                    {/* function patudha hamile argument ni patunu paryo mapp garya ko name(cartitems) 
                    J xa tai hunxa passing value(cartitems) */}
                    <button onClick={() => handleRemoveFromCart(cartitems)}>
                      Remove
                    </button>
                  </div>{" "}
                </div>
                {/* need to double mapping to access sellingPrice inside unitPrice  */}
                {cartitems.unitPrice.map((newcartitems) => {
                  //  for total price calculation
                  totalprice +=
                    newcartitems.sellingPrice * cartitems.cartQuantity;
                  return (
                    <>
                      <div className="cart-product-price">
                        Rs {newcartitems.sellingPrice}
                      </div>
                      <div className="cart-product-quantity">
                        <button onClick={() => handleDecreaseitem(cartitems)}>
                          -
                        </button>
                        <div className="count">{cartitems.cartQuantity}</div>
                        <button onClick={() => handleIncreaseitem(cartitems)}>
                          +
                        </button>
                      </div>
                      <div className="cart-product-total-price">
                        Rs {newcartitems.sellingPrice * cartitems.cartQuantity}
                      </div>
                    </>
                  );
                })}

                {/* <div className="cart-product-quantity">
                  <button onClick={() => handleDecreaseitem(cartitems)}>
                    -
                  </button>
                  <div className="count">{cartitems.cartQuantity}</div>
                  <button onClick={() => handleIncreaseitem(cartitems)}>
                    +
                  </button>
                </div> */}
                {/* <div className="cart-product-total-price">
                  ${cartitems.price * cartitems.cartQuantity}
                </div> */}
              </div>
            ))}
          </div>
          <div className="cart-summary">
            {/* cart totally clear garda k he patuna pardaina  */}
            <button className="clear-cart" onClick={() => handleCartClear()}>
              Clear Cart
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal:</span>
                <span className="amount">
                  {/* Rs {cartselector.cartTotalAmount} */}
                  Rs {totalprice}
                </span>
              </div>
              <p>Taxes and VAT are included </p>
              <Link to="/checkout">
                <button>Checkout</button>
              </Link>
              <div className="continue-shopping">
                <Link to="/category">
                  <AiOutlineArrowLeft />
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCart;
