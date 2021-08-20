import { useState } from 'react';
import Search from './pages/Search';
import NavBar from './components/nav_bar/NavBar';
import NowPlayingBar from './components/now_playing_bar/NowPlayingBar';

import './App.css';

function App() {
    const [currentPage, setCurrentPage] = useState('search');

    return (
        <div className="App">
            {currentPage === 'search' && <Search />}
            <NavBar currentPage={currentPage} setPage={setCurrentPage} />
            <NowPlayingBar />
        </div>
    );
}

export default App;
