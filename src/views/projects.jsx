import { Link } from "@reach/router";
import SmoothList from "react-smooth-list";

export default () => {
    return (
        <div className="main-body">

                <div className="name-card">
                    <div className="name-card-sub1">
                        <h1>Shota Mamiya</h1>
                        <p>Full Stack Web Developer</p>
                    </div>
                </div>
                <div className="content-body">
                    <div className="content-nav-buttons">
                        <Link to="/">
                            <button className="nav-btn">About Me</button>
                        </Link>
                        <Link to="/skills">
                            <button className="nav-btn">Skills</button>
                        </Link>
                        <Link to="/projects">
                            <button className="nav-btn">Projects</button>
                        </Link>
                        <Link to="/contact">
                            <button className="nav-btn">Contact</button>
                        </Link>
                    </div>
            <SmoothList>
                    <div className="content-body-sub1">
                        <p className="content-text">Here are examples of projects I have done</p>
                    </div>
            </SmoothList>
                </div>
        </div>
    )
}