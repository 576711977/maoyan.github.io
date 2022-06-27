import { Suspense } from 'react'
import Footer from './components/Footer'
import RoutesConfig from './routes'

function App() {

  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/movie" element={<Movie />}></Route>
        <Route path="/yanchu" element={<Yanchu />}></Route>
        <Route path="/contest" element={<Contest />}></Route>
        <Route path="/" element={<Contest />}></Route>
        <Route path="/mine" element={<Mine />}></Route>
      </Routes> */}
      <Suspense fallback={<div>loading...</div>}>
        <RoutesConfig />
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
