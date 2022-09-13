

export default function CountryPage({ songs }) {


    return(
        <div>
            <h1>country</h1>
            {songs.map((song)=>
          (song.genre === 'country' ? <div style={{color: 'white'}}>{song.name}</div> : '')
        )}
        </div>
    )
}