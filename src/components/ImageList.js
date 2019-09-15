import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = props => {
    const images = props.images.map(cur => {
        return <ImageCard key={cur.id} image={cur} />;
    });

    return (
        <div className="image-list">{images}</div>
    );
}

export default ImageList;