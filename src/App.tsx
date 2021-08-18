import Search from './pages/Search';
import NavBar from './components/nav_bar/NavBar';
import NowPlayingBar from './components/now_playing_bar/NowPlayingBar';

import './App.css';

function App() {
    return (
        <div className="App">
            <Search />
            <NavBar />
            <NowPlayingBar />
        </div>
    );
}

export default App;
