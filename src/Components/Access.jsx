import Top from "./Top";
import Bottom from "./Bottom";
import Image from "./Image";
import { Icon } from "crayon-ui-kit";
import { useState } from "react";
function Access(){

    const [details, setDetails] = useState({
        name:"",
        email:"",
        reason:""
    });

    const [user, setUser] = useState("")

    const [success,setSuccess] = useState(false)

    const imageStyle = {
        height:"100vh",
        position:"relative"
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails({
          ...details,
          [name]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(details.name);
        setUser(details.name);
        setSuccess(true);
    }

    

    return ( success ?
        <div className="container-fluid p-0 m-0">
            <div className="row p-0 m-0">
                <div className=" col-md-8 d-none d-md-block p-0 m-0">
                    <Image url="Images/request.svg" htext = 'Engage Studio' />
                </div>
                <div style={imageStyle} className="col-md-4 col-sm-12 p-0 m-0">
                    <Top />
                    <div>
                        <h6 class="h6" style={{position:"absolute",top:"36%",left:"7%",textShadow:"1px 1px 2px rgba(0, 0, 0, 0.2)"}}><span><Icon color="#000" name="add-user"/></span>  Request for access</h6>
                        <p style={{position:"absolute",top:"42%",left:"10%",paddingLeft:"0px",paddingRight:"35px"}}>
                        Thanks {user} for you interest, We have <b> requested admin</b> to verify and approve. Watchout your email for email with magin link for us.</p>

                        <p style={{position:"absolute",top:"60%",left:"10%",fontSize:"13px"}}> You can also write to us at <a style={{ cursor: 'pointer',  color:"#516078", textDecoration:"underline" }} href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZcRZrbDDdDFzNhlKtrtckRwDJzlkpmqPTrKZzxbcSRkmPgDGPjlGDktVVKRsfMkhMWgZg"><b>admin@maya.ai</b></a> </p>
                    </div>
                    <Bottom />
                </div>
            </div>
        </div> 
        :
        <div className="container-fluid p-0 m-0">
            <style>
        {`
          .custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
            border-color: #00000; /* Change to your desired color */
            background-color: #00000; /* Change to your desired color */
          }
        `}
      </style>
            <div className="row p-0 m-0">
                <div className=" col-md-8 d-none d-md-block p-0 m-0">
                    <Image url="Images/request.svg" htext = 'Engage Studio' />
                </div>
                <div style={imageStyle} className="col-md-4 col-sm-12 p-0 m-0">
                    <Top />
                    <div style={{position:"absolute",top:"35%",left:"7%"}}>
                        <h6 class="h6" style={{fontSize:"14px",textShadow:"1px 1px 2px rgba(0, 0, 0, 0.4)"}}><span><Icon color="#000" name="add-user"/></span>  Request for access</h6>
                            <form onSubmit={handleSubmit}>
                            <div className="form mb-2" style={{position:"relative"}}>
                            <label style={{position:"absolute",fontSize:"10px",top:"3px",left:"5px"}}> Name: </label>
                                <input
                                type="text"
                                className="form-control"
                                id="floatingname"
                                name="name"
                                value={details.name}
                                placeholder="Full Name"
                                onChange={handleChange}
                                required
                                style={{ height: '45px',paddingTop:"18px", fontSize:"14px"}}
                                />
                            </div>
                            <div className="form mb-2" style={{position:"relative"}}>
                                <label style={{position:"absolute",fontSize:"10px",top:"3px",left:"5px"}}> Email: </label>
                                <input
                                type="email"
                                className="form-control"
                                id="floatingInput"
                                name="email"
                                value={details.email}
                                placeholder="@hdfc.com"
                                onChange={handleChange}
                                required
                                style={{ height: '45px',paddingTop:"18px", fontSize:"14px"}}
                                />
                            </div>
                            <div className="form mb-2" style={{position:"relative"}}>
                                <label style={{position:"absolute",fontSize:"10px",top:"3px",left:"5px"}}> Reason: </label>
                                <textarea
                                type="text"
                                className="form-control"
                                id="exampleTextBox"
                                name="reason"
                                value={details.reason}
                                placeholder="Breif Your Requirements"
                                onChange={handleChange}
                                style={{ height: '90px', paddingTop:"18px", fontSize:"14px" }}
                                />
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                                <label className="custom-control-label" htmlFor="flexCheckDefault" required style={{left:"20px",fontSize:"14px",textShadow:"1px 1px 2px rgba(0, 0, 0, 0.2)"}}>
                                Send me an email copy
                                </label>
                                <span>
                                <button className="btn btn-dark" style={{ marginLeft: '75px', width: '90px',height:"36px", padding:"0px",fontSize:12 }} type="submit">
                                    Submit
                                </button>
                                </span>
                            </div>
                            </form>
                    </div>
                    <Bottom />
                </div>
            </div>
        </div>
    )

}

export default Access;