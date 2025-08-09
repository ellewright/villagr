import { createBrowserRouter } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import VillagerPage from "../pages/VillagerPage/VillagerPage"
import Error from "../components/errors/Error/Error";
import SettingsPage from "../pages/SettingsPage/SettingsPage";

export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error />,
        children: [
            { index: true, element: <HomePage /> },
            { path: ":name", element: <VillagerPage /> },
            { path: "settings", element: <SettingsPage /> }
        ],
    }
]);