import React, { useState } from 'react';
import Test2Sub from './Test2Sub';

const Test2 = () => {

    const [color,setColor] = useState()
    const [movie,setMovie] = useState()

    const onColor = (evt) => {
        setColor(evt.target.value)
    }

    const onMovie = (evt) => {
        setMovie(evt.target.value)
    }

    return (
        <div>
            <h2>당신이 좋아하는 색은?</h2>
            <p>
                <input type='text' value={color} onChange={onColor}/><br/>
                <span>pink.tomato.orange.yellow</span>
            </p>
            <h2>당신이 좋아하는 영화는?</h2>
            <p>
                <label>내일의 기억</label>
                <input type='radio' name='movie' value='내일의 기억' 
                onChange={onMovie}/>
            </p>
            <p>
                <label>인터스텔라</label>
                <input type='radio' name='movie' value='인터스텔라' 
                onChange={onMovie}/>
            </p>
            <p>
                <label>스파이더맨</label>
                <input type='radio' name='movie' value='스파이더맨' 
                onChange={onMovie}/>
            </p>
            <p>
                <label>어벤져스</label>
                <input type='radio' name='movie' value='어벤져스' 
                onChange={onMovie}/>
            </p>
            <hr/>
            <Test2Sub color={color} movie={movie}/>
        </div>
    );
};

export default Test2;