import React, { ReactElement } from 'react';

import './navBarStyles.css';

interface Props {}

export default function NavBar({}: Props): ReactElement {
    return (
        <div className="nav_bar_container">
            <div className="nav_button_container nav_listen_now_button">
                <div>1️⃣</div>
                <p>Listen Now</p>
            </div>
            <div className="nav_button_container nav_browse_button">
                <div>2️⃣</div>
                <p>Browse</p>
            </div>
            <div className="nav_button_container nav_radio_button">
                <div>3️⃣</div>
                <p>Radio</p>
            </div>
            <div className="nav_button_container nav_library_button">
                <div>4️⃣</div>
                <p>Library</p>
            </div>
            <div className="nav_button_container nav_search_button">
                <div>🔍</div>
                <p>Search</p>
            </div>
        </div>
    );
}
