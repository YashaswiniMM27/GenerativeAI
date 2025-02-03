import { createRoot } from 'react-dom/client'
import './index.css'
import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './routes/Homepage/HomePage.jsx';
import Dashboard from './routes/Dashboard/Dashboard.jsx';
import Chatpage from './routes/Chatpage/Chatpage.jsx';
import RootLayout from './routes/layouts/rootLayout/RootLayout.jsx';
import DashboardLayout from './routes/layouts/DashboardLayout/DashboardLayout.jsx';

const router = createBrowserRouter([
    {
        element: <RootLayout/>,
        children: [
        {
            path: "/", element: <HomePage/>
        },
        {
            element: <DashboardLayout/>,
            children: [{
                path: "/dashboard", element: <Dashboard/>
            },
            {
                path: "/dashboard/chats/:id", element: <Chatpage/>
            }
        ]
        }
    ]
    }
]);


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
)
