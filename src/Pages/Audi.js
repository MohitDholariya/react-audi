import React, { Component } from 'react'

export default class audi extends Component {
  render() {
    return (
      <div>
        {/* <!-- Section 1 End -->
        <!-- Section 2 --> */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 p-0">
              <img src="assets/img/sec1-pic.webp" alt="" width="" className="img-fluid"></img>
            </div>
          </div>
        </div>
        {/* <!-- Section 2 End -->
        <!-- Section 3 --> */}

        <div className="sec3-bg container-fluid">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
              <div className="sec3-div1 py-3">
                <img src="assets/img/sec3-watch.jpg" alt="" className="sec3-img"></img>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="sec3-div2">
                <h3 className="text-white fw-bold sec3-h3"><span className="text-danger fw-bold">Audi </span> Shop</h3>
                <p className="text-white sec3-p">Products with Uncompromising Quality. A celebration of Innovation, quality and design.</p>
                <button className="sec3-button">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Section 3 End -->
        <!-- Section 4 --> */}
        <div className="container-fluid sec4-bg">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="sec4-div1">
                <h3>Audi Club</h3>
                <h4>Taking Luxury To New Heights.</h4>
                <p>Adventures in the great outdoors, weekend drives along unforgettable routes,
                  fine-dining at the world's best restaurants and lots more. Rediscover the essence
                  of true exclusivity with Audi Club India.</p>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div>
                <img src="assets/img/sec4-pic1.jpg" alt="" className="sec4-img"></img>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Section 4 End -->
        <!-- Section 5 --> */}
        <div className="container-fluid" style={{backgroundColor: "black"}}>
          <div className="sec5-mlr">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="sec5-div1">
                  <h3 className="fw-bold text-white">my<span className="text-danger">Audi</span> Connect</h3>
                  <h4 className="text-white">Your phone is now your car.</h4>
                  <button className="sec5-button">Learn More</button>
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                <div className="sec5-img">
                  <img src="assets/img/sec5-img.jpg" alt="" width="100%"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Section 5 End -->
        <!-- Section 6 --> */}
        <div className="container-fluid" style={{backgroundColor: "rgb(170, 4, 4)",}}>
          <div className="pt-4">
            <h4 className="text-white text-center">Exclusive Offers</h4>
          </div>
          <div className="sec5-mlr pt-4 pb-5">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="card border-0 mb-sm-5" style={{width: "100%"}}>
                  <img src="assets/img/sec6-card1.jpg" alt="" width="100%"></img>
                    <div className="card-body" style={{backgroundColor: "black"}}>
                      <h4 className="text-white text-center">Comprehensive Service Package</h4>
                    </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="card border-0" style={{width: "100%"}}>
                  <img src="assets/img/sec6-card2.jpg" alt="" width="100%"></img>
                    <div className="card-body" style={{backgroundColor: "black"}}>
                      <h4 className="text-white text-center">Audi Extended Warranty</h4>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /* <!-- Section 6 End --> */}
        </div>
        )
  }
}
