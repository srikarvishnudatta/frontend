import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import Blogs from "./pages/Blogs"
import Projects from "./pages/Projects"
import BlogPage from "./pages/BlogPage"
import ProjectPage from "./pages/ProjectPage"


function App() {

 return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/blogs" element={<Blogs />}/>
        <Route path="/blogs/:blogid" element={<BlogPage />}/>
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectid" element={<ProjectPage />}/>
      </Route>
    </Routes>
 )
}

export default App
