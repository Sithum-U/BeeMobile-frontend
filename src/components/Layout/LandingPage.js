import React, { useState, useEffect } from "react";

export default function LandingPage() {
  const [rateDetails, setRateDetails] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/rate/")
      .then((res) => res.json())
      .then((data) => {
        setRateDetails(data);
      });
  }, []);

  // useEffect(() => {
  //   const userInfo = localStorage.getItem("userInfo");

  //   if (userInfo) {
  //     history.push("/");
  //   }
  // }, [history]);

  return (
    <div className="App">
      {/* <div class="preloader">
        <div class="loader">
          <div class="ytp-spinner">
            <div class="ytp-spinner-container">
              <div class="ytp-spinner-rotator">
                <div class="ytp-spinner-left">
                  <div class="ytp-spinner-circle"></div>
                </div>
                <div class="ytp-spinner-right">
                  <div class="ytp-spinner-circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <header class="header">
        <div class="navbar-area">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-12">
                <nav class="navbar navbar-expand-lg">
                  <a class="navbar-brand" href="#">
                    <img src="assets/img/logo/logo.svg" alt="Logo" />
                  </a>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="toggler-icon"></span>
                    <span class="toggler-icon"></span>
                    <span class="toggler-icon"></span>
                  </button>
                  <div
                    class="collapse navbar-collapse sub-menu-bar"
                    id="navbarSupportedContent"
                  >
                    <ul id="nav" class="navbar-nav ml-auto">
                      <li class="nav-item">
                        <a class="page-scroll" href="#home">
                          Home
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="page-scroll" href="#services">
                          Services
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="page-scroll" href="#about">
                          About
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="page-scroll" href="#how">
                          How It Works
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="page-scroll" href="#testimonial">
                          Testimonials
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header> */}

      <section id="home" class="hero-section">
        <div class="hero-shape">
          <img src="assets/img/hero/hero-shape.svg" alt="" class="shape" />
        </div>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="hero-content">
                <img src="assets/img/backgroundlogo.png" alt="" class="shape" />
                <h1 class="wow fadeInUp" data-wow-delay=".2s">
                  Agro Pro{" "}
                  <span>
                    <h2>Your's Solution Provider</h2>
                  </span>{" "}
                </h1>
                <p class="wow fadeInUp" data-wow-delay=".4s">
                  The purpose of this website was to pinpoint the challenges
                  faced by Sri Lankan farmers as a result of the financial
                  crisis, as the country's government failed to boost domestic
                  production of organic pesticides and fertilizers or offer
                  farmers subsidies to purchase them. Crop yields were destroyed
                  by the unexpected policy change. Average yields of rice, a
                  staple food in Sri Lanka that was previously produced
                  successfully and even exported, were reduced by about 30%. The
                  Department of Census and Statistics Agriculture and
                  Environment Statistics Division gathers, analyzes, and
                  disseminates data pertaining to this crisis. The Division
                  compiles statistics on the extent and production of paddy as
                  well as other temporary and seasonal crops, livestock, and
                  production costs.
                </p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="hero-img wow fadeInUp" data-wow-delay=".5s">
                <img src="assets/img/hero/hero-img.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" class="service-section pt-150">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-8">
              <div class="section-title text-center mb-70">
                <span class="wow fadeInUp" data-wow-delay=".2s">
                  Delivery Services
                </span>
                <h1 class="wow fadeInUp" data-wow-delay=".4s">
                  All Essentials You Need
                </h1>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="single-service wow fadeInUp" data-wow-delay=".2s">
                <div class="icon">
                  <img src="assets/img/service/fertilizer.svg" alt="" />
                </div>
                <div class="content">
                  <h3>Fertilizers</h3>
                  <p>
                    Natural or artificial substance containing the chemical
                    elements that improve growth and productiveness of plants,
                    which enhance the natural fertility of the soil or replace
                    chemical elements taken from the soil by previous crops
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-service wow fadeInUp" data-wow-delay=".4s">
                <div class="icon">
                  <img src="assets/img/service/legumes.svg" alt="" />
                </div>
                <div class="content">
                  <h3>Legumes</h3>
                  <p>
                    Plant from the Fabaceae family that would include its
                    leaves, stems, and pods.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-service wow fadeInUp" data-wow-delay=".6s">
                <div class="icon">
                  <img src="assets/img/service/lifestock.svg" alt="" />
                </div>
                <div class="content">
                  <h3>Live Stock</h3>
                  <p>
                    Domesticated animals raised in an agricultural setting to
                    provide labor and produce commodities such as meat, eggs,
                    milk, fur, leather.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-service wow fadeInUp" data-wow-delay=".2s">
                <div class="icon">
                  <img src="assets/img/service/herbs.svg" alt="" />
                </div>
                <div class="content">
                  <h3>Herbs</h3>
                  <p>
                    widely distributed and widespread group of plants, excluding
                    vegetables and other plants consumed for macronutrients
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-service wow fadeInUp" data-wow-delay=".4s">
                <div class="icon">
                  <img src="assets/img/service/service-icon-2.svg" alt="" />
                </div>
                <div class="content">
                  <h3>Vegitables</h3>
                  <p>
                    parts of plants that are consumed by humans or other animals
                    as food. The original meaning is still commonly used and is
                    applied to plants
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single-service wow fadeInUp" data-wow-delay=".6s">
                <div class="icon">
                  <img src="assets/img/service/fruits.svg" alt="" />
                </div>
                <div class="content">
                  <h3>Fruits</h3>
                  <p>
                    The sweet and fleshy product of a tree or other plant that
                    contains seed and can be eaten as food..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" class="about-section pt-150">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="about-img wow fadeInUp" data-wow-delay=".5s">
                <img src="assets/img/about/about-img.svg" alt="" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="about-content">
                <div class="section-title">
                  <span class="wow fadeInUp" data-wow-delay=".2s">
                    About Us
                  </span>
                  <h1 class="wow fadeInUp" data-wow-delay=".4s">
                    On-time Delivery and User Satisfaction
                  </h1>
                  <p class="wow fadeInUp" data-wow-delay=".6s">
                    OTD is calculated by taking the number of customer orders
                    and comparing this to the number of orders shipped on or
                    before the specified delivery date. OTD is generally offered
                    as a percentage, and it can be continually measured to keep
                    track of an organization's performance.
                  </p>
                </div>
                <div
                  class="rating-meta d-flex align-items-center wow fadeInUp"
                  data-wow-delay=".65s"
                >
                  <h5>Rating 4.8</h5>
                  <div class="rating">
                    <i class="lni lni-star-filled"></i>
                    <i class="lni lni-star-filled"></i>
                    <i class="lni lni-star-filled"></i>
                    <i class="lni lni-star-filled"></i>
                    <i class="lni lni-star-filled"></i>
                  </div>
                </div>
                <div class="counter-up wow fadeInUp" data-wow-delay=".8s">
                  <div class="single-counter">
                    <h3 id="secondo1" class="countup">
                      1M
                    </h3>
                    <h5>Views</h5>
                  </div>
                  <div class="single-counter position-relative">
                    <h3 id="secondo2" class="countup">
                      234k{" "}
                    </h3>
                    <h5>Happy User</h5>
                  </div>
                  <div class="single-counter">
                    <h3 id="secondo3" class="countup">
                      34k{" "}
                    </h3>
                    <h5>Reviews</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how" class="delivery-section pt-150">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5">
              <div class="delivery-content">
                <div class="section-title">
                  <span class="wow fadeInUp" data-wow-delay=".2s">
                    Fast Delivery
                  </span>
                  <h1 class="mb-35 wow fadeInUp" data-wow-delay=".4s">
                    Order Now, Recieve Within 30mins
                  </h1>
                  <p class="mb-35 wow fadeInUp" data-wow-delay=".6s">
                    Order medicine online - delivered free of charge and in just
                    a few minutes ... Medications delivered in 30 minutes, free
                    of charge ... Receive your order
                  </p>
                  <a
                    href="javscript:void(0)"
                    class="main-btn btn-hover wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    Download App
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-7 order-first order-lg-last">
              <div class="delivery-img wow fadeInUp" data-wow-delay=".5s">
                <img src="assets/img/delivery/delivery-img.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonial" class="testimonial-section img-bg pt-150 pb-40">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="section-title mb-60 text-center">
                <span class="wow fadeInUp" data-wow-delay=".2s">
                  Testimonials
                </span>
                <h1 class="wow fadeInUp" data-wow-delay=".4s">
                  What Our Users Says
                </h1>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              width: "1000px",
              height: "400px",
            }}
          >
            {rateDetails.map((rate) => (
              <div class="row testimonial-wrapper" style={{ display: "flex" }}>
                <div
                  class="col-lg-4 col-md-6 -mt-30"
                  style={{ flexGrow: 20, flexShrink: 0, flexBasis: "50px" }}
                >
                  <div
                    class="single-testimonial wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div class="rating">
                      <i class="lni lni-star-filled"></i>
                      <i class="lni lni-star-filled"></i>
                      <i class="lni lni-star-filled"></i>
                      <i class="lni lni-star-filled"></i>
                      <i class="lni lni-star-filled"></i>
                    </div>
                    <div class="content">
                      <p>{rate.description}</p>
                    </div>
                    <div class="info">
                      <div class="image">
                        <img
                          src="assets/img/testimonial/testimonial-1.png"
                          alt=""
                        />
                      </div>
                      <div class="text">
                        <h5>{rate.name}</h5>
                        <p>{rate.profession}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div class="col-lg-4 col-md-6 -mt-60">
                <div
                  class="single-testimonial wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div class="rating">
                    <i class="lni lni-star-filled"></i>
                    <i class="lni lni-star-filled"></i>
                    <i class="lni lni-star-filled"></i>
                    <i class="lni lni-star-filled"></i>
                    <i class="lni lni-star-filled"></i>
                  </div>
                  <div class="content">
                    <p>
                      Lorem ipsum dolor sit amet onsetetur sadipscing elitr, sed
                      diam non eirmod tempor invidunt ut labore etdo magna
                      aliquyam erat, sed diam vero eos et accusam et justo duo
                      dolores et ea rebum clita kasd gubergren.
                    </p>
                  </div>
                  <div class="info">
                    <div class="image">
                      <img
                        src="assets/img/testimonial/testimonial-2.png"
                        alt=""
                      />
                    </div>
                    <div class="text">
                      <h5>Mrs. Gosh</h5>
                      <p>Actor</p>
                    </div>
                  </div>
                </div>
              </div> */}
                {/* <div class="col-lg-4 col-md-6">
                <div
                  class="single-testimonial wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div class="rating">
                    <i class="lni lni-star-filled"></i>
                    <i class="lni lni-star-filled"></i>
                    <i class="lni lni-star-filled"></i>
                    <i class="lni lni-star-filled"></i>
                    <i class="lni lni-star-filled"></i>
                  </div>
                  <div class="content">
                    <p>
                      Lorem ipsum dolor sit amet onsetetur sadipscing elitr, sed
                      diam non eirmod tempor invidunt ut labore etdo magna
                      aliquyam erat, sed diam vero eos et accusam et justo duo
                      dolores et ea rebum clita kasd gubergren.
                    </p>
                  </div>
                  <div class="info">
                    <div class="image">
                      <img
                        src="assets/img/testimonial/testimonial-3.png"
                        alt=""
                      />
                    </div>
                    <div class="text">
                      <h5>John Doe</h5>
                      <p>Model</p>
                    </div>
                  </div>
                </div>
              </div> */}
                {/* <div class="col-lg-4 col-md-6 -mt-30">
                <div
                  class="single-testimonial wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div class="rating">
                    <i class="lni lni-star-filled"></i>
                    <i class="lni lni-star-filled"></i>
                    <i class="lni lni-star-filled"></i>
                    <i class="lni lni-star-filled"></i>
                    <i class="lni lni-star-filled"></i>
                  </div>
                  <div class="content">
                    <p>
                      Lorem ipsum dolor sit amet onsetetur sadipscing elitr, sed
                      diam non eirmod tempor invidunt ut labore etdo magna
                      aliquyam erat, sed diam vero eos et accusam et justo duo
                      dolores et ea rebum clita kasd gubergren.
                    </p>
                  </div>
                  <div class="info">
                    <div class="image">
                      <img
                        src="assets/img/testimonial/testimonial-4.png"
                        alt=""
                      />
                    </div>
                    <div class="text">
                      <h5>Jonathan Smith</h5>
                      <p>Creative Designer</p>
                    </div>
                  </div>
                </div>
              </div> */}
                {/* <div class="col-lg-4 col-md-6 -mt-60">
                <div
                  class="single-testimonial wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div class="rating">
                    <i class="lni lni-star-filled"></i>
                    <i class="lni lni-star-filled"></i>
                    <i class="lni lni-star-filled"></i>
                    <i class="lni lni-star-filled"></i>
                    <i class="lni lni-star-filled"></i>
                  </div>
                  <div class="content">
                    <p>
                      Lorem ipsum dolor sit amet onsetetur sadipscing elitr, sed
                      diam non eirmod tempor invidunt ut labore etdo magna
                      aliquyam erat, sed diam vero eos et accusam et justo duo
                      dolores et ea rebum clita kasd gubergren.
                    </p>
                  </div>
                  <div class="info">
                    <div class="image">
                      <img
                        src="assets/img/testimonial/testimonial-5.png"
                        alt=""
                      />
                    </div>
                    <div class="text">
                      <h5>Sara A. K.</h5>
                      <p>Heroine</p>
                    </div>
                  </div>
                </div>
              </div> */}
                {/* <div class="col-lg-4 col-md-6">
                <div
                  class="single-testimonial wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div class="rating">
                    <i class="lni lni-star-filled"></i>
                    <i class="lni lni-star-filled"></i>
                    <i class="lni lni-star-filled"></i>
                    <i class="lni lni-star-filled"></i>
                    <i class="lni lni-star-filled"></i>
                  </div>
                  <div class="content">
                    <p>
                      Lorem ipsum dolor sit amet onsetetur sadipscing elitr, sed
                      diam non eirmod tempor invidunt ut labore etdo magna
                      aliquyam erat, sed diam vero eos et accusam et justo duo
                      dolores et ea rebum clita kasd gubergren.
                    </p>
                  </div>
                  <div class="info">
                    <div class="image">
                      <img
                        src="assets/img/testimonial/testimonial-6.png"
                        alt=""
                      />
                    </div>
                    <div class="text">
                      <h5>David Smith</h5>
                      <p>Businessman</p>
                    </div>
                  </div>
                </div>
              </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <footer id="footer" class="footer pt-100 pb-70">
        <div class="footer-shape">
          <img
            src="assets/img/footer/footer-left.svg"
            alt=""
            class="shape shape-1"
          />
          <img
            src="assets/img/footer/footer-right.svg"
            alt=""
            class="shape shape-2"
          />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="footer-widget wow fadeInUp" data-wow-delay=".2s">
                <div class="logo">
                  <a href="#">
                    <img src="assets/img/logo/logo-2.svg" alt="logo" />
                  </a>
                </div>
                <div class="download-btns">
                  <a href="javascript:void(0)">
                    <span class="icon">
                      <i class="lni lni-apple"></i>
                    </span>
                    <span class="text">
                      Download on the <b>App Store</b>{" "}
                    </span>
                  </a>
                  <a href="javascript:void(0)">
                    <span class="icon">
                      <i class="lni lni-play-store"></i>
                    </span>
                    <span class="text">
                      GET IT ON <b>Play Store</b>{" "}
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="footer-widget wow fadeInUp" data-wow-delay=".4s">
                <h3>About Us</h3>
                <ul class="links">
                  <li>
                    <a href="javascript:void(0)">Home</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Services</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">About Us</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="footer-widget wow fadeInUp" data-wow-delay=".6s">
                <h3>About</h3>
                <ul class="links">
                  <li>
                    <a href="javascript:void(0)">Partners</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Terms of Service</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Refund Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="footer-widget wow fadeInUp" data-wow-delay=".8s">
                <h3>Support</h3>
                <ul class="links">
                  <li>
                    <a href="javascript:void(0)">Open Ticket</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Community</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Return Policy</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Accessibility</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer> */}

      <a href="#" class="scroll-top btn-hover">
        <i class="lni lni-chevron-up"></i>
      </a>
    </div>
  );
}
