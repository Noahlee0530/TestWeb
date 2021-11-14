import React, { useMemo } from 'react';

const getColor = (color) => {
    switch(color){
        case 'pink' : return '분홍'
        case 'tomato' : return '토마토'
        case 'orange' : return '오렌지'
        case 'yellow' : return '노랑'
        default : return '없음'
    }
}

const getMovie = (movie) => {
    switch(movie){
        case '내일의 기억' : return '내일의 기억 영화정보'
        case '인터스텔라' : return '인터스텔라 영화정보'
        case '스파이더맨' : return '스파이더맨 영화정보'
        case '어밴져스' : return '어밴져스 영화정보'
        default : return '없음'
    }
}

const Test2Sub = ({color,movie}) => {

    // const colorInfo = getColor(color)
    // const movieInfo = getMovie(movie)

    const colorInfo = useMemo(()=>getColor(color),[color])
    const movieInfo = useMemo(()=>getMovie(movie),[movie])

    return (
        <div>
            <h4>좋아하는 색은 {color} / {colorInfo}</h4>
            <h4>좋아하는 영화는 {movie} / {movieInfo}</h4>
        </div>
    );
};

export default Test2Sub;