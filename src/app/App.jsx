import './styles/index.less';
import TournamentList from "../components/TournamentList/TournamentList";
import {useEffect, useRef, useState} from "react";
import Spinner from "../ui/Spinner/Spinner";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import PlayerInfo from "../components/PlayerInfo/PlayerInfo";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [tournaments, setTournaments] = useState([]);
  const timerRef = useRef()

  useEffect(() => {
    setIsLoading(true)
    timerRef.current = setTimeout(() => {
      fetch('/data.json')
        .then(response => response.json())
        .then(data => {
          setTournaments(data);
          setIsLoading(false)
        })
        .catch(error => {
          console.error('Ошибка:', error);
          setIsLoading(false)
        });
    }, 2500)

    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <div className="app">
      <div className="content-page">
        <div className="header">
          <h1 className="title">Poker</h1>
          <div className="spinner">
            {isLoading ? <Spinner  /> : null}
          </div>
          <PlayerInfo />
          <ProgressBar/>
        </div>
        <TournamentList tournaments={tournaments}/>
      </div>
    </div>
  );
}

export default App;
