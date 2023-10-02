import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomePage from './components/routes/HomePage';
// import EventPage from './components/routes/EventsPage';
import EventDetailsPage from './components/routes/EventDetailsPage';
import NewEventPage from './components/routes/NewEventPage';
import EditEventPage from './components/routes/EditEventPage';
import MainNavigation from './components/MainNavigation';
import EventsPage from './components/Events';


const router = createBrowserRouter([
  {path: '/',element:<MainNavigation/>,
  children:[
  {path:'/',element:<HomePage/>},
  {path:'/events',element:<EventsPage/>, loader: async() => {const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    //...
  } else {
    const resData = await response.json();
  return resData.events;
  }}},
  {path:'/events/:id',element:<EventDetailsPage/>},
  {path:'/events/new',element:<NewEventPage/>},
  {path:'/events/:id/edit',element:<EditEventPage/>}]}

])
function App() {
  
  return <RouterProvider router={router}/>;
}

export default App;
