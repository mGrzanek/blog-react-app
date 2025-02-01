import { Routes, Route } from 'react-router-dom';
import Home from "./components/pages/Home/Home.js";
import About from "./components/pages/About/About.js";
import Post from "./components/pages/Post/Post.js";
import AddPost from "./components/pages/AddPost/AddPost.js";
import EditPost from "./components/pages/EditPost/EditPost.js";
import NotFound from './components/pages/NotFound/NotFound.js';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/add" element={<AddPost />} />
        <Route path="/post/edit/:id" element={<EditPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
