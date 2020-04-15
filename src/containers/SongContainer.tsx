import React, { useState, useEffect } from "react";
import { loadSong } from "./actions";
import { Song as ISong } from "./types";
import { useParams } from "react-router-dom";
import { Song } from "../components";

interface SongContainerParams {
    id: string;
}

export const SongContainer: React.FC<{}> = () => {
    const [song, setSong] = useState<ISong>();
    const { id } = useParams<SongContainerParams>();

    useEffect(() => {
        loadSong(id).then((values: ISong) => {
            setSong(values);
        });
    }, [id]);

    return <>{song && <Song song={song} />}</>;
};
