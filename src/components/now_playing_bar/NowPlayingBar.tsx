import React, { ReactElement, useState } from 'react';
import NowPlayingModal from '../now_playing_modal/NowPlayingModal';

import { genre_list_item_3 } from '../../helper_functions/img_imports';

import './nowPlayingBarStyles.css';

interface Props {}

export default function NowPlayingBar({}: Props): ReactElement {
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        if (modalOpen === true) {
            setModalOpen(false);
        } else {
            setModalOpen(true);
        }
    };

    let normalLayout = (
        <div className="now_playing_bar_container" onClick={toggleModal}>
            <img
                className="now_playing_bar_cover_art"
                src={genre_list_item_3}
                alt="cover art for currently playing song"
            />
            <h3 className="now_playing_bar_track_title">Drip Too Hard</h3>
            <div className="now_playing_bar_icon_container">
                <div className="now_playing_bar_play_icon">▶️</div>
                <div className="now_playing_bar_next_icon">▶️▶️</div>
            </div>
        </div>
    );

    return (
        <div>
            {modalOpen ? (
                <NowPlayingModal setModalOpen={setModalOpen} />
            ) : (
                normalLayout
            )}
        </div>
    );
}
