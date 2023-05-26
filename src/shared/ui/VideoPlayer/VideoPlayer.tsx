import React, { useRef, useState } from 'react';
import './index.scss'

interface VideoPlayerProps {
    src: string;
    hasNextVideo?: boolean;
    hasPreviousVideo?: boolean;
    onNextVideo?: () => void;
    onPreviousVideo?: () => void;
}

const VideoPlayer = ({ src, hasNextVideo, hasPreviousVideo, onNextVideo = () => { }, onPreviousVideo = () => { } }: VideoPlayerProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const [selectedOption, setSelectedOption] = useState('1');

    const handleClick = () => {
        const video = videoRef.current;
        if (!video) return;
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    };

    const playVideo = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const pauseVideo = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (videoRef.current) {
            videoRef.current.volume = parseFloat(e.target.value);
        }
    };

    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    const handleQualityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (videoRef.current) {
            handleOptionChange(e);
            videoRef.current.playbackRate = parseFloat(e.target.value);
        }
    };

    const handlePip = () => {
        if (document.pictureInPictureEnabled && videoRef.current) {
            if (document.pictureInPictureElement) {
                document.exitPictureInPicture();
            } else {
                videoRef.current.requestPictureInPicture();
            }
        }
    };

    const handleFullscreen = () => {
        if (videoRef.current) {
            if (videoRef.current.requestFullscreen) {
                if (isFullscreen) {
                    document.exitFullscreen();
                } else {
                    videoRef.current.requestFullscreen({ navigationUI: 'hide' });
                }
                setIsFullscreen(!isFullscreen);
            }
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
            setDuration(videoRef.current.duration);
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {

        if (videoRef.current) {
            const seekTime = parseFloat(e.target.value);
            videoRef.current.currentTime = seekTime;
            setCurrentTime(seekTime);
        }
    };

    const handleNextVideo = () => {
        if (hasNextVideo) {
            onNextVideo();
        }
    };

    const handlePreviousVideo = () => {
        if (hasPreviousVideo) {
            onPreviousVideo();
        }
    };

    return (
        <div className="video-container">
            <video
                ref={videoRef}
                src={src}
                controls={false}
                onClick={handleClick}
                onTimeUpdate={handleTimeUpdate}
                onLoadedData={handleTimeUpdate}
            />
            <div className="video-controls">
                <button onClick={playVideo}>Play</button>
                <button onClick={pauseVideo}>Pause</button>
                <input type="range" min="0" max="1" step="0.1" onChange={handleVolumeChange} />
                <select value={selectedOption} onChange={handleQualityChange} >
                    <option value="0.5">0.5x</option>
                    <option value="1">1x</option>
                    <option value="1.5">1.5x</option>
                    <option value="2">2x</option>
                </select>
                <button onClick={handlePip}>PiP</button>
                <button onClick={handleFullscreen}>{isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}</button>
                {hasPreviousVideo && <button onClick={handlePreviousVideo}>Previous</button>}
                {hasNextVideo && <button onClick={handleNextVideo}>Next</button>}
                <input
                    type="range"
                    min="0"
                    max={duration}
                    value={currentTime}
                    onChange={handleSeek}
                />
            </div>


        </div>
    );
}

export default VideoPlayer;
