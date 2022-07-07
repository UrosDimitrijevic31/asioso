import { Image } from "react-bootstrap";
import logo from "src/assets/logo.webp";
import "./index.scss";

const Logo = () => {
    return <Image src={logo} alt="asioso-logo" className="logo" />;
};

export default Logo;
