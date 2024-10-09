import React, {useEffect, useState} from 'react';

const Post = ({page}) => {
    const [postData, setPostData] = useState({});

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
        </div>
    );
};

export default Post;