import React, {useContext, useEffect, useState} from 'react';
import {ThemeContext} from "./providers/Theme";

const Post = ({page}) => {
    const [postData, setPostData] = useState({});
    const {theme, setTheme} = useContext(ThemeContext);

    useEffect(() => {
        setTimeout(() => fetch(`https://jsonplaceholder.typicode.com/posts/${page}`)
            .then(response => response.json())
            .then(json => setPostData(json)), 500);


        return () => {
            setPostData({title: '...', body: "...", id: 0})
        }
    }, [page]);
    return (
        <div>
            <h1>{postData.title}</h1>
            <p>{postData.body}</p>
            <p>ID: {postData.id}</p>
            <p>Поточна тема: {theme}</p>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                Переключити тему
            </button>
        </div>
    );
};

export default Post;