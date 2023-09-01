import {
    CreateCategory,
    EditCategory,
    ListCategory
} from '../features/categories' 
import { RoutePros } from './root'

export const CategoryRoutes:Array<RoutePros> = [
    {
        path: "/category/create",
        element: <CreateCategory />
    },
    {
        path: "/category/edit/:id",
        element: <EditCategory />
    },
    {
        path: "/category/list",
        element: <ListCategory />
    },
]