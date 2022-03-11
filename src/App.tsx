import { BestArtists } from "./components/BestArtists"
import { Footer } from "./components/Footer"
import { Gallery } from "./components/Gallery"
import { Header } from "./components/Header"
import { Home } from "./components/Home"
import { Popular } from "./components/Popular"
import { Statics } from "./components/Statics"
import { GlobalStyle } from "./styles/global"


function App() {
  return (
    <>
      <Header />
      <Home />
      <Gallery />
      <Statics />
      <Popular />
      <BestArtists />
      <GlobalStyle />
      <Footer />
    </>
  )
}

export default App
