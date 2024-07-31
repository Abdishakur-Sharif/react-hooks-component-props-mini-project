import React from "react";
import Article from "./Article";

function ArticleList({posts}){
   return(
     <main>
      {posts.map((posts, id) => (
        <Article key={id} title={posts.title} date={posts.date} preview={posts.preview}/>
      ))}
    </main>
   )
}

export default ArticleList