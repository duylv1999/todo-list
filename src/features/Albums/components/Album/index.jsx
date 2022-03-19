import React from 'react';
import './style.scss'

function Album({ album }) {
    return (
        <div className="album">
            <div className="album__thumbnail">
                <img src={album.thumbnail} alt={album.title} />
            </div>
            <h3 className="album__title">{album.title}</h3>
            <p className="album__singer">{album.singer}</p>
        </div>
    );
}

export default Album;