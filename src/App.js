import React, { useState } from "react";
import PostList from "./components/PostList";
import './styles/App.css'
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Python', body: 'Description' },
    { id: 3, title: 'Java', body: 'Description' },
  ])

  return (
    <div className="App">
      <form>
        <MyInput type="text" placeholder="Название поста" />
        <MyInput type="text" placeholder="Описание поста" />
        <MyButton>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов" />
    </div>
  );
}

export default App;
