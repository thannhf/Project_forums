{
    var currentSongIndex = 0;
    var songs = [];
    document.querySelectorAll('#musicList li').forEach(function(li) {
        songs.push({
            id: li.getAttribute('data-id'),
            name: li.getAttribute('data-name'),
            author: li.getAttribute('data-author'),
            path: li.getAttribute('data-path')
        });
    });

    function playMusic(id) {
        var song = songs.find(song => song.id == id);
        if (song) {
            currentSongIndex = songs.indexOf(song);
            document.getElementById('songName').textContent = song.name;
            document.getElementById('songAuthor').textContent = "Nghệ sĩ: " + song.author;
            document.getElementById('audioSource').src = song.path;
            document.getElementById('audioPlayer').style.display = 'block';
            document.getElementById('audioPlayer').load();
            document.getElementById('audioPlayer').play();
        }
    }

    // Phát lại bài hát
    function replaySong() {
        var audio = document.getElementById('audioPlayer');
        audio.currentTime = 0;
        audio.play();
    }

    // Phát bài hát hiện tại
    function playCurrentSong() {
        document.getElementById('audioPlayer').play();
    }

    // Tạm dừng bài hát hiện tại
    function pauseCurrentSong() {
        document.getElementById('audioPlayer').pause();
    }

    // Chuyển sang bài hát trước
    function previousSong() {
        currentSongIndex = (currentSongIndex > 0) ? currentSongIndex - 1 : songs.length - 1;
        playMusic(songs[currentSongIndex].id);
    }

    // Chuyển sang bài hát tiếp theo
    function nextSong() {
        currentSongIndex = (currentSongIndex < songs.length - 1) ? currentSongIndex + 1 : 0;
        playMusic(songs[currentSongIndex].id);
    }
}