import React, { useState } from "react";
import ImgCover from "../../assets/img/styledonfriday.png";
// import Styledonfridaycover from "../../assets/img/Styledonfridaycover.png";
import ImageCartLogo from "../../assets/img/Dribbble-Light-Preview.png";
// import "../../assets/style.css";

const MainImage = () => {
  const [checkUser, setCheckUser] = useState(false);
  return (
    <>
      <section class="background">
        <div class="main-catch">
        </div>
        <img src={ImgCover} alt="" />
        {checkUser && (
          <p class="img">
            <a href="/cart">
              <img class="mainimage" src={ImgCover} alt="" />
            </a>
          </p>
        )}
      </section>
    </>
  );
};

export default MainImage;
