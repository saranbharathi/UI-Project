import Image from "./Image";
import Top from "./Top";
import Bottom from "./Bottom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login(){
    const [details, setDetails] = useState({
        email:"",
        password:"",
    });

    const [user, setUser] = useState("")

    const [success,setSuccess] = useState(false)

    const imageStyle = {
        height:"100vh",
        position:"relative"
    }
    const navigate = useNavigate();

    const handleAccess = () => {
        navigate("/access")
    }
    const handleForgot = () => {
        navigate("/forgot")
    }
    const handleBack = () => {
        navigate("/")
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
        console.log(details.email);
        setUser(details.email);
        setSuccess(true);
    }
    //user.split('@')[0].charAt(0).toUpperCase() + user.split('@')[0].slice(1);
    return(
        success ?
        <div className="container-fluid p-0 m-0">
            <div className="row p-0 m-0">
                <div className=" col-md-8 d-none d-md-block p-0 m-0">
                    <Image url="Images/request.svg" htext = 'Engage Studio' />
                </div>
                <div style={imageStyle} className="col-md-4 col-sm-12 p-0 m-0">
                    <Top />
                    <div>
                        <p style={{position:"absolute",top:"42%",left:"10%",paddingLeft:"0px",paddingRight:"35px"}}>
                         {user.split('@')[0].charAt(0).toUpperCase() + user.split('@')[0].slice(1)} Login Successfully </p>
                    </div>
                    <p style={{marginLeft:"5px",color:"#516078",position:"absolute",top:"52%",left:"10%"}}> Go back to <span 
                            style={{ cursor: 'pointer',  color:"#516078", textDecoration:"underline" }}
                            onClick={handleBack}
                            >Home</span> 
                                </p>
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
                    <Image url="Images/login.svg" htext = 'Taste Studio'/>
                </div>
                <div style={imageStyle} className="col-md-4 col-sm-12 p-0 m-0">
                    <Top />
                    <div style={{position:"absolute",top:"38%",left:"10%"}}>
                            <form onSubmit={handleSubmit}>
                            <div className="form mb-3" style={{position:"relative"}}>
                                <label style={{position:"absolute",fontSize:"12px",top:"3px",left:"13px"}}> Login: </label>
                                <input
                                type="email"
                                className="form-control"
                                id="floatingInput"
                                name="email"
                                value={details.email}
                                placeholder="Email Id"
                                onChange={handleChange}
                                required
                                style={{ height: '52px',paddingTop:"18px", fontSize:"14px"}}
                                />
                            </div>
                            <div className="form mb-3" style={{position:"relative"}}>
                                <label style={{position:"absolute",fontSize:"12px",top:"3px",left:"13px"}}> Password: </label>
                                <input
                                type="password"
                                className="form-control"
                                id="exampleTextBox"
                                name="password"
                                value={details.passsword}
                                placeholder="Credentials"
                                onChange={handleChange}
                                style={{ height: '52px',paddingTop:"18px", fontSize:"14px"}}
                                />
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                                <label className="custom-control-label" htmlFor="flexCheckDefault" required style={{fontSize:"14px",textShadow:"1px 1px 2px rgba(0, 0, 0, 0.2)"}}>
                                 Remember me
                                </label>
                                <span>
                                <button className="btn btn-dark" style={{ marginLeft: '75px', width: '90px',height:"36px", padding:"0px",fontSize:12 }} type="submit">
                                    Sign in
                                </button>
                                </span>
                            </div>
                            </form>
                    </div>
                    <div style={{position:"absolute",top:"70%",left:"10%",}}>
                    <p style={{margin:"0px",marginBottom:"3px"}}><span style={{ cursor: 'pointer', color:"#516078", textDecoration:"underline"}} onClick={handleForgot}>Lost your password</span></p>
                    
                    <p 
                    style={{margin:"0px",color:"#516078" }}
                    >Not a member yet? <span style={{ cursor: 'pointer',  color:"#516078", textDecoration:"underline" }}
                    onClick={handleAccess}
                    >
                        Request Access</span></p>
                    </div>
                    <Bottom />
                </div>
            </div>
        </div>
    )
}

export default Login;