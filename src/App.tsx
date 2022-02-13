import { Gallery } from "./components/Gallery"
import { Header } from "./components/Header"
import { Home } from "./components/Home"
import { Statics } from "./components/Statics"
import { GlobalStyle } from "./styles/global"

function App() {
  return (
    <>
      <Header />
      <Home />
      <Gallery />
      <Statics />
      <GlobalStyle />
    </>
  )
}

export default App
