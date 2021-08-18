import React, { ReactElement } from 'react';

import { pic_3 } from '../../helper_functions/img_imports';

import './nowPlayingBarStyles.css';

interface Props {}

export default function NowPlayingBar({}: Props): ReactElement {
    return (
        <div className="now_playing_bar_container">
            <img
                className="now_playing_bar_cover_art"
                src={pic_3}
                alt="cover art for currently playing song"
            />
            <h3 className="now_playing_bar_track_title">Drip Too Hard</h3>
            <div className="now_playing_bar_icon_container">
                <div className="now_playing_bar_play_icon">▶️</div>
                <div className="now_playing_bar_next_icon">▶️▶️</div>
            </div>
        </div>
    );
}
