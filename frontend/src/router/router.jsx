import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import VillagerPage from "../pages/VillagerPage/VillagerPage";
import SettingsPage from "../pages/SettingsPage/SettingsPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: ":name", element: <VillagerPage /> },
            { path: "settings", element: <SettingsPage /> }
        ],
    }
]);