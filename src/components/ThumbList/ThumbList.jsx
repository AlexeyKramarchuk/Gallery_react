import React from 'react';
import './ThumbList.css'


const ThumbList = ({images, selectImage}) => {
    

    return (
        <div>
            <div className='images'>
              {images.map((image) => (
                <img onClick={()=>selectImage(image.download_url)} key={image.id} src={image.download_url} alt={image.author} />
                  ))}
            </div>
        </div>
    );

};

export default ThumbList;