import './assets/scss/style.scss'

import Hero from "./components/content/Hero/Index"
import SignUp from "./components/content/SignUp/Index"
import Footer from "./components/ui/Footer/Index"
import Header from "./components/ui/Header/Index"

function App() {

  return (
    <>
      <Header/>
        <main className="all-content">
          <SignUp/>
          <Hero />
        </main>
      <Footer/>
    </>
  )
}

export default App
