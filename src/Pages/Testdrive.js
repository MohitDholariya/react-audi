import React, { Component } from 'react'

export default class testdrive extends Component {
  render() {
    return (
      <div>
        {/* <!-- Section 2 --> */}
        {/* <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src="assets/img/testdrive-sl-img1.jpg" className="d-block w-100"></img>
            </div>
            <div className="swiper-slide">
              <img src="assets/img/testdrive-sl-img2.jpg" className="d-block w-100"></img>
            </div>
            <div className="swiper-slide">
              <img src="assets/img/testdrive-sl-img3.jpg" className="d-block w-100"></img>
            </div>
          </div>
          <div className="swiper-button-next text-white"></div>
          <div className="swiper-button-prev text-white"></div>
        </div> */}
        {/* <!-- Section 2 End -->
        <!-- Section 3 --> */}
        <div className="container-fluid" style={{backgroundColor: "black"}}>
          <div className="text-center pt-5 mb-5">
            <h2 className="text-white">Select Your Audi</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 p-0">
              <div className="img-div">
                <img src="assets/img/testdrive-img1.jpg" className="img" alt="" width="100%"></img>
                  <div className="car-div">
                    <h1 className="text-white display-5 fw-bold">Q8 e-tron</h1>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 p-0">
              <div className="img-div">
                <img src="assets/img/testdrive-img2.jpg" className="img" alt="" width="100%"></img>
                  <div className="car-div">
                    <h1 className="text-white display-5 fw-bold">Q8 Sportback e-tron</h1>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 p-0">
              <div className="img-div">
                <img src="assets/img/testdrive-img3.jpg" className="img" alt="" width="100%"></img>
                  <div className="car-div">
                    <h1 className="text-white display-5 fw-bold">A8L</h1>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 p-0">
              <div className="img-div">
                <img src="assets/img/testdrive-img4.jpg" className="img" alt="" width="100%"></img>
                  <div className="car-div">
                    <h1 className="text-white display-5 fw-bold">Q7</h1>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 p-0">
              <div className="img-div">
                <img src="assets/img/testdrive-img5.jpg" className="img" alt="" width="100%"></img>
                  <div className="car-div">
                    <h1 className="text-white display-5 fw-bold">Q5</h1>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 p-0">
              <div className="img-div">
                <img src="assets/img/testdrive-img6.jpg" className="img" alt="" width="100%"></img>
                  <div className="car-div">
                    <h1 className="text-white display-5 fw-bold">Q3</h1>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 p-0">
              <div className="img-div">
                <img src="assets/img/testdrive-img7.jpg" className="img" alt="" width="100%"></img>
                  <div className="car-div">
                    <h1 className="text-white display-5 fw-bold">Q3 Sportback</h1>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 p-0">
              <div className="img-div">
                <img src="assets/img/testdrive-img8.jpg" className="img" alt="" width="100%"></img>
                  <div className="car-div">
                    <h1 className="text-white display-5 fw-bold">e-tron GT</h1>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 p-0">
              <div className="img-div">
                <img src="assets/img/testdrive-img9.jpg" className="img" alt="" width="100%"></img>
                  <div className="car-div">
                    <h1 className="text-white display-5 fw-bold">RS e-tron GT</h1>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 p-0">
              <div className="img-div">
                <img src="assets/img/testdrive-img10.jpg" className="img" alt="" width="100%"></img>
                  <div className="car-div">
                    <h1 className="text-white display-5 fw-bold">e-tron</h1>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 p-0">
              <div className="img-div">
                <img src="assets/img/testdrive-img11.jpg" className="img" alt="" width="100%"></img>
                  <div className="car-div">
                    <h1 className="text-white display-5 fw-bold">e-tron Sportback</h1>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 p-0">
              <div className="img-div">
                <img src="assets/img/testdrive-img12.jpg" className="img" alt="" width="100%"></img>
                  <div className="car-div">
                    <h1 className="text-white display-5 fw-bold">RS5</h1>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 p-0">
              <div className="img-div">
                <img src="assets/img/testdrive-img13.jpg" className="img" alt="" width="100%"></img>
                  <div className="car-div">
                    <h1 className="text-white display-5 fw-bold">A4</h1>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 p-0">
              <div className="img-div">
                <img src="assets/img/testdrive-img14.jpg" className="img" alt="" width="100%"></img>
                  <div className="car-div">
                    <h1 className="text-white display-5 fw-bold">A6</h1>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 p-0">
              <div className="img-div">
                <img src="assets/img/testdrive-img15.jpg" className="img" alt="" width="100%"></img>
                  <div className="car-div">
                    <h1 className="text-white display-5 fw-bold">S5</h1>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 p-0">
              <div className="img-div">
                <img src="assets/img/testdrive-img16.jpg" className="img" alt="" width="100%"></img>
                  <div className="car-div">
                    <h1 className="text-white display-5 fw-bold">Q8</h1>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 p-0">
              <div className="img-div">
                <img src="assets/img/testdrive-img17.jpg" className="img" alt="" width="100%"></img>
                  <div className="car-div">
                    <h1 className="text-white display-5 fw-bold">RS Q8</h1>
                  </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-center pt-4 pb-4">
              <button className="sec3-button1">Any</button>
              <button className="sec3-button2">e-tron</button>
            </div>
            <div className="text-center text-white pb-3">
              <p>© 2023 Audi AG. All rights reserved | Powered by Zala</p>
              <h6><span className="sec3-span pe-2">Non-liability clause</span> | <span className="sec3-span ps-2 pe-2">Privacy Policy </span> | <span className="sec3-span ps-2 pe-2">Terms of Service</span></h6>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
