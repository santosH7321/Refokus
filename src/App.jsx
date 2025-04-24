import Navbar from "./components/Navbar"
import Products from "./components/Products"
import Stripes from "./components/Stripes"
import Work from "./components/Work"


const App = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 font-['santoshi] text-white">
      <Navbar /> 
      <Work />
      <Stripes />
      <Products />
    </div>
  )
}

export default App 