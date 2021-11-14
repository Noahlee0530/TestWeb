import React, { useEffect, useMemo, useState } from 'react';

const user = [
    {id:1,name:'배수지1'},
    {id:2,name:'아이유'},
    {id:3,name:'신세경'},
    {id:4,name:'유인나'},
    {id:5,name:'dog'},
    {id:6,name:'cat'},
    {id:7,name:'정인선'},
    {id:8,name:'Apple'},
    {id:9,name:'apple'},
    {id:10,name:'samsung'},

]

const Test1 = () => {

    const [text,setText] = useState('')
    const [search,setSearch] = useState('')
    //const [data,setData] = useState(user)

    const onSearch = () => {
        setSearch(text)
    }

    // useEffect(()=>{
    //     setData(user.filter(item=>
    //         item.name.toLocaleLowerCase().includes(
    //             search.toLocaleLowerCase())
    //     ))
    // },[search])
    
    const data = useMemo(()=>{
        return user.filter(item=>
            item.name.toLocaleLowerCase().includes(
                    search.toLocaleLowerCase()))
            
    })

    return (
        <div>
            <input type='text' value={text}
            onChange={evt => setText(evt.target.value)}/>
            <button onClick={onSearch}>검색</button>
            <hr/>
            {
                data.map(item => <p key={item.id}>
                    {item.id} / {item.name}
                </p>)
            }
        </div>
    );
};

export default Test1;



/*
메모니제이션
-useMemo : return 값을 기억
-useCallback : 함수 자체를 기억

useMemo(함수,의존성)
useMemo (()=>,[의존변수])

useCallback (함수,의존성)
useCallback (()=>,[의존변수])


*/