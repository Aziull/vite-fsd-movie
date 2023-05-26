import { MediaId } from "@/entities/media/model/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mediaVideoApi } from "../api/mediaVideoApi";

type VideoState = {
    volume: number;
    playbackRate: number;
    currentTime: number;
    lastWatchedEpisode: number;
    title: string;
    videoFile: string;
};

type MediaState = {
    type: string;
    videos: VideoState[];
};

type State = Record<MediaId, MediaState>;

const initialState: State = {};

function videoReducerFactory<K extends keyof VideoState, V extends VideoState[K]>(key: K) {
    return (state: State, action: PayloadAction<{ mediaId: MediaId; value: V; index: number }>) => {
        const { mediaId, value, index } = action.payload;
        if (!state[mediaId]) state[mediaId] = { type: "Movie", videos: [] };
        state[mediaId].videos[index][key] = value;
    };
}


export const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        setVolume: videoReducerFactory<"volume", number>("volume"),
        setPlaybackRate: videoReducerFactory<"playbackRate", number>("playbackRate"),
        setCurrentTime: videoReducerFactory<"currentTime", number>("currentTime"),
        setLastWatchedEpisode: videoReducerFactory<"lastWatchedEpisode", number>("lastWatchedEpisode"),
        setType: (state, action: PayloadAction<{ mediaId: MediaId; type: string }>) => {
            const { mediaId, type } = action.payload;
            if (!state[mediaId]) state[mediaId] = { type: "Movie", videos: [] };
            state[mediaId].type = type;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            mediaVideoApi.endpoints.getMovieVideo.matchFulfilled,
            (state, action) => {
                const { mediaId, videos } = action.payload;
                if (!state[mediaId]) {
                    state[mediaId] = { type: '', videos: [] };
                }
                for (const video of videos) {
                    const { title, videoFile } = video;
                    state[mediaId].videos.push({
                        title,
                        videoFile,
                        volume: 1,
                        playbackRate: 1,
                        currentTime: 0,
                        lastWatchedEpisode: 0,
                    });
                }
            }
        );
    },
});

export const { setVolume, setPlaybackRate, setCurrentTime, setLastWatchedEpisode, setType } = videoSlice.actions;
