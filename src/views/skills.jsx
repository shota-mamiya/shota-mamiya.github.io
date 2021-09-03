import { Link } from "@reach/router";
import SmoothList from "react-smooth-list";
import {ReactComponent as HTML5} from '../img/html5.svg';
import {ReactComponent as CSS} from '../img/css3.svg';
import {ReactComponent as Javascript} from '../img/javascript.svg';
import {ReactComponent as Node} from '../img/nodejs.svg';
import {ReactComponent as Java} from '../img/java.svg';
import {ReactComponent as Python} from '../img/python.svg';
import {ReactComponent as Mongodb} from '../img/mongodb.svg';
import {ReactComponent as Mysql} from '../img/mysql.svg';
import {ReactComponent as React} from '../img/react.svg';


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
                        <p className="content-text">I have experience with the languages and frameworks listed below</p>
                        <div className="skill-logos">
                            <div>
                                <HTML5 width="125px" height="125px" className="skill-logo"/>
                                <CSS width="125px" height="125px" className="skill-logo"/>
                                <Javascript width="125px" height="125px" className="skill-logo"/>
                                <Node width="125px" height="125px" className="skill-logo"/>
                            </div>
                            <div>
                                <Java width="125px" height="125px" className="skill-logo"/>
                                <Python width="125px" height="125px" className="skill-logo"/>
                                <Mongodb width="125px" height="125px" className="skill-logo"/>
                                <Mysql width="125px" height="125px" className="skill-logo"/>
                                <React width="125px" height="125px" className="skill-logo"/>
                            </div>
                        </div>
                    </div>
            </SmoothList>
                </div>
        </div>
    )
}