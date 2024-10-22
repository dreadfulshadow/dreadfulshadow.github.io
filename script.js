const videosData = {
    1: ['1.mp4', '2.mp4'],
    2: ['video3.mp4', 'video4.mp4'],
    3: ['video5.mp4', 'video6.mp4'],
    4: ['video7.mp4', 'video8.mp4']
};

function changePage(pageNumber) {
    const videoElements = document.querySelectorAll('video');
    const videoSources = videosData[pageNumber];

    videoElements.forEach((video, index) => {
        const source = video.querySelector('source');
        video.pause();
        source.src = videoSources[index];
        video.load();
    });
}

// 禁用右键菜单以防止下载
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// 禁用视频下载按钮
document.querySelectorAll('video').forEach(video => {
    video.controlsList = 'nodownload';
});

// 优化视频播放：预加载和缓存策略
document.addEventListener('DOMContentLoaded', function() {
    const allVideos = document.querySelectorAll('video');

    allVideos.forEach(video => {
        video.setAttribute('preload', 'auto'); // 预加载视频以减少卡顿
    });
});
