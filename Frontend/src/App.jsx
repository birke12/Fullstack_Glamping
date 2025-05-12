import { useLocation, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Minliste from "./pages/minliste";
import Ophold from "./pages/Ophold";
import Aktiviter from "./pages/Aktiviter";
import Backoffice from "./pages/Backoffice";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";
import InfoStay from "./pages/InfoStay";
import Footer from "./components/footer/Footer";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/minliste", element: <Minliste /> },
    { path: "/contact", element: <Contact /> },
    { path: "/ophold", element: <Ophold /> },
    { path: "/aktiviter", element: <Aktiviter /> },
    { path: "/backoffice", element: <Backoffice /> },
    { path: "/infostay/:id", element: <InfoStay /> },
  ]);

  return (
    <div className="app">
      <Navigation />
      <div className="content">{routes}</div>
      <Footer />
    </div>
  );
}

export default App;
