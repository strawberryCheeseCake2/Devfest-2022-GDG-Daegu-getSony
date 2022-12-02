import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import CalendarScreen from './features/calendar/screens/CalendarScreen';
import EventScreen from './features/event/screens/EventScreen';

const router = createBrowserRouter([
  {
    path: "/",
    element: <CalendarScreen />,
  },
  {
    path: "/event/:id",
    element: <EventScreen />
  }
]);

function App() {
  return (
    <div className='outer-container'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
