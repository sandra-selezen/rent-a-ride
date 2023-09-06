import { Suspense } from "react"
import { Navbar } from "./components/Navbar/Navbar"
import { Outlet } from "react-router-dom"
import { Container } from "./components/Container/Container"

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  )
}
