
$('#btn').on('click', function() {
  const targetArtistName = $('#keyword').val();
  const apiKey = 'AIzaSyCJCTqkEK0uRGT0ezseymuDCwVI8lyu3DU'; // youtubeAPIキー
  const requestUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&regionCode=jp&q=${encodeURIComponent(targetArtistName)}&key=${apiKey}`;

  $.getJSON(requestUrl, function(data) {
      console.log(data);
      $('#result').empty(); // 結果をクリア

      const videos = data.items;
      videos.forEach(function(video) {
          const videoId = video.id.videoId;
          const title = video.snippet.title;
          const thumbnailUrl = video.snippet.thumbnails.high.url;
          const channelTitle = video.snippet.channelTitle;

          const videoElement = `
              <div class="video">
                  <img src="${thumbnailUrl}" alt="${title}">
                  <div>
                      <p class="video-title">${title}</p>
                      <p class="channel-title">${channelTitle}</p>
                      <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">視聴する</a>
                  </div>
              </div>`;
          $("#result").append(videoElement);
      });
  });
});