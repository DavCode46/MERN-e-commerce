import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import CustomLayout from '@pages/Layout/CustomLayout'
import Error404 from '@pages/Error/Error404'


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <CustomLayout />,
      errorElement: <Error404 />,
      children: [
        {},
        {},
        {},

      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
