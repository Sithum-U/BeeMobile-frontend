import React from "react";

const steps = ["Payment Details", "Review Your Order", "Order Confirmation"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PaymentFrom />;
    case 1:
      return <ReviewOrderForm />;
    case 3:
      return <OrderConfirmationForm />;
  }
}

export default function checkout() {
  return <div></div>;
}
