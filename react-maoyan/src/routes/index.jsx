// 独立配置文件 
import { lazy } from 'react'
import { Routes, Route} from 'react-router-dom'

const Contest = lazy(() => import('../pages/Contest'))
const Home = lazy(() => import('../pages/Home'))
const Movie = lazy(() => import('../pages/Movie'))
const Yanchu = lazy(() => import('../pages/Yanchu'))
const Mine = lazy(() => import('../pages/Mine'))

const RoutesConfig = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/movie" element={<Movie />}></Route>
            <Route path="/yanchu" element={<Yanchu />}></Route>
            <Route path="/contest" element={<Contest />}></Route>
            <Route path="/" element={<Contest />}></Route>
            <Route path="/mine" element={<Mine />}></Route>
        </Routes>
    )
}

export default RoutesConfig