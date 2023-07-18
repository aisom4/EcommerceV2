import React from "react";
import AboutCards from "./components/AboutCards";
import AboutBox from "./components/AboutBox";
import "./componentStyling/AboutCards.css";
import "./componentStyling/AboutBox.css";
const About = () => {
  return (
    <div>
      <h2>Vinyl Visions Remastered</h2>
      <div className="faq">
        {/* importing About page components */}
        <AboutCards />
        <AboutBox />
      </div>
    </div>
  );
};

export default About;

//Api Section-------

// <label>
//   Type:
//   <input
//     type="text"
//     value={typeFilter}
//     onChange={(e) => setTypeFilter(e.target.value)}
//     placeholder="Seacrh Here"
//   />
// </label>;
// const axios = require("axios");

// const options = {
//   method: "GET",
//   url: "https://spotify23.p.rapidapi.com/search/",
//   params: {
//     q: "Kanye West",
//     type: "multi",
//     offset: "0",
//     limit: "10",
//     numberOfTopResults: "5",
//   },
//   headers: {
//     "X-RapidAPI-Key": "7a8ff12a96mshc65f55cf7d527c0p144cddjsn4e173930f98d",
//     "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
//   },
// };

// try {
//   const response = await axios.request(options);
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }
