import { Outlet } from "react-router-dom";
import Header from "./Header";

function RootLayout() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh_-_474px)]">
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
