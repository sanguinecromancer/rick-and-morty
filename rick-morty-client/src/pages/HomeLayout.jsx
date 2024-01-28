
import { Outlet, ScrollRestoration } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <ScrollRestoration/>
      <Outlet />
    </div>
  )
}
export default HomeLayout;