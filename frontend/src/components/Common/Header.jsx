import React, { useEffect, useState } from "react";
import ImageCartLogo from "../../assets/img/cart.png";
import { signOut } from "../../reducks/users/operations";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import mainlogo from "../../assets/img/stmark_logo.png";


export default function Header() {
  const dispatch = useDispatch();
  const key = localStorage.getItem("LOGIN_USER_KEY");
  const [checkUser, setCheckUser] = useState(false);

  const signOutButton = () => {
    dispatch(signOut());
    setCheckUser(false);
    dispatch(push("/signin"));
  };

  useEffect(() => {
    if (key != null) {
      setCheckUser(true);
    }
  }, [key]);

  return (
    <header>
      <section class="header-head">
        <a href="/">
          <div class="header">
            <a href="/">
              <img class="styledbytmark" src={mainlogo} alt="" />
            </a>
          </div>
        </a>
        {/* <a class="shop" href="/listingpage">Shop</a> */}
        <div class="header-links">
          <p class="sign-in-link">
            {checkUser ? (
              <span class="logout" onClick={signOutButton}>
                Logout
              </span>
            ) : (
              <a href="/signin" class="sign-in">
                Sign In
              </a>
            )}
          </p>
          {/* {checkUser && (
            <p class="img">
              <a href="/cart">
                <img src={ImageCartLogo} alt="" />
              </a>
            </p>
          )} */}
        </div>
      </section>
    </header>
  );
}
