import React from 'react';
import './App.css';
import Post from './components/Post'
import Comments from './components/Comments'
import {comments} from './data/comments'

function App() {


  return (
    <div className="p-2">

      <div className="mx-auto max-w-2xl bg-white rounded-md shadow p-4 space-y-2 divide-y">


        <Post />
  
        {comments.map(item => <Comments username={item.username} userImagePath={item.userImagePath} commentText={item.commentText}
        likeNum={item.likeNum} replies={item.replies} />)}
            
        

      </div>
    </div>
  );
}

export default App;
