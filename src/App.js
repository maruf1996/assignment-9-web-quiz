import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Blog from './component/Blog/Blog';
import Home from './component/Home/Home';
import Main from './component/layout/Main';
import NotFound from './component/NotFound/NotFound';
import Statistics from './component/Statistics/Statistics';
import TopicQuiz from './component/TopicQuiz/TopicQuiz';
import Topics from './component/Topics/Topics';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:async ()=> fetch('https://openapi.programming-hero.com/api/quiz')
      },
      {
        path:'topic',
        element:<Topics></Topics>,
        loader:async ()=> fetch('https://openapi.programming-hero.com/api/quiz')
      },
      {
        path:'statistics',
        element:<Statistics></Statistics>,
        loader:async ()=> fetch('https://openapi.programming-hero.com/api/quiz')
      },
      {
        path:'blog',
        element:<Blog></Blog>
      },
      {
        path:'about',
        element:<About></About>
      },
      {
        path:'/topic/:topicId',
        element:<TopicQuiz></TopicQuiz>,
        loader:async ({params})=> fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
      }
    ]
    },
    {
      path:'*',
      element:<NotFound></NotFound>
    }
  ]);
  return (
    <div>
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
