import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/views/Header/Header.js';
import Home from "./components/pages/Home/Home.js";
import About from "./components/pages/About/About.js";
import Post from "./components/pages/Post/Post.js";
import AddPost from "./components/pages/AddPost/AddPost.js";
import EditPost from "./components/pages/EditPost/EditPost.js";
import Categories from './components/pages/Categories/Categories.js';
import Category from './components/views/Category/Category.js';
import NotFound from './components/pages/NotFound/NotFound.js';
import Footer from './components/views/Footer/Footer.js';

const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/add" element={<AddPost />} />
        <Route path="/post/edit/:id" element={<EditPost />} />
        <Route path="/categories" element={<Categories />} />
        <Route path='/categories/:category' element={<Category />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
