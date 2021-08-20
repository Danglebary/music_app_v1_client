import { useState } from 'react';

// PAGE IMPORTS
import ListenNow from './pages/ListenNow';
import Browse from './pages/Browse';
import Radio from './pages/Radio';
import Library from './pages/Library';
import Search from './pages/Search';
// COMPONENT IMPORTS
import NavBar from './components/nav_bar/NavBar';
import NowPlayingBar from './components/now_playing_bar/NowPlayingBar';

import './App.css';

function App() {
    const [currentPage, setCurrentPage] = useState('search');

    return (
        <div className="App">
            {currentPage === 'listen_now' && <ListenNow />}
            {currentPage === 'browse' && <Browse />}
            {currentPage === 'radio' && <Radio />}
            {currentPage === 'library' && <Library />}
            {currentPage === 'search' && <Search />}
            <NavBar currentPage={currentPage} setPage={setCurrentPage} />
            <NowPlayingBar />
        </div>
    );
}

export default App;
