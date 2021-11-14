import React, { useCallback, useState } from 'react';

const Test3 = () => {

    const [count,setCount] = useState(1)

    const ran = Math.random()

    console.log('test')

    const increment = useCallback(() => {
        console.log(ran)
        setCount(count + 1)
    },[count])

    const decrement = useCallback(() => {
        console.log(ran)
        setCount(count - 1)
    },[count])

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>증가</button>
            <button onClick={decrement}>감소</button>
        </div>
    );
};

export default Test3;