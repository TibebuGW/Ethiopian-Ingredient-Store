import Navbar from "../Navbar/Navbar"
import Items from "./Items"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Items className="mt-5 mb-10" />
      <div className="mt-5"></div>
    </div>
  )
}

export default Home