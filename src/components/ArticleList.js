import React from "react";
import Article from "./Article";

export default function ArticleList({posts}){
    const allPost = posts.map(post => {
        return <Article
         key={post.id}
         title={post.title} 
         date={post.date}
         preview={post.preview}
         time={post.minutes}>
        </Article>
    })
    return(
        <main>
            {allPost}
        </main>
    )
}