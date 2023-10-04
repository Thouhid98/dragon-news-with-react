import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Breakingnews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Latest</button>
            <Marquee pauseOnHover>
                <Link className="mr-4" to="/">
                I can be a React component, multiple React components, or just some text....
                </Link>
                <Link className="mr-4" to="/">
                I can be a React component, multiple React components, or just some text...
                </Link>
                <Link className="mr-4" to="/">
                I can be a React component, multiple React components, or just some text...
                </Link>
            </Marquee>
        </div>
    );
};

export default Breakingnews;