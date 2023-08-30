import './App.css';
import { Login } from './Pages/Login';
import { Sigin } from './Pages/Signin';
import { Home } from './Pages/Home';
import { Item } from './Pages/Item';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signin",
    element: <Sigin/>,
  },
  {
    path:"/item/:id",
    element: <Item/>

  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
