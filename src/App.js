    
    import React from 'react';
    import ReactDOM from 'react-dom/client';
     
    //Javascript 
    const jsRoot = document.getElementById("js-root");
    const jsHeading = document.createElement("h1");
    jsHeading.innerHTML="Hello JS!!"
    jsRoot.appendChild(jsHeading);
    //testing git 
    
    
    //React 
    const reactRoot = ReactDOM.createRoot(document.getElementById("react-root"));
    const raectHeading = React.createElement("h1",{},"Hello React!!!");
    reactRoot.render(raectHeading);