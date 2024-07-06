import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import About from '../pages/About'
import ContactUs from '../pages/ContactUs'
import Media from '../pages/Media'


const router = createBrowserRouter([

  {
    path: "/",
    element: <App/>,
    children: [

      {
        path: "",
        element: <Home />
      },

      {
        path: "/about",
        element: <About />
      },

      {
        path: "/media",
        element: <Media />
      },

      {
        path: "/contactUs",
        element: <ContactUs />
      }

    ]

  }
])

export default router