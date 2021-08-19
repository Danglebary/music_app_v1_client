import { ReactElement } from 'react';

import './navBarStyles.css';

import {
    Nav_library_button,
    Nav_listen_now_button,
    Nav_radio_button,
    Nav_browse_button,
    Search_button_icon
} from '../../helper_functions/img_imports';

interface Props {}

export default function NavBar({}: Props): ReactElement {
    return (
        <div className="nav_bar_container">
            <div className="nav_button_container nav_listen_now_button">
                <Nav_listen_now_button
                    className="nav_listen_now_button_icon icon"
                    viewBox="0 0 200 200"
                    preserveAspectRatio="xMidYMid meet"
                />
                <p>Listen Now</p>
            </div>
            <div className="nav_button_container nav_browse_button">
                <Nav_browse_button
                    className="nav_browse_button_icon icon"
                    viewBox="-10 -10 200 200"
                    preserveAspectRatio="xMidYMid meet"
                />
                <p>Browse</p>
            </div>
            <div className="nav_button_container nav_radio_button">
                <Nav_radio_button
                    className="nav_radio_button_icon icon"
                    viewBox="0 -30 200 200"
                    preserveAspectRatio="xMidYMid meet"
                />
                <p>Radio</p>
            </div>
            <div className="nav_button_container nav_library_button">
                <div className="nav_library_icon_container">
                    <Nav_library_button
                        className="nav_library_button_icon icon"
                        viewBox="-24 0 200 200"
                        preserveAspectRatio="xMidYMid meet"
                    />
                </div>
                <p>Library</p>
            </div>
            <div className="nav_button_container nav_search_button">
                <div className="nav_search_icon_container">
                    <Search_button_icon
                        className="nav_search_button_icon icon"
                        viewBox="0 0 200 200"
                        preserveAspectRatio="xMidYMid meet"
                    />
                </div>
                <p>Search</p>
            </div>
        </div>
    );
}
