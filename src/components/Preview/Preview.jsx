import React from 'react';
import './Preview.css'


const Preview = ({previewSource}) => {
    return (
        <div className='preview'>
            <img src={previewSource}/>
      
        </div>
    );
};

export default Preview;