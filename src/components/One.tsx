import React from "react";
import ReactGA from "react-ga4";


const One = () => {

  const clickHandle = ()=>{
ReactGA.event({
  category:"Button" , 
  action:"Click the button from first page"
})
console.log("send the information to google");

  }
  return (
    <div>
      <button onClick={clickHandle}>Click</button>
    </div>
  );
};

export default One;
