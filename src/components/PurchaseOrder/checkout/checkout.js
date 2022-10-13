import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
// import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import PaymentForm from "../Payment/PaymentForm";
import OrderConfirmationForm from "../OrderConfirmationForm/OrderConfirmationForm";
import ReviewOrderForm from "../ReviewOrderForm/ReviewOrderForm";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import Rating from "../Rating/rating";

const steps = ["Payment Details", "Review Your Order", "Order Confirmation"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PaymentForm />;
    case 1:
      return <ReviewOrderForm />;
    case 2:
      return <OrderConfirmationForm />;
    default:
      throw new Error("Unknown step");
  }
}

export default function PO() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.right}>
          <div>
            <h3 className={styles.heading}> Checkout</h3>
          </div>
          <Stepper activeStep={activeStep} className={styles.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Rating />
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={styles.buttons}>
                  {activeStep !== 0 ||
                    (activeStep !== 2 && (
                      <Button onClick={handleBack} className={styles.button}>
                        Back
                      </Button>
                    ))}
                  {activeStep === 0 ? (
                    <Link to="/Cart">
                      <button
                        variant="contained"
                        color="primary"
                        className={styles.btn}
                        // className={styles.button}
                      >
                        Shopping Cart
                      </button>
                    </Link>
                  ) : null}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={styles.button}
                  >
                    {activeStep === steps.length - 1 ? (
                      <h4 style={{ color: "#ffffff" }}>
                        Rate Us{" "}
                        <i class="bi bi-star" style={{ color: "yellow" }}></i>
                      </h4>
                    ) : (
                      "Next"
                    )}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </div>
      </div>
    </div>
  );
}
