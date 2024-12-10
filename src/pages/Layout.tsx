import { NavLink, NavLinkRenderProps, Outlet } from "react-router-dom";

const Layout = () => {
  const listClassName = "my-1 bg-slate-400 cursor-pointer";

  const getClassName = (navInfo: NavLinkRenderProps) => {
    return `cursor-pointer min-h-full min-w-full block p-2 ${navInfo.isActive ? "bg-green-400" : "bg-slate-400"}`;
  };

  return (
    <div className="h-screen">
      {/* <Header className="bg-gray-200 sticky top-0" /> */}

      <div className="flex h-[calc(100vh-theme(spacing.20))]">
        <nav className="min-w-[200px] w-[20%] bg-gray-300">
          <ul className="p-4">
            <li className={listClassName}>
              <NavLink to="/" className={getClassName}>
                Home
              </NavLink>
            </li>

            <li className={listClassName}>
              <NavLink to="/profile" className={getClassName}>
                Profile
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="w-full max-h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
