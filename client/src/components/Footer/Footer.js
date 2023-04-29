import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { ReactComponent as Twitter } from "./socials/Twitter.svg";
import { ReactComponent as YouTube } from "./socials/YouTube.svg";
import { ReactComponent as Vkontakte } from "./socials/Vkontakte (VK).svg";
import { ReactComponent as Skype } from "./socials/Skype.svg";
import { ReactComponent as Instagram } from "./socials/Instagram.svg";
import { ReactComponent as FaceBook } from "./socials/Facebook.svg";
import { ReactComponent as Telegram } from "./socials/Telegram.svg";

function Footer() {
  return (
    <footer className="Footer">
      <div className="container">
        <div className="row">
          <div className="footer_left">
            <Link to="/">
              <img src="/images/logo.png" alt="" />
            </Link>
          </div>
          <ul>
            <li>
              <Link to={"/"}>Main</Link>
            </li>
            <li>
              <Link to={"/"}>Mach center</Link>
            </li>
            <li>
              <Link to={"/"}>Football</Link>
            </li>
            <li>
              <Link to={"/"}>Tennis </Link>
            </li>
            <li>
              <Link to={"/"}>Cybersport</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to={"/"}>Main</Link>
            </li>
            <li>
              <Link to={"/"}>Mach center</Link>
            </li>
            <li>
              <Link to={"/"}>Football</Link>
            </li>
            <li>
              <Link to={"/"}>Tennis </Link>
            </li>
            <li>
              <Link to={"/"}>Cybersport</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to={"/"}>Main</Link>
            </li>
            <li>
              <Link to={"/"}>Mach center</Link>
            </li>
            <li>
              <Link to={"/"}>Football</Link>
            </li>
            <li>
              <Link to={"/"}>Tennis </Link>
            </li>
            <li>
              <Link to={"/"}>Cybersport</Link>
            </li>
          </ul>
          <div className="footer_socials">
            <div className="socials_top">
              <Link to={"/"}>
                <Twitter />
              </Link>
              <Link to={"/"}>
                <YouTube />
              </Link>
              <Link to={"/"}>
                <Vkontakte />
              </Link>
            </div>
            <div className="socials_bottom">
              <Link to={"/"}>
                <Skype />
              </Link>

              <Link to={"/"}>
                <Instagram />
              </Link>

              <Link to={"/"}>
                <FaceBook />
              </Link>

              <Link to={"/"}>
                <Telegram />
              </Link>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <p>© 2023 Footboll. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
