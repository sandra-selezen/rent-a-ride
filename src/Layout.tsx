import { Suspense } from "react"
import { Navbar } from "./components/Navbar/Navbar"
import { Outlet } from "react-router-dom"
import { Container } from "./components/Container/Container"
import { Loader } from "./components/Loader/Loader"
import { Footer } from "./components/Footer/Footer"

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
      <Footer />
    </>
  )
}
