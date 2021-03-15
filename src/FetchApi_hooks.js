import React, { useState, useEffect } from 'react';

const FetchApi_hooks = () => {
    const [state, setState] = useState({
        email: '',
        picture: '',
    })
    useEffect(() => {
        fetch('https://randomuser.me/api/')
            .then(rs => rs.json())
            .then(data => {
                const [user] = data.results;
                setState({
                    email: user.email,
                    picture: user.picture.medium,
                });
            });
    }, []);

    // 第二個參數是陣列[]，拿來比較前一次與這一次的值是否有變動，

    // 如果變動 執行useEffect前一個參數的函式

    // 如果沒變 就不執行useEffect前一個參數的函示

    // 所以如果給空陣列，只會在第一次render時執行，即取代componentDidMount

    const { email, picture } = state
    return (
        <div>
            <img src={picture} alt="" />
            <h3>{email}</h3>
        </div>
    );

}

export default FetchApi_hooks;