import React from "react";
import DelivaryAddress from "../../Components/delivaryAddress/DelivaryAddress";
import Payment from "../../Components/paymentpart/Payment";

const Checkout = () => {
  return (
    <div>
      <DelivaryAddress />
      <Payment />
    </div>
  );
};

export default Checkout;
