import React from 'react';
import Arrows from "../Arrows/Arrows";


const Preview = ({previewSource}) => {
    return (
        <div>
            <img src={previewSource}/>
      
        </div>
    );
};

export default Preview;