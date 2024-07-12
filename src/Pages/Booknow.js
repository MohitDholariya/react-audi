import React, { Component } from 'react'

export default class booknow extends Component {
  render() {
    return (
      <div>
        {/* <!-- Section 2 --> */}
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col">
              <h2 className="mt-4">Models</h2>
            </div>
            <div className="col-auto justify-content-end">
              <button className="sec2-button mt-4">My Bookings</button>
            </div>
          </div>
          <div className="sec2-bg">
            <ul className="breadcrumb ps-2 pt-2">
              <li className="breadcrumb-item">Home</li>
              <li className="breadcrumb-item active">Models</li>
            </ul>
          </div>
          <hr className="hr"></hr>
        </div>
        {/* <!-- Section 2 End -->
        <!-- Section 3 --> */}

        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="cart1 pb-5">
                <p className="display-1 fw-bold ms-2">Q8 e-tron</p>
                <img src="assets/img/bn-q8e-img1.jpg" alt="" className="mx-auto" width="100%"></img>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 cart2-mt">
              <div className="cart2">
                <div className="card border-0 mt-3">
                  <div className="text-center">
                    <h4 className="fw-bold">Q8 e-tron</h4>
                    <p className="model-color">Model Year: 2024</p>
                  </div>
                  <img src="assets/img/bn-q8e-img2.jpg" className="card-img-top" alt="..." width="50%"></img>
                    <div className="card-body text-center div-bb">
                      <p className="card-text fw-bold txt-color"><i
                        className="fa-solid fa-indian-rupee-sign va"></i> 1,14,73,000</p>
                      <p className="fw-bold txt-color">(EX-Showroom)</p>
                    </div>
                    <div className="mx-4 mt-4 mb-2">
                      <button className="sec3-button1">Book Now</button>
                    </div>
                    <div className="mx-4 mb-3">
                      <button className="sec3-button2">Test Drive</button>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 cart2-mt">
              <div className="cart2">
                <div className="card border-0 mt-3">
                  <div className="text-center">
                    <h4 className="fw-bold">Q8 Sportback e-tron</h4>
                    <p className="model-color">Model Year: 2024</p>
                  </div>
                  <img src="assets/img/bn-q8e-img3.jpg" className="card-img-top" alt="..." width="50%"></img>
                    <div className="card-body text-center div-bb">
                      <p className="card-text fw-bold txt-color"><i
                        className="fa-solid fa-indian-rupee-sign va"></i> 1,19,23,000</p>
                      <p className="fw-bold txt-color">(EX-Showroom)</p>
                    </div>
                    <div className="mx-4 mt-4 mb-2">
                      <button className="sec3-button1">Book Now</button>
                    </div>
                    <div className="mx-4 mb-3">
                      <button className="sec3-button2">Test Drive</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3"></div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="cart1 pb-5">
                <p className="display-1 fw-bold ms-2">e-tron GT</p>
                <img src="assets/img/bn-et-img1.jpg" alt="" className="mx-auto" width="100%"></img>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 cart2-mt">
              <div className="cart2">
                <div className="card border-0 mt-3">
                  <div className="text-center">
                    <h4 className="fw-bold">RS e-tron GT</h4>
                    <p className="model-color">Model Year: 2023</p>
                  </div>
                  <img src="assets/img/bn-et-img2.jpg" className="card-img-top px-3" alt="..." width="50%"></img>
                    <div className="card-body text-center div-bb">
                      <p className="card-text fw-bold txt-color"><i
                        className="fa-solid fa-indian-rupee-sign va"></i> 2,11,82,000</p>
                      <p className="fw-bold txt-color">(EX-Showroom)</p>
                    </div>
                    <div className="mx-4 mt-4 mb-2">
                      <button className="sec3-button1">Book Now</button>
                    </div>
                    <div className="mx-4 mb-3">
                      <button className="sec3-button2">Test Drive</button>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 cart2-mt">
              <div className="cart2">
                <div className="card border-0 mt-3">
                  <div className="text-center">
                    <h4 className="fw-bold">RS e-tron GT</h4>
                    <p className="model-color">Model Year: 2024</p>
                  </div>
                  <img src="assets/img/bn-et-img3.jpg" className="card-img-top px-3" alt="..." width="50%"></img>
                    <div className="card-body text-center div-bb">
                      <p className="card-text fw-bold txt-color"><i
                        className="fa-solid fa-indian-rupee-sign va"></i> 2,14,20,000</p>
                      <p className="fw-bold txt-color">(EX-Showroom)</p>
                    </div>
                    <div className="mx-4 mt-4 mb-2">
                      <button className="sec3-button1">Book Now</button>
                    </div>
                    <div className="mx-4 mb-3">
                      <button className="sec3-button2">Test Drive</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3"></div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="cart1 pb-5">
                <p className="display-1 fw-bold ms-2">e-tron</p>
                <img src="assets/img/bn-etsuv-img1.jpg" alt="" className="mx-auto" width="100%"></img>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-12 cart2-mt">
              <div className="cart2">
                <div className="card border-0 mt-3">
                  <div className="text-center">
                    <h4 className="fw-bold">e-tron</h4>
                    <p className="model-color">Model Year: 2023</p>
                  </div>
                  <img src="assets/img/bn-etsuv-img2.jpg" className="card-img-top px-3" alt="..." width="50%"></img>
                    <div className="card-body text-center div-bb">
                      <p className="card-text fw-bold txt-color"><i
                        className="fa-solid fa-indian-rupee-sign va"></i> 1,18,63,000</p>
                      <p className="fw-bold txt-color">(EX-Showroom)</p>
                    </div>
                    <div className="mx-4 mt-4 mb-2">
                      <button className="sec3-button1">Book Now</button>
                    </div>
                    <div className="mx-4 mb-3">
                      <button className="sec3-button2">Test Drive</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3"></div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="cart1 pb-5">
                <p className="display-1 fw-bold ms-2">A4</p>
                <img src="assets/img/bn-a4-img1.jpg" alt="" className="mx-auto" width="100%"></img>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 cart2-mt">
              <div className="cart2">
                <div className="card border-0 mt-3">
                  <div className="text-center">
                    <h4 className="fw-bold">A4</h4>
                    <p className="model-color">Model Year: 2023</p>
                  </div>
                  <img src="assets/img/bn-a4-img2.jpg" className="card-img-top px-3" alt="..." width="50%"></img>
                    <div className="card-body text-center div-bb">
                      <p className="card-text fw-bold txt-color"><i
                        className="fa-solid fa-indian-rupee-sign va"></i> 43,85,000</p>
                      <p className="fw-bold txt-color">(EX-Showroom)</p>
                    </div>
                    <div className="mx-4 mt-4 mb-2">
                      <button className="sec3-button1">Book Now</button>
                    </div>
                    <div className="mx-4 mb-3">
                      <button className="sec3-button2">Test Drive</button>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 cart2-mt">
              <div className="cart2">
                <div className="card border-0 mt-3">
                  <div className="text-center">
                    <h4 className="fw-bold">A4</h4>
                    <p className="model-color">Model Year: 2024</p>
                  </div>
                  <img src="assets/img/bn-a4-img3.jpg" className="card-img-top px-3" alt="..." width="50%"></img>
                    <div className="card-body text-center div-bb">
                      <p className="card-text fw-bold txt-color"><i
                        className="fa-solid fa-indian-rupee-sign va"></i> 49,34,000</p>
                      <p className="fw-bold txt-color">(EX-Showroom)</p>
                    </div>
                    <div className="mx-4 mt-4 mb-2">
                      <button className="sec3-button1">Book Now</button>
                    </div>
                    <div className="mx-4 mb-3">
                      <button className="sec3-button2">Test Drive</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3"></div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="cart1 pb-5">
                <p className="display-1 fw-bold ms-2">A6</p>
                <img src="assets/img/bn-a6-img1.jpg" alt="" className="mx-auto" width="100%"></img>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-12 cart2-mt">
              <div className="cart2">
                <div className="card border-0 mt-3">
                  <div className="text-center">
                    <h4 className="fw-bold">A6</h4>
                    <p className="model-color">Model Year: 2024</p>
                  </div>
                  <img src="assets/img/bn-a6-img2.jpg" className="card-img-top px-3" alt="..." width="50%"></img>
                    <div className="card-body text-center div-bb">
                      <p className="card-text fw-bold txt-color"><i
                        className="fa-solid fa-indian-rupee-sign va"></i> 64,10,000</p>
                      <p className="fw-bold txt-color">(EX-Showroom)</p>
                    </div>
                    <div className="mx-4 mt-4 mb-2">
                      <button className="sec3-button1">Book Now</button>
                    </div>
                    <div className="mx-4 mb-3">
                      <button className="sec3-button2">Test Drive</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3"></div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="cart1 pb-5">
                <p className="display-1 fw-bold ms-2">A8L</p>
                <img src="assets/img/bn-a8-img1.jpg" alt="" className="mx-auto" width="100%"></img>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-12 cart2-mt">
              <div className="cart2">
                <div className="card border-0 mt-3">
                  <div className="text-center">
                    <h4 className="fw-bold">A8L</h4>
                    <p className="model-color">Model Year: 2023</p>
                  </div>
                  <img src="assets/img/bn-a8-img2.jpg" className="card-img-top px-3" alt="..." width="50%"></img>
                    <div className="card-body text-center div-bb">
                      <p className="card-text fw-bold txt-color"><i
                        className="fa-solid fa-indian-rupee-sign va"></i> 1,34,15,000</p>
                      <p className="fw-bold txt-color">(EX-Showroom)</p>
                    </div>
                    <div className="mx-4 mt-4 mb-2">
                      <button className="sec3-button1">Book Now</button>
                    </div>
                    <div className="mx-4 mb-3">
                      <button className="sec3-button2">Test Drive</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3"></div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="cart1 pb-5">
                <p className="display-1 fw-bold ms-2">Q3</p>
                <img src="assets/img/bn-q3-img1.jpg" alt="" className="mx-auto" width="90%"></img>
              </div>
            </div>
            <div className=" row mt-4">
              <div className="col-lg-3 col-md-6 col-12 cart2-mt">
                <div className="cart2">
                  <div className="card border-0 mt-3">
                    <div className="text-center">
                      <h4 className="fw-bold">Q3 Sportback</h4>
                      <p className="model-color">Model Year: 2023</p>
                    </div>
                    <img src="assets/img/bn-q3-img2.jpg" className="card-img-top px-3" alt="..." width="50%"></img>
                      <div className="card-body text-center div-bb">
                        <p className="card-text fw-bold txt-color"><i
                          className="fa-solid fa-indian-rupee-sign va"></i> 52,97,000</p>
                        <p className="fw-bold txt-color">(EX-Showroom)</p>
                      </div>
                      <div className="mx-4 mt-4 mb-2">
                        <button className="sec3-button1">Book Now</button>
                      </div>
                      <div className="mx-4 mb-3">
                        <button className="sec3-button2">Test Drive</button>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 cart2-mt">
                <div className="cart2">
                  <div className="card border-0 mt-3">
                    <div className="text-center">
                      <h4 className="fw-bold">Q3 Sportback</h4>
                      <p className="model-color">Model Year: 2024</p>
                    </div>
                    <img src="assets/img/bn-q3-img3.jpg" className="card-img-top px-3" alt="..." width="50%"></img>
                      <div className="card-body text-center div-bb">
                        <p className="card-text fw-bold txt-color"><i
                          className="fa-solid fa-indian-rupee-sign va"></i> 60,34,000</p>
                        <p className="fw-bold txt-color">(EX-Showroom)</p>
                      </div>
                      <div className="mx-4 mt-4 mb-2">
                        <button className="sec3-button1">Book Now</button>
                      </div>
                      <div className="mx-4 mb-3">
                        <button className="sec3-button2">Test Drive</button>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 cart2-mt">
                <div className="cart2">
                  <div className="card border-0 mt-3">
                    <div className="text-center">
                      <h4 className="fw-bold">Q3</h4>
                      <p className="model-color">Model Year: 2023</p>
                    </div>
                    <img src="assets/img/bn-q3-img3.jpg" className="card-img-top px-3" alt="..." width="50%"></img>
                      <div className="card-body text-center div-bb">
                        <p className="card-text fw-bold txt-color"><i
                          className="fa-solid fa-indian-rupee-sign va"></i> 42,77,000</p>
                        <p className="fw-bold txt-color">(EX-Showroom)</p>
                      </div>
                      <div className="mx-4 mt-4 mb-2">
                        <button className="sec3-button1">Book Now</button>
                      </div>
                      <div className="mx-4 mb-3">
                        <button className="sec3-button2">Test Drive</button>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 cart2-mt">
                <div className="cart2">
                  <div className="card border-0 mt-3">
                    <div className="text-center">
                      <h4 className="fw-bold">Q3</h4>
                      <p className="model-color">Model Year: 2024</p>
                    </div>
                    <img src="assets/img/bn-q3-img3.jpg" className="card-img-top px-3" alt="..." width="50%"></img>
                      <div className="card-body text-center div-bb">
                        <p className="card-text fw-bold txt-color"><i
                          className="fa-solid fa-indian-rupee-sign va"></i> 47,80,000</p>
                        <p className="fw-bold txt-color">(EX-Showroom)</p>
                      </div>
                      <div className="mx-4 mt-4 mb-2">
                        <button className="sec3-button1">Book Now</button>
                      </div>
                      <div className="mx-4 mb-3">
                        <button className="sec3-button2">Test Drive</button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3"></div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="cart1 pb-5">
                <p className="display-1 fw-bold ms-2">Q5</p>
                <img src="assets/img/bn-q5-img1.jpg" alt="" className="mx-auto" width="100%"></img>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 cart2-mt">
              <div className="cart2">
                <div className="card border-0 mt-3">
                  <div className="text-center">
                    <h4 className="fw-bold">Q5</h4>
                    <p className="model-color">Model Year: 2023</p>
                  </div>
                  <img src="assets/img/bn-q5-img2.jpg" className="card-img-top px-3" alt="..." width="50%"></img>
                    <div className="card-body text-center div-bb">
                      <p className="card-text fw-bold txt-color"><i
                        className="fa-solid fa-indian-rupee-sign va"></i> 62,35,000</p>
                      <p className="fw-bold txt-color">(EX-Showroom)</p>
                    </div>
                    <div className="mx-4 mt-4 mb-2">
                      <button className="sec3-button1">Book Now</button>
                    </div>
                    <div className="mx-4 mb-3">
                      <button className="sec3-button2">Test Drive</button>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 cart2-mt">
              <div className="cart2">
                <div className="card border-0 mt-3">
                  <div className="text-center">
                    <h4 className="fw-bold">Q5</h4>
                    <p className="model-color">Model Year: 2024</p>
                  </div>
                  <img src="assets/img/bn-q5-img3.jpg" className="card-img-top px-3" alt="..." width="50%"></img>
                    <div className="card-body text-center div-bb">
                      <p className="card-text fw-bold txt-color"><i
                        className="fa-solid fa-indian-rupee-sign va"></i> 69,18,000</p>
                      <p className="fw-bold txt-color">(EX-Showroom)</p>
                    </div>
                    <div className="mx-4 mt-4 mb-2">
                      <button className="sec3-button1">Book Now</button>
                    </div>
                    <div className="mx-4 mb-3">
                      <button className="sec3-button2">Test Drive</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3"></div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="cart1 pb-5">
                <p className="display-1 fw-bold ms-2">Q7</p>
                <img src="assets/img/bn-q7-img1.jpg" alt="" className="mx-auto" width="100%"></img>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-12 cart2-mt">
              <div className="cart2">
                <div className="card border-0 mt-3">
                  <div className="text-center">
                    <h4 className="fw-bold">Q7</h4>
                    <p className="model-color">Model Year: 2024</p>
                  </div>
                  <img src="assets/img/bn-q7-img2.jpg" className="card-img-top px-3" alt="..." width="50%"></img>
                    <div className="card-body text-center div-bb">
                      <p className="card-text fw-bold txt-color"><i
                        className="fa-solid fa-indian-rupee-sign va"></i> 86,40,000</p>
                      <p className="fw-bold txt-color">(EX-Showroom)</p>
                    </div>
                    <div className="mx-4 mt-4 mb-2">
                      <button className="sec3-button1">Book Now</button>
                    </div>
                    <div className="mx-4 mb-3">
                      <button className="sec3-button2">Test Drive</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3"></div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="cart1 pb-5">
                <p className="display-1 fw-bold ms-2">Q8</p>
                <img src="assets/img/bn-q8-img1.jpg" alt="" className="mx-auto" width="100%"></img>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-12 cart2-mt">
              <div className="cart2">
                <div className="card border-0 mt-3">
                  <div className="text-center">
                    <h4 className="fw-bold">Q8</h4>
                    <p className="model-color">Model Year: 2024</p>
                  </div>
                  <img src="assets/img/bn-q8-img2.jpg" className="card-img-top px-3" alt="..." width="50%"></img>
                    <div className="card-body text-center div-bb">
                      <p className="card-text fw-bold txt-color"><i
                        className="fa-solid fa-indian-rupee-sign va"></i> 1,07,19,000</p>
                      <p className="fw-bold txt-color">(EX-Showroom)</p>
                    </div>
                    <div className="mx-4 mt-4 mb-2">
                      <button className="sec3-button1">Book Now</button>
                    </div>
                    <div className="mx-4 mb-3">
                      <button className="sec3-button2">Test Drive</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Section 3 End --> */}
      </div>
    )
  }
}
