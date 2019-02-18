import React from 'react';
import * as Icon from 'react-feather';

function SearchBar() {
    return (
        <div>
            <div>
                <Icon.Instagram />
                <img src="https://fontmeme.com/images/instagram-new-logo.png" alt="Instagram Cursive Logo" />
            </div>
            <div>
                <form>
                    <input type="text" placeholder="🔍 Search" />
                </form>
            </div>
            <div>
                <Icon.Compass />
                <Icon.Heart />
                <Icon.User />
            </div>
        </div>
    )
}


export default SearchBar