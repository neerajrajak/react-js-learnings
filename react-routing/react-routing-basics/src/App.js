import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";
import Home from "./routes/Home";
import ProductDetails from "./routes/ProductDetails";
import Products from "./routes/Products";
import Root from "./routes/Root";

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />} />
//     <Route path="/products" element={<Products />} />
//   </Route>
// )

// const router = createBrowserRouter(routeDefinitions);
const router = createBrowserRouter([
  {
    path:"/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children:[
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:productId",
        element: <ProductDetails />,
      }
    ]
  }
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
