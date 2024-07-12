import React, { Component } from 'react'

export default class service extends Component {
  render() {
    return (
      <div>

          {/* <!-- Section 2 --> */}

          <div>
            <img src="assets/img/service.jpg" alt="" width="100%"></img>
          </div>

          {/* <!-- Section 2 End -->
          <!-- Section 3 --> */}
          <div className="container-fluid p-0">
            <div className="sec3-bg pb-3">
              <div>
                <div className="text-center pt-5  mb-5">
                  <h3 className="text-white">Book your service with Audi Surat today.</h3>
                  <button className="sec3-button mt-3">Book a Service Now</button>
                </div>
                <div className="">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="sec3-div1 me-3" style={{width: "75%"}}>
                        <h1 className="text-white">Contact Us</h1>
                        <h5 className="text-danger">Showroom</h5>
                        <h6 className="text-white">Audi Surat</h6>
                        <p className="text-secondary">Plot No 43, TP Scheme No 3, Dumas Rd, near Rundhnath Mahadev, Surat, Gujarat 395007</p>
                        <p className="text-danger"><span className="me-2"><i className="fa-solid fa-phone"></i></span>7878788138 / 7878788139</p>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="sec3-div2 mt-5 ms-3"style={{width: "75%"}}>
                        <h5 className="text-danger">WorkShop</h5>
                        <h6 className="text-white">Audi Service Surat</h6>
                        <p className="text-secondary">Plot No. A-28/2, GIDC Industrial Estate Ichhapore, Bhatpore 394510</p>
                        <p className="text-danger"><span className="me-2"><i className="fa-solid fa-phone"></i></span>9662515082 / 9727588444</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container sec3-hr"></div>
                <div className="text-center mt-5">
                  <div className="text-white pb-3">
                    <p>© 2023 Audi AG. All rights reserved | Powered by Zala</p>
                    <h6><span className="sec3-span pe-2">Non-liability clause</span> | <span className="sec3-span ps-2 pe-2">Privacy Policy </span> | <span className="sec3-span ps-2 pe-2">Terms of Service</span></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
  }
}
