import * as CategoriesConstants from '../Constants/CategoriesConstants';
import * as CategoriesAPIs from '../Apis/CategoriesServices';
import toast from 'react-hot-toast';
import { ErrorsAction, TokenProtection } from '../Protection';


// get all categories action
export const GetAllCategoriesAction = () => async (dispatch) => {
    try {
        dispatch({ type: CategoriesConstants.GET_ALL_CATEGORIES_REQUEST });
        const { data } = await CategoriesAPIs.getCategoriesServices();
        dispatch({ type: CategoriesConstants.GET_ALL_CATEGORIES_SUCCESS, payload: data });
    } catch (error) {
        ErrorsAction(error, dispatch, CategoriesConstants.GET_ALL_CATEGORIES_FAIL);
    }
}

// create category action
export const CreateCategoryAction = (title) => async (dispatch, token) => {
    try {
        dispatch({ type: CategoriesConstants.CREATE_CATEGORY_REQUEST });
        await CategoriesAPIs.createCategoryServices(
            title, 
            TokenProtection(token)
            );
        dispatch({ type: CategoriesConstants.CREATE_CATEGORY_SUCCESS });
        toast.success('Category created successfully');
    } catch (error) {
        ErrorsAction(error, CategoriesConstants.CREATE_CATEGORY_FAIL, dispatch);
    }
}

// update category action
export const UpdateCategoryAction = (id, title) => async (dispatch, token) => {
    try {
        dispatch({ type: CategoriesConstants.UPDATE_CATEGORY_REQUEST });
        await CategoriesAPIs.updateCategoryServices(
            id, 
            title, 
            TokenProtection(token)
            );
        dispatch({ type: CategoriesConstants.UPDATE_CATEGORY_SUCCESS });
        toast.success('Category updated successfully');
    } catch (error) {
        ErrorsAction(error, CategoriesConstants.UPDATE_CATEGORY_FAIL, dispatch);
    }
}

// delete category action
export const DeleteCategoryAction = (id) => async (dispatch, token) => {
    try {
        dispatch({ type: CategoriesConstants.DELETE_CATEGORY_REQUEST });
        await CategoriesAPIs.deleteCategoryServices(
            id, 
            TokenProtection(token)
            );
        dispatch({ type: CategoriesConstants.DELETE_CATEGORY_SUCCESS });
        toast.success('Category deleted successfully');
    } catch (error) {
        ErrorsAction(error, CategoriesConstants.DELETE_CATEGORY_FAIL, dispatch);
    }
}