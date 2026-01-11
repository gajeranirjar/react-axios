import "./App.css";
import { Posts } from "./components/Posts";

const App = () => {
    console.log("👌 ~ import.meta.env.VITE_API_URL:", import.meta.env.VITE_API_URL)

  return (
    <section className="main-section">
      <Posts />    
    </section>
  )
}

export default App;



