import Details from "src/containers/Details";
import News from "src/containers/News";
import Newsletter from "src/containers/Newsletter";
import Services from "src/containers/Services";
import "./index.scss";

const Main = () => {
    return (
        <div>
            <Services />
            <Details />
            <News />
            <Newsletter />
        </div>
    );
};

export default Main;
