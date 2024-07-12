import React, { Component } from 'react'

export default class Login   extends Component {
  render() {
    return (
      <div>
        <div className="img-div">
            <div className="container">
                <div className="row align-items-center pt-5">
                    <div className="col-6">
                        <form style={{backgroundColor: "#fff", width: "55%"}}>
                            <h1 className="text-center pt-3">Welcome</h1>
                            <div className="mx-2">
                                <label>Country</label><br />
                                <input type="text" list="country" value="India (+91)" className="w-100" ></input>
                                <datalist id="country">
                                    <option value="India (+91)" />
                                    <option value="Australia (+61)" />
                                    <option value="France (+33)" />
                                    <option value="Germany (+49)" />
                                    <option value="New Zealand (+64)" />
                                </datalist><br /><br />
                                <label>Name</label><br />
                                <input type="text" className="w-100" /><br /><br />
                                <label>Contact</label><br />
                                <input type="text" className="w-100" /><br /><br />
                                <label>Email</label><br />
                                <input type="text" className="w-100" /><br /><br />    
                            </div>
                            
                            <div className="px-2 mb-4">
                                <button  className="button">Submit</button>
                            </div>
                            <p className="text-center">Need help? Call us : 08061521150 Or Email: connect@audiindia.in</p>

                            <p className="text-center pb-3">By clicking Continue you Agree to our <span style={{textDecoration: "underline"}}>Privacy Policy</span> and <span style={{textDecoration: "underline"}}>Terms Of Service</span> .</p>
                        </form>
                    </div>
                    <div className="col-6">
                        <div className="logo-div">
                            <img src="assets/img/audi.jpg" alt="" width="50%"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
