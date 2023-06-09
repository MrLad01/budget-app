import {createBrowserRouter, RouterProvider} from "react-router-dom"


// Routes
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
import Main, {mainLoader} from "./layouts/main";

// library
import {ToastContainer}  from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

// actions
import { logoutAction } from "./actions/logout";

const router = createBrowserRouter([
  {
    path: "/",
  element: <Main />,
  loader: mainLoader,
  errorElement: <Error />,
  children: [
    {
    index: true,
    element: <Dashboard />,
    loader: dashboardLoader,
    errorElement: <Error />,
    },
    {
      path: "logout",
      action: logoutAction
    },
  ],
  },

])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>
        <div>
          <ToastContainer />
        </div>
      </RouterProvider>
    </div>
)}

export default App;
