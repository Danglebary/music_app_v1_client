import React, { ReactElement, useState } from 'react';

import { genre_list_item_3 } from '../../helper_functions/img_imports';
import './nowPlayingModalStyles.css';

interface Props {
    setModalOpen: Function;
}

export default function NowPlayingModal({ setModalOpen }: Props): ReactElement {
    const [isPlaying, setIsPlaying] = useState(false);

    const toggle_modal = () => {
        setModalOpen(false);
    };

    const toggle_playing = () => {
        if (!isPlaying) {
            setIsPlaying(true);
        } else {
            setIsPlaying(false);
        }
    };

    return (
        <div className="modal_container">
            <div className="modal_close_button" onClick={toggle_modal}>
                x
            </div>
            <img
                className="cover_art"
                src={genre_list_item_3}
                alt="cover art for currently playing track"
            />
            <div className="modal_info_container">
                <div className="modal_info_main">
                    <div className="modal_info_text">
                        <h3 className="track_title">Drip Too Hard</h3>
                        <p className="track_artist">Gunna & Lil Baby</p>
                    </div>
                    <div className="more_button">ℹ️</div>
                </div>
                <div className="progress_bar"> progress bar</div>
            </div>
            <div className="music_controls_container">
                <div className="music_controls_main">
                    <div className="music_controls_prev_button">⏪</div>
                    {!isPlaying ? (
                        <div
                            className="music_controls_play_button"
                            onClick={toggle_playing}
                        >
                            ▶️
                        </div>
                    ) : (
                        <div
                            className="music_controls_pause_button"
                            onClick={toggle_playing}
                        >
                            ⏸
                        </div>
                    )}
                    <div className="music_controls_next_button">⏩</div>
                </div>
                <div className="volume_bar_container">
                    <div className="volume_min_icon">🔈</div>
                    <div className="volume_slider">slider</div>
                    <div className="volume_max_icon">🔊</div>
                </div>
                <div className="extra_buttons_container">
                    <div className="lyrics_button">📝</div>
                    <div className="share_button">📡</div>
                    <div className="queue_button">📜</div>
                </div>
            </div>
        </div>
    );
}
