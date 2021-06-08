import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadPosts} from "./actions";

function Posts(props) {
    const posts = useSelector(state => state.posts);
    const loading =useSelector(state => state.loading)
    const dispatch =useDispatch();

    useEffect(()=>{
        dispatch(loadPosts())
    },[])

    return (
        <div className="posts">
            {loading? 'loading...': (
                posts.map((item, index)=>{
                    return (
                        <div className="post">
                            <h1 className="title">
                                {item.title}
                            </h1>
                            <div className="paragraph">
                                {item.body}
                            </div>
                        </div>
                    )
                })
            )}

        </div>
    );
}

export default Posts;