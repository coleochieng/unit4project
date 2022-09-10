import "../MoodPage/MoodPage.css";

export default function MoodPage({  }) {

    return (
      <div>
        <h1>moods</h1>
        <button className="charged">charged</button>
        <button className="romantic">romantic</button>
        <button className="playful">playful</button> 
        <br />
        <button className="calm">calm</button>
        <button className="high">high</button>
        <br />
        <button className="pensive">pensive</button>
        <button className="sleepy">sleepy</button>
        <button className="hostile">hostile</button>
        <br />
        <button className="melancholic">melancholic</button>
        <button className="positive">positive</button>
        
      </div>
    );
  }