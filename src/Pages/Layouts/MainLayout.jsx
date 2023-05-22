import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header"

export const MainLayout = () => {
  return (
    <>
        <Header />
        <main >
          <Outlet />
        </main>
        {/* footer goes here */}
    </>
  )
}
