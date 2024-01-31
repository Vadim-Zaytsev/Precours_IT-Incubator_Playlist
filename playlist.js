const playlistOne = {
    name: 'My Playlist',
    coverImage: 'img/3.jpg',
    tracks: [
        {
            title: 'Self Control',
            artist: 'Bebe Rexha',
            duration: '00:02:54',
            image: 'img/1.jpg',
            audio: 'audio/Bebe_Rexha_-_Self_Control.mp3',
            id: 1,
        },
        {
            title: 'Bambola',
            artist: 'Betta Lemme',
            duration: '00:03:32',
            image: 'img/2.jpg',
            audio: 'audio/Betta_Lemme_-_Bambola.mp3',
            id: 2,
        },
    ],
};

// render

function renderPlaylist(playlistForRendering) {
    renderPlaylistHeader(playlistForRendering);
    renderTrack(playlistForRendering.tracks[0]);
    renderTrack(playlistForRendering.tracks[1]);
}

function renderPlaylistHeader(inputPlaylistForRendering) {
    // здесь логика отрисовки шапки "входного" плейлиста
    const titleElement = document.createElement('h1');
    titleElement.textContent = inputPlaylistForRendering.name;
    document.body.append(titleElement);

    const imgElement = document.createElement('img');
    imgElement.src = inputPlaylistForRendering.coverImage;
    document.body.append(imgElement);

    const infoElement1 = document.createElement('p');
    infoElement1.innerText = `${inputPlaylistForRendering.tracks.length} tracks`;
    document.body.append(infoElement1);

    const infoElement2 = document.createElement('p');
    infoElement2.innerText = `${inputPlaylistForRendering.tracks[0].artist}, ${inputPlaylistForRendering.tracks[1].artist}`;
    document.body.append(infoElement2);
}
function renderTrack(inputTrackForRendering) {
    // здесь логика отрисовки "входного" трека
    const imgElement = document.createElement('img');
    imgElement.src = inputTrackForRendering.image;

    const titleElement = document.createElement('h3');
    titleElement.textContent = `${inputTrackForRendering.artist} - ${inputTrackForRendering.title}`;

    const audioElement = document.createElement('audio');
    audioElement.src = inputTrackForRendering.audio;
    audioElement.controls = true;

    const playlistElement = document.createElement('ul');
    document.body.append(playlistElement);

    const trackElement = document.createElement('li');
    trackElement.append(imgElement, titleElement, audioElement);

    playlistElement.append(trackElement, trackElement);
}

renderPlaylist(playlistOne);

