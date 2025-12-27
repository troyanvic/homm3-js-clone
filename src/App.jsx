// import styles
import "@styles/_reset.scss";
import "./App.scss";

// import components
import GameScreen from "@components/GameScreen";

export default function App() {
  return (
    <GameScreen>
      <div className="game-content">
        <h1>Heroes of JavaScript and Magic III</h1>
        <p>800x600 @ 4:3 aspect ratio</p>
      </div>
    </GameScreen>
  );
}
