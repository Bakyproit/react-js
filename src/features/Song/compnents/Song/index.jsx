import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss' ;

Song.propTypes = {
    song  : PropTypes.object.isRequired ,
};

function Song({song}) {
    return (
        <div className='song'>
            <div className='song__thumbnail'>
                <img src={song.thumbnailUrl} alt={song.name} />
            </div>
            <p className='song__name'>{song.name}</p>
            <p className='song__title'>{song.title}</p>
        </div>
    );
}

export default Song;