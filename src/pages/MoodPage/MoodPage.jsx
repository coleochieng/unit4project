import "../MoodPage/MoodPage.css";

export default function MoodPage({  }) {

    return (
      <div>
        <h1>moods</h1>
        <a href="/charged"><button className="charged">charged</button></a>
        <a href="/romantic"><button className="romantic">romantic</button></a>
        <a href="/playful"><button className="playful">playful</button></a>
        <br />
        <a href="/calm"><button className="calm">calm</button></a>
        <a href="/high"><button className="high">high</button></a>
        <br />
        <a href="/pensive"><button className="pensive">pensive</button></a>
        <a href="/sleepy"><button className="sleepy">sleepy</button></a>
        <a href="/hostile"><button className="hostile">hostile</button></a>
        <br />
        <a href="/melancholic"><button className="melancholic">melancholic</button></a>
        <a href="/positive"><button className="positive">positive</button></a>
        
      </div>
    );
  }