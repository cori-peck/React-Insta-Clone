import React from 'react';
import * as Icon from 'react-feather';
import './SearchBar.css';

function SearchBar() {
    return (
        <div className="sbContainer">
            <div className="sbLT">
                <Icon.Instagram className="instaIcon" />
                <img className="logo" src="https://fontmeme.com/images/instagram-new-logo.png" alt="Instagram Cursive Logo" />
            </div>
            <div>
                <form>
                    <input className="sbSearch" type="text" placeholder="🔍 Search" />
                </form>
            </div>
            <div className="sbRT">
                <Icon.Compass className="navIcons" />
                <Icon.Heart className="navIcons" />
                <Icon.User className="navIcons" />
            </div>
        </div>
    )
}


export default SearchBar