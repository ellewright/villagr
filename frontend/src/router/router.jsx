import { createBrowserRouter } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import VillagerPage from "../pages/VillagerPage/VillagerPage"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/:name",
        element: <VillagerPage />
    }
])