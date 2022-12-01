    //Javascript 
    const jsRoot = document.getElementById("js-root");
    const jsHeading = document.createElement("h1");
    jsHeading.innerHTML="Hello JS!!"
    jsRoot.appendChild(jsHeading);
    
    
    //React 
    const reactRoot = ReactDOM.createRoot(document.getElementById("js-root"));
    const raectHeading = React.createElement("h1",{},"Hello React!!!");
    reactRoot.render(raectHeading);