import React from "react";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer xl:px-24 py-10 px-4  text-base-content">
        <aside>
          <img src="/logo.png" alt="Logo Image" />
          <p className="my-5 md:w-40">
            Savor the artistry where every dish is a culinary masterpiece
          </p>
        </aside>
        <nav>
          <header className="footer-title">USEFUL LINKS</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Events</a>
          <a className="link link-hover">Blogs</a>
          <a className="link link-hover">FAQ</a>
        </nav>
        <nav>
          <h6 className="footer-title">MAIN MENU</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Offerce</a>
          <a className="link link-hover">Menus</a>
          <a className="link link-hover">Reservation</a>
        </nav>
        <nav>
          <h6 className="footer-title">CONTACT US</h6>
          <a className="link link-hover">amanmulla167@gmail.com</a>
          <a className="link link-hover">+91 (959)039-7339</a>
          <a className="link link-hover">Social Media</a>
        </nav>
      </div>
      <hr />
      <div className="footer items-center xl:px-24 py-10 px-4  text-base-content">
        <aside className="items-center grid-flow-col">
          <p>Copyright © 2024 - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a
            href="https://www.linkedin.com/in/amanulla-mulla-000678232/"
            target="_blank"
          >
            <FaLinkedin className="h-8 w-8" />
          </a>
          <a href="https://github.com/Amanulla2022" target="_blank">
            <FaGithub className="h-8 w-8" />
          </a>
          <a href="https://www.facebook.com/aman.mulla.90281" target="_blank">
            <FaFacebook className="h-8 w-8" />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
