import Navbar from "../components/Navbar"
import HomePosts from "../components/HomePosts"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>
      <Navbar/>
    <div className="px-8 md:px-[200px] min-h-[80vh]">
    
      <HomePosts/>
      <HomePosts/>
      <HomePosts/>
      <HomePosts/>
      <HomePosts/>
      <HomePosts/>
      <HomePosts/>
      <HomePosts/>
    </div>
    <Footer/>
  </>  
  )
}

export default Home
