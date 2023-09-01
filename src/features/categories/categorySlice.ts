import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface CategoryInterface {
    id: string;
    name: string;
    description: string | null;
    is_active: boolean;
    deleted_at: null | string;
    created_at: string;
    updated_at: string;
}

const category: CategoryInterface = {
    id: "1",
    name: "Olive",
    description: 'descricao',
    is_active: false,
    deleted_at: null,
    created_at: "2025-03-25T12:00:00",
    updated_at: "2025-03-25T12:00:00",
}

const categories:CategoryInterface[] = [
    category,
    { ...category, id: '2', name: 'Peach', is_active: true },
    { ...category, id: '3', name: 'Apple', is_active: true },
    { ...category, id: '4', name: 'Banana', is_active: true },
    { ...category, id: '5', name: 'Maca', is_active: true },
    { ...category, id: '6', name: 'Uva', is_active: true },
    { ...category, id: '7', name: 'Peira', is_active: true },
    { ...category, id: '8', name: 'Mamao', is_active: true },
    { ...category, id: '9', name: 'Morango', is_active: true },
]

export const initialState = categories

const categoriesSlice = createSlice({
    initialState,
    name:'categories',
    reducers: {
        createCategory(state, action){},
        listCategory(state, action){},
        editCategory(state, action){},
    }
})

export const selectCategories = (state:RootState) => state.categories
export default categoriesSlice.reducer