const React = require('react');
const { createRoot } = require('react-dom/client')

const artists = [
	'Sabrina Carpenter',
	'Chloe Moriondo',
	'The Crane Wives'
]

const SongsList = (props) => {
	const {artist, songs, isLoading, error} = props;

  if (!songs) {
    return (
      <p>Loading...</p>
    )
  }

	return (
		<>
		 <h2>{artist}</h2>
		 <ul>
			{songs.map(song => (
				<li key={song} className="cool-style">
					{song}
				</li>
			))}
		 </ul>
		</>
	)
}

const ArtistDropdown = ({artist, setArtist}) => {
	return (
		<>
		<div id="artist-dropdown">
			<select value={artist} onChange={(e) => setArtist(e.target.value)}>
				{artists.map(artist => (
					<option key={artist}>
						{artist}
					</option>
				))}
			</select>
		</div>
		</>
	)
}

const App = () => {
	const [artist, setArtist] = React.useState('Sabrina Carpenter')
  const [songs, setSongs] = React.useSyncExternalStore(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchSongs = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/getSongs');
        const data = await response.json();
      } catch (e) {
        console.error('Error fetching songs');
        setError('Error fetching songs');
      } finally {
        setIsLoading(false);
      };
      fetchSongs().then(songs => {
        setSongs(songs);
      })
    }
  }, []);
  
  const artistSongs = songs ? songs[artist] : null;

	return (
		<>
			<ArtistDropdown artist={artist} setArtist={setArtist}/>
			<SongsList artist={artist} songs={songs[artist]} isLoading error />
		</>
	)
}

const init = () => {
	const appElement = document.getElementById('app');
	const root = createRoot(appElement)
	root.render(<App />);
}

window.onload = init;