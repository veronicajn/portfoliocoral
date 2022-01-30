import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'

import './head.scss';
import {
    Link
} from "react-router-dom";

const Head = () => {
    return (
        <header>
            <div className="container__menu">

                <div className="menus">
                    <div className="container__links">

                        <Link to='/home' className="enlaces"><FontAwesomeIcon icon={faAddressCard} size="1x" className="iconmenu" /> Home</Link>
                        <Link to='/about' className="enlaces"><FontAwesomeIcon icon={faAddressCard} size="1x" className="iconmenu" /> About</Link>
                        <Link to='/projects' className="enlaces"><FontAwesomeIcon icon={faAddressCard} size="1x" className="iconmenu" /> Projects</Link>
                       

                    </div>
                </div>
            </div>
        </header>

    )
}
export default Head;