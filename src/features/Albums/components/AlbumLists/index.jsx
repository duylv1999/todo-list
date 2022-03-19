import React from 'react';
import Album from '../Album';
import './style.scss'

function AlbumLists({ albumList }) {

    return (
        <ul className="album_list">
            {albumList.map(album => (
                <li key={album.id}>
                    <Album album={album} />
                </li>
            ))}
        </ul>
    );
}

export default AlbumLists;