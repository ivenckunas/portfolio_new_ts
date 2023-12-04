function Spotify() {
	// const playlistId = '0T68tWMwI3wyQB5sBkSSoq';
	return (
		<iframe
			title='Spotify Embed: Recommendation Playlist '
			src={`https://open.spotify.com/embed/playlist/0T68tWMwI3wyQB5sBkSSoq?utm_source=generator&theme=0`}
			width='100%'
			height='100%'
			style={{minHeight: '100px'}}
			frameBorder='0'
			allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
			loading='lazy'
		/>
	);
}

export default Spotify;
