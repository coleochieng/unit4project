import "../GenrePage/GenrePage.css";


export default function GenrePage({  }) {
    
    return (
      <div>
        <h1>genres</h1>
        <a href="/rock"><button className="rock">rock</button></a>
        <a href="/pop"><button className="pop">pop</button></a>
        <a href="/hip-hop"><button className="hip-hop">hip-hop</button></a>
        <br />
        <a href="/rnb"><button className="rnb">rnb</button></a>
        <a href="/country"><button className="country">country</button></a>

      </div>
    );
  }