import React from "react";
import Button from '@mui/material/Button';
import logo from '../../assets/Vote_icon.svg';

class Header extends React.Component {
    render() {
        return(
            <header>
                <div className="title">
                    <img className="image" src={logo}  alt="logo" />
                    <div>Hvor skal jeg stemme på valgdagen?</div>
                </div>
                <div className="about">
                    <Button variant="contained">Om Siden</Button>
                </div>
            </header>
        );
    }
}

export default Header