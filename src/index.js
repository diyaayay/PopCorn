import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App-v1";
// import StarRating from "./StarRating";

// function Test(){
//   const[movieRating,setMovieRating]=useState(0);


//    return (
//     <div>
//       <StarRating maxRating={10} onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRating maxRating={5}/>
     <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]
    /> */}
    {/* <StarRating size={24} color="red" className="test" defaultRating={2} /> */}

    {/* <Test />  */}
    <App />
  </React.StrictMode>
);
