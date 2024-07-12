import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        {/* <!-- Section 7  Footer --> */}
        <div className="container-fluid px-4">
          <div className="sec7-div">
            <h6 className="text-secondary">Disclaimer-Power consumption, combined*: 23.8–20.9 kWh/100km (NEDC); 25.8–21.1 kWh/100km (WLTP)CO₂ emissions, combined*: 0 g/km.
              German model shown. Stated specifications apply only in Germany and are not applicable in other regions.</h6>
          </div>
          <hr></hr>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="text-center p-0">
                  <img src="assets/img/audi-footer.jpg" alt="" width="25%"></img>
                    <p>© 2024 Audi India (Division of SKODA AUTO VOLKSWAGEN INDIA PRIVATE LIMITED)</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12 col-12">
                <div className="text-center p-0">
                  <h3>Innovation</h3>
                  <p>Audi Quattro</p>
                  <p>Audi e-tron</p>
                  <p>Audi Sport</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12 col-12">
                <div className="text-center p-0">
                  <h3>Used Cars</h3>
                  <p>Dealership Locator</p>
                  <p>Audi Approved Plus</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12 col-12">
                <div className="text-center p-0">
                  <h3>Customer Area</h3>
                  <p>Sustainability</p>
                  <p>myAudi Connect</p>
                  <p>Audi Driving Experience</p>
                  <p>Audi Services</p>
                  <p>Audi Owners</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12 col-12">
                <div className="text-center p-0">
                  <h3>Other</h3>
                  <p>Legal</p>
                  <p>Model Price List</p>
                  <p>All Models</p>
                </div>
              </div>
            </div>
            <hr></hr>
              <div className="sec7-div text-center">
                <h6 className="text-secondary">E-1, SKODA AUTO VOLKSWAGEN INDIA PRIVATE LIMITED, MIDC INDUSTRIAL AREA, PHASE III,
                  NIGOJE MHALUNGE, KHARABWADI, KHED, CHAKAN, Pune, Maharashtra, 410501.</h6>
              </div>
              <hr></hr>
                <div className="text-center">
                  <div className="pt-2 pb-3">
                    <i className="fa-brands fa-facebook-f sec7-icon"></i>
                    <i className="fa-brands fa-twitter sec7-icon"></i>
                    <i className="fa-brands fa-instagram sec7-icon"></i>
                    <i className="fa-brands fa-youtube sec7-icon"></i>
                  </div>
                  <h6 className="text-secondary">Powered By ZALA</h6>
                </div>
              </div>
              {/* <!-- Section 7 End --> */}
      </div>
    )
  }
}
