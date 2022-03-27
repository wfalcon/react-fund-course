import React, { useState } from "react";
// import Counter from "./components/Counter";
import Postitem from "./components/PostItem";
import PostList from "./components/PostList";
import './styles/App.css'
import MyButton from "./components/UI/button/MyButton";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Python', body: 'Description' },
    { id: 3, title: 'Java', body: 'Description' },
  ])

  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Название поста" />
        <input type="text" placeholder="Описание поста" />
        <MyButton>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов" />
    </div>
  );
}

export default App;
