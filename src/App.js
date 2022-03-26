import React, { useState } from "react";
// import Counter from "./components/Counter";
import Postitem from "./components/PostItem";
import PostList from "./components/PostList";
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Python', body: 'Description' },
    { id: 3, title: 'Java', body: 'Description' },
  ])
  const [posts2, setPosts2] = useState([
    { id: 1, title: 'Javascript 2', body: 'Description' },
    { id: 2, title: 'Python 2', body: 'Description' },
    { id: 3, title: 'Java 2', body: 'Description' },
  ])

  return (
    <div className="App">
      <PostList posts={posts} title="Список постов" />
      <PostList posts={posts2} title="Список постов 1" />
    </div>
  );
}

export default App;
