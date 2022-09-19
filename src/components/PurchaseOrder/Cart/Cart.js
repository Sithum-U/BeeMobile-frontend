import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./cartstyle.css";
import { Link, useNavigate } from "react-router-dom";

export default function Cart(props) {
  const { cartItems, onAdd, onRemove, onDelete } = props;
  const itemsPrice = 0;
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol size="12">
            <MDBCard
              className="card-registration card-registration-2"
              style={{ borderRadius: "15px" }}
            >
              <MDBCardBody className="p-0">
                <MDBRow className="g-0">
                  <MDBCol lg="8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <MDBTypography
                          tag="h1"
                          className="fw-bold mb-0 text-black"
                        >
                          Shopping Cart
                        </MDBTypography>
                        <MDBTypography className="mb-0 text-muted">
                          {cartItems.length === 0
                            ? "No Items in the list"
                            : cartItems.length + " Items"}
                        </MDBTypography>
                      </div>
                      {/* ------------------------cart details display--------------------------------------------------------- */}
                      <hr className="my-4" />

                      <MDBRow>
                        {cartItems.length === 0 && <div>Cart is empty</div>}
                        {cartItems.map((item) => (
                          <div
                            key={item.id}
                            className="mb-4 d-flex justify-content-between align-items-center"
                          >
                            <MDBCol md="2" lg="2" xl="2">
                              <MDBCardImage
                                src={item.image}
                                fluid
                                className="rounded-3"
                                alt="Cotton T-shirt"
                              />
                            </MDBCol>
                            <MDBCol md="3" lg="3" xl="3">
                              <MDBTypography tag="h6" className="text-muted">
                                {item.name}
                              </MDBTypography>
                              <MDBTypography
                                tag="h6"
                                className="text-black mb-0"
                              >
                                {item.name}
                              </MDBTypography>
                            </MDBCol>
                            <MDBCol
                              md="3"
                              lg="3"
                              xl="3"
                              className="d-flex align-items-center"
                            >
                              <MDBBtn
                                onClick={() => onRemove(item)}
                                color="link"
                                className="px-2"
                              >
                                <MDBIcon icon="minus" />
                              </MDBBtn>

                              <MDBInput
                                type="number"
                                min="0"
                                max="10"
                                defaultValue={1}
                                size="sm"
                              />

                              <MDBBtn
                                onClick={() => onAdd(item)}
                                color="link"
                                className="px-2"
                              >
                                <MDBIcon icon="plus" />
                              </MDBBtn>
                            </MDBCol>
                            <MDBCol md="3" lg="2" xl="2" className="text-end">
                              <MDBTypography tag="h6" className="mb-0">
                                {item.qty} x ${item.price.toFixed(2)}
                              </MDBTypography>
                            </MDBCol>
                            <MDBCol md="1" lg="1" xl="1" className="text-end">
                              <MDBBtn
                                onClick={() => onDelete(item)}
                                color="link"
                                className="px-2"
                              >
                                <i class="bi bi-trash"></i>
                              </MDBBtn>
                            </MDBCol>
                          </div>
                        ))}
                      </MDBRow>

                      <hr className="my-4" />
                      {/* ----------------------------- Back To shop Button------------------------------------------------------- */}
                      <div className="pt-5">
                        <MDBTypography tag="h6" className="mb-0">
                          <MDBCardText
                            tag="a"
                            href="/productDetails/innovation"
                            className="text-body"
                          >
                            <MDBIcon icon="chevron-left" /> Back to shop
                          </MDBCardText>
                        </MDBTypography>
                      </div>
                    </div>
                  </MDBCol>
                  {/* ----------------------------- Side pane summary---------------------------------------------------------- */}
                  <MDBCol lg="4" className="bg-grey">
                    <div className="p-5">
                      <MDBTypography
                        tag="h3"
                        className="fw-bold mb-5 mt-2 pt-1"
                      >
                        Summary
                      </MDBTypography>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-4">
                        <MDBTypography tag="h5" className="text-uppercase">
                          {/* {item.length} */}
                        </MDBTypography>
                        <MDBTypography tag="h5">Rs 4700/=</MDBTypography>
                      </div>

                      <MDBTypography tag="h5" className="text-uppercase mb-3">
                        Shipping
                      </MDBTypography>

                      <div className="mb-4 pb-2">
                        <select
                          className="select p-2 rounded bg-grey"
                          style={{ width: "100%" }}
                        >
                          <option value="1">Standard-Delivery- Rs250.00</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                          <option value="4">Four</option>
                        </select>
                      </div>

                      <MDBTypography tag="h5" className="text-uppercase mb-3">
                        Voucher Code
                      </MDBTypography>

                      <div className="mb-5">
                        <MDBInput size="lg" label="Enter your code" />
                      </div>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-5">
                        <MDBTypography tag="h5" className="text-uppercase">
                          Total price
                        </MDBTypography>
                        <MDBTypography tag="h5">
                          ${totalPrice.toFixed(2)}
                        </MDBTypography>
                      </div>
                      <Link to="/checkout" style={{ textDecoration: "none" }}>
                        <MDBBtn color="dark" block size="lg">
                          Proceed To Checkout
                        </MDBBtn>
                      </Link>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
