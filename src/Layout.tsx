import { Suspense } from "react"
import { Navbar } from "./components/Navbar/Navbar"
import { Outlet } from "react-router-dom"

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  )
}
