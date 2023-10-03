import logo from "../images/Awesome.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex justify-between p-4 mt-4 bg-[#222229]">
      <div>
        <Link to={"/"}>
          <img
            src={logo}
            alt="Awesome Food Milega"
            className="w-14 h-11 rounded-md"
          />
        </Link>
        <span className="font-bold">Awesome Food Milega</span>
        <h2>©️ 2023 vs technologies</h2>
      </div>
      <div>
        <ul>
          <Link to={"/about"}>
            <li className="font-bold">Company</li>
          </Link>
          <li>About</li>
          <li>Carrers</li>
          <li>Team</li>
          <li>Awesome Food Milega One</li>
          <li>Awesome Food Milega Instamart</li>
        </ul>
      </div>
      <div>
        <ul>
          <Link to={"/contact"}>
            <li className="font-bold">Contact us</li>
          </Link>
          <li>Help & Support</li>
          <li>Partner with us</li>
          <li>Ride with us</li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="font-bold">Legal</li>
          <li>Term & Conditions</li>
          <li>Cookie Policy</li>
          <li>Privacy</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
