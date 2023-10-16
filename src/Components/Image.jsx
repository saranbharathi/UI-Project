function Image({url,htext}){

    const styles = {
        backgroundImage: `url(${url})`,
        backgroundSize: '105% 105%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position:"relative",
        textAlign:"center",
        height: '100vh', // Set the column height to 100% of viewport height
      }

    return (
    <div style={styles}>
    <div style={{position:"absolute", top: "90%", left: "50%",transform:"translate(-50%, -50%)"}}>
    <h5> {htext} </h5>
    <p> AI Powered personalization Engine dedicated to understand human taste. </p>
    </div>
    </div>
    );

}

export default Image;