import React from "react";
import logo from '../../assets/Vote_icon.svg';
import AboutModal from "../about/about";

class Header extends React.Component {
    render() {
        return(
            <header>
                <div className="title">
                    <img className="image" src={logo}  alt="logo" />
                    <div>Hvor skal jeg stemme på valgdagen?</div>
                </div>
                <AboutModal/>
            </header>
        );
    }
}

export default Header