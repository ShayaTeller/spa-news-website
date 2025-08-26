// this function create a div element with a iframe element that 
// displey an "googlform" that the client can send an report about the application.
window.connecctToGoogleForms = function connecctToGoogleForms(){
    const iframe = document.createElement("iframe")
    iframe.src = "https://docs.google.com/forms/d/e/1FAIpQLSdKHYs-fJxfLA9_9fz6zilfL1bY_yVV6LIeCXDGYtb9liveuA/viewform?usp=dialog"
    iframe.width="640" 
    iframe.height="800" 
    iframe.frameborder="0" 
    iframe.marginheight="0" 
    const div = document.createElement("div");
    div.id ="iframe-div"
    div.append(iframe)
    return div;

}




