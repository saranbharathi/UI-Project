import { MayaLogo } from "crayon-ui-kit";

function Top(){

    const xsStyles = {
        top: '5%', 
        left: '3%',
        textShadow: '1px 1px 5px rgba(0, 0, 0, 0.5)' 
      };

    return (
    <div style={{position:"absolute",top:"10%",left:"7%"}}>
        <MayaLogo />
        <br />
        <p style={window.innerWidth <= 576 ? xsStyles : {}}> 
        AI powered personalization engine dedicated to understand human tastes  </p>
    </div>
    )

}


export default Top;