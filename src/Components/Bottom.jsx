
import { CrayonLogo } from "crayon-ui-kit";


function Bottom(){

    const shadow = { // Background color
        padding:"0px",
        margin:"0px",
        borderRadius:"3px",
        position:"absolute",
        top:"90%",
        left:"6%",
        boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.2)'
    }

    return(
        <div>
            <div style={shadow}>
                <CrayonLogo name="MonogramLogo" size="28" background="light" />
            </div>
            <p style={{fontSize:"10px", position:"absolute",top:"90%",left:"12%",marginLeft:"11px",textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)'}}>
             ©2020 All Rights Reserved by Crayon Data Pte Ltd and it's registered trademark maya.ai 
            </p>
        </div>
    )
}

export default Bottom;