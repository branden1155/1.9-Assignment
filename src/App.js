import './App.css';
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboardPage/Dashboard'
import Profile from './pages/profilePage/profile'
import Post from './pages/postPage/post'
import Header from './components/headerComponent/header'
import BlogpageOne from './pages/blogPages/blogpageOne'
import BlogpageTwo from './pages/blogPages/blogpageTwo'
import BlogpageThree from './pages/blogPages/blogpageThree'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='Home' element={<Dashboard />} />
        <Route path='Profile' element={<Profile />} />
        <Route path='Post' element={<Post />} />
        <Route path='BlogpageOne' element={<BlogpageOne />} />
        <Route path='BlogpageTwo' element={<BlogpageTwo />} />
        <Route path='BlogpageThree' element={<BlogpageThree />} />
      </Routes>
    </div>
  );
}

export default App;
