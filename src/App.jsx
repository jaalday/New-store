

import Home from './routes/Home';
import Layout from './pages/Layout';
import Products, {loader as productsLoader}from './routes/Products'



import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([

  {
    element: <Layout/>,
   children:[

 
  {
    path: "/",
    element: <Home/>,
  },
  // {
  //   path:'./routes/apiSearch',
  //   element: <apiSearch/>,
  // },
  {
    path: '/products',
    element: <Products/>,
    loader: productsLoader,
  },
]
}
]);



function App(){

  return <RouterProvider router = {router}/>
}

export default App