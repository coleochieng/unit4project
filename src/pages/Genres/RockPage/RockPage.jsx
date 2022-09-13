

export default function RockPage({ songs }) {
    return(
        <div>
            <h1>rock</h1>
            {songs.map((song)=>
          (song.genre === 'rock' ? <div style={{color: 'white'}}>Rock : {song.name}</div> : '')
        )}
        </div>
    );
}