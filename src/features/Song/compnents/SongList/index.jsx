import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss' ;
import Song from '../Song';

SongList.propTypes = {
    songList : PropTypes.array.isRequired , 
};

function SongList({songList}) {
    return (
        <ul className='song-list'>
            {songList.map(song =>(
                <li key={song.id}>
                    <Song song ={song} />
                </li>
            ))}      
        </ul>
    );
}

export default SongList;