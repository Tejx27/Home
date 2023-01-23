import React from "react";
import Header from "./Navbar";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Home from "./Home";
import Services from "./Services";

function App() {
    return (
        <div>
            <Navbar />
            <Home name="WE HELP YOU GO FROM ZERO TO 1 FOR YOUR NEXT BIG THING." 
                para1="Start your Startup or Business with ease."
                para2="Take the hassle out of entrepreneurship"
                para3=" with our innovative platform."
                btn1="Learn More"
                btn2="Get Started"
                img1="Images/home1.png"
                name2="CONDUCT YOUR SURVEY AND VALIDATE YOUR IDEA"
                paragraph="valid helps entrepreneurs validates there ideas and validate the market faster with real-time data."
                img2="Images/home2.png"
                secpara="Get the market insights in your inbox."
                btn3="Validate your idea"
            />
            <Services/>
            <Footer />
        </div>
        );
}

export default App;