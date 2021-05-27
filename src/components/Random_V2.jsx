import React, { useState } from 'react'

import useGif from '../useGif';

const Random = () => {
    const { gif, fetchGif } = useGif(tag);

    return (
        <div className="container">
            <h1>Random {tag} Gif</h1>
            <img width="500" src={gif} alt="Random Gif" />
            <button onClick={fetchGif}>CLICK FOR NEW</button>
        </div>
    )
}

export default Random;
