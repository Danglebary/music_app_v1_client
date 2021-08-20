import React, { ReactElement } from 'react';

import './listenNowStyles.css';

interface Props {}

export default function ListenNow({}: Props): ReactElement {
    return (
        <div className="listen_now_page_container">
            <div className="page_header_container">
                <h3 className="page_header_title">Listen Now</h3>
            </div>
        </div>
    );
}
