import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './Router/Router/Router';


function App() {
  return (
    <div className=''>
      <RouterProvider router={routes}></RouterProvider>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-4xl font-bold text-center">Review Removed</h3>
        </label>
      </label>
    </div>
  );
}

export default App;
