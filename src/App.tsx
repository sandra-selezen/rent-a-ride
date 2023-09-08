import { Suspense, lazy } from "react"
import { Routes, Route } from "react-router-dom"

import { Layout } from "./Layout"
import { Loader } from "./components/Loader/Loader"

const Home = lazy(() => import("./pages/Home"))
const Catalog = lazy(() => import("./pages/Catalog"))
const Favorites = lazy(() => import("./pages/Favorites"))

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App