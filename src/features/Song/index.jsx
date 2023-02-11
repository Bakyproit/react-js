import React from 'react';
import SongList from './compnents/SongList';

SongFeature.propTypes = {
    
};

function SongFeature(props) {

    const songList = [
        {
            id : 1 ,
            name : 'Nhac cho thu bay' , 
            thumbnailUrl : 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/1/7/5/f1756dd7c13150fed7b25bb87ef21d5d.jpg',
            title : 'EDM khong the thieu cho ngay cuoi tuan'
        },
        {
            id : 2 , 
            name : 'Va the la yeu' , 
            thumbnailUrl : 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/2/c/8/c2c89b57b7cea83c8c1972861a5301a1.jpg' ,
            title :'Gap em mot buoi chieu , thay long thieu thieu' ,
        },
        {
            id : 3 , 
            name : 'Dinh cao Trending' ,
            thumbnailUrl : 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/7/a/8/57a8aacf893bb82891f9ad2ff570a7f6.jpg' ,
            title : 'Chiem tron top Trending khi vua moi ra mat' ,
        }
    ]
    return (
        <div>
            <h2>Cuoi tuan len nhac</h2>
            <SongList songList={songList} />
        </div>
    );
}

export default SongFeature;