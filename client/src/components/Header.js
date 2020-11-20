import React from 'react';
import { Avatar } from '@material-ui/core'
import { Search, Language, ExpandMore } from '@material-ui/icons'
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <img
                className="header__icon"
                src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                alt="airbnb logo"
            />
            <div className="header__center">
                <input type="text" />
                <Search />
            </div>
            <div className="header__right">
                <p>Beacome a host</p>
                <Language />
                <ExpandMore />
                <Avatar />
            </div>
        </div>
    )
}
export default Header;