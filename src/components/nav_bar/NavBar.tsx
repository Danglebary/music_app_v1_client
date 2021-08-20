import { ReactElement } from 'react';

import './navBarStyles.css';

import {
    Nav_library_button,
    Nav_listen_now_button,
    Nav_radio_button,
    Nav_browse_button,
    Search_button_icon
} from '../../helper_functions/img_imports';

interface Props {
    currentPage: String;
    setPage: Function;
}

export default function NavBar({ currentPage, setPage }: Props): ReactElement {
    return (
        <div className="nav_bar_container">
            <div
                className="nav_button_container nav_listen_now_button"
                onClick={() => setPage('listen_now')}
            >
                <Nav_listen_now_button
                    className={
                        currentPage === 'listen_now'
                            ? 'nav_listen_now_button_icon icon active_nav_icon'
                            : 'nav_listen_now_button_icon icon'
                    }
                    viewBox="0 0 200 200"
                    preserveAspectRatio="xMidYMid meet"
                />
                <p
                    className={
                        currentPage === 'listen_now' ? 'active_nav_title' : ''
                    }
                >
                    Listen Now
                </p>
            </div>
            <div
                className="nav_button_container nav_browse_button"
                onClick={() => setPage('browse')}
            >
                <Nav_browse_button
                    className={
                        currentPage === 'browse'
                            ? 'nav_browse_button_icon icon active_nav_icon'
                            : 'nav_browse_button_icon icon'
                    }
                    viewBox="-10 -10 200 200"
                    preserveAspectRatio="xMidYMid meet"
                />
                <p
                    className={
                        currentPage === 'browse' ? 'active_nav_title' : ''
                    }
                >
                    Browse
                </p>
            </div>
            <div
                className="nav_button_container nav_radio_button"
                onClick={() => setPage('radio')}
            >
                <Nav_radio_button
                    className={
                        currentPage === 'radio'
                            ? 'nav_radio_button_icon icon active_nav_icon'
                            : 'nav_radio_button_icon icon'
                    }
                    viewBox="0 -30 200 200"
                    preserveAspectRatio="xMidYMid meet"
                />
                <p
                    className={
                        currentPage === 'radio' ? 'active_nav_title' : ''
                    }
                >
                    Radio
                </p>
            </div>
            <div
                className="nav_button_container nav_library_button"
                onClick={() => setPage('library')}
            >
                <div className="nav_library_icon_container">
                    <Nav_library_button
                        className={
                            currentPage === 'library'
                                ? 'nav_library_button_icon icon active_nav_icon'
                                : 'nav_library_button_icon icon'
                        }
                        viewBox="-24 0 200 200"
                        preserveAspectRatio="xMidYMid meet"
                    />
                </div>
                <p
                    className={
                        currentPage === 'library' ? 'active_nav_title' : ''
                    }
                >
                    Library
                </p>
            </div>
            <div
                className="nav_button_container nav_search_button"
                onClick={() => setPage('search')}
            >
                <div className="nav_search_icon_container">
                    <Search_button_icon
                        className={
                            currentPage === 'search'
                                ? 'nav_search_button_icon icon active_nav_icon'
                                : 'nav_search_button_icon icon'
                        }
                        viewBox="0 0 200 200"
                        preserveAspectRatio="xMidYMid meet"
                    />
                </div>
                <p
                    className={
                        currentPage === 'search' ? 'active_nav_title' : ''
                    }
                >
                    Search
                </p>
            </div>
        </div>
    );
}
