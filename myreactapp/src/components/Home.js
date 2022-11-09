import Game from '../Game';
import './Home.css';

function Home() {
    console.log("render home")
    return (
        <div className="center">
            <Game/>
        </div>
    );
}

export default Home;