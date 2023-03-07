import React, { useState, useEffect } from 'react';


const Images = () => {

    const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://picsum.photos/v2/list?limit=30');
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchImages();
  }, []);
    

    return (
        <div>
            <h1>Random Images</h1>
            <div className='images'>
              {images.map((image) => (
                <img key={image.id} src={image.download_url} alt={image.author} />
                  ))}
            </div>
        </div>
    );
};

export default Images;