import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../error-page";

import { CategoryRoutes } from './categoryRoutes'
import { ListCategory } from "../features/categories";

export interface RoutePros {
    path: string,
    element: React.JSX.Element
}

export const routers = createBrowserRouter([
    {
        path: "/",
        element: <ListCategory />,
        errorElement: <ErrorPage />
    },
    ...CategoryRoutes
]);