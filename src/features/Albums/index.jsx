import React from 'react';
import AlbumLists from './components/AlbumLists';

function AlbumFeature() {

    const albumList = [
        {
            id: 1,
            thumbnail: 'https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/d/6/e/6/d6e6201323fed8fb16886a3f428fc4f7.jpg',
            title: 'Túp Lều Vàng',
            singer: 'Nguyễn Đình Vũ, ACV'
        },
        {
            id: 2,
            thumbnail: 'https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/6/8/9/b/689b9f49c7ceb4ca4dc326571bba4e2a.jpg',
            title: 'Lựa Chọn Của Anh',
            singer: 'Thương Võ, ACV'
        },
        {
            id: 3,
            thumbnail: 'https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/4/7/7/5/47755662b9802742229217de267b24fe.jpg',
            title: 'Những Lời Dối Gian',
            singer: 'Vicky Nhung'
        }
    ]

    return (
        <>
            <AlbumLists albumList={albumList} />
        </>
    );
}

export default AlbumFeature;