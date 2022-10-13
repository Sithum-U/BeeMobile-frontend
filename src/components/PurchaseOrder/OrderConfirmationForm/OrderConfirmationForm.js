import React from "react";
import Typography from "@material-ui/core/Typography";

export default function OrderConfirmationForm() {
  return (
    <div>
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          Thank you for your order.
        </Typography>
        <Typography variant="subtitle1">
          Your order number is #2001539. Order created succefully.We will notify
          your order , and will send you an update when your order is ready to
          be delivered.
        </Typography>
      </React.Fragment>
    </div>
  );
}
