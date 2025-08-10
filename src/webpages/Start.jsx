import React from 'react';
import Landing from "../Components/Landing.jsx";
import Highlights from "../Components/Highlights.jsx";
import Featured from "../Components/Featured.jsx";
import Discounted from "../Components/Discounted.jsx";
import Explore from "../Components/Explore.jsx";


const Start = () => {
    return(
    <>
        <Landing />
        <Highlights />
        <Featured />
        <Discounted />
        <Explore />
               
    </>        
    );
}
 export default Start;