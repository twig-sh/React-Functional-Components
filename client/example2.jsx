const React = require('react');
const { createRoot } = require('react-dom/client')

const artists = [
	'Sabrina Carpenter',
	'Chloe Moriondo',
	'The Crane Wives'
]

const songs = {
	'Sabrina Carpenter': ['Please Please Please', 'Nonsense', 'Espresso'],
	'Chloe Moriondo': ['Bugbear', 'Manta Rays', 'Spirit Orb'],
	'The Crane Wives': ['The Moon Will Sing', 'Never Love an Anchor', 'Curses']

}

const SongsList = (props) => {
	const {artist, songs} = props;

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

	return (
		<>
			<ArtistDropdown artist={artist} setArtist={setArtist}/>
			<SongsList artist={artist} songs={songs[artist]} />
		</>
	)
}

const init = () => {
	const appElement = document.getElementById('app');
	const root = createRoot(appElement)
	root.render(<App />);
}

window.onload = init;