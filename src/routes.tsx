import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import About from "./pages/About";
import Home from "./pages";
import History from "./pages/History";
import Team from "./pages/Team";
import Location from "./pages/Location";
import Solutions from "./pages/Solutions";
import Machines from "./pages/Machines";
import Notice from "./pages/Notice";
import Library from "./pages/Library";
import Industries from "./pages/Industries";
import News from "./pages/News";
import Contact from "./pages/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/history" element={<History />} />
      <Route path="/team" element={<Team />} />
      <Route path="/location" element={<Location />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/machines" element={<Machines />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/notice" element={<Notice />} />
      <Route path="/library" element={<Library />} />
      <Route path="/news" element={<News />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
);

export default router;
