import "../GenrePage/GenrePage.css";

export default function GenrePage({  }) {
    
    return (
      <div>
        <h1>genres</h1>
        <Link to="/rock"><button className="rock">rock</button></Link>
        <button className="pop">pop</button>
        <button className="hip-hop">hip-hop</button>
        <br />
        <button className="rnb">rnb</button>
        <button className="country">country</button>

      </div>
    );
  }