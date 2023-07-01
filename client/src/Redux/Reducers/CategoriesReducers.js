import * as CategoriesConstants from '../Constants/CategoriesConstants';


// get all categories
export const GetAllCategoriesReducer = (state = { categories: [] }, action) => {
    switch (action.type) {
        case CategoriesConstants.GET_ALL_CATEGORIES_REQUEST:
            return { isLoading: true, }
        case CategoriesConstants.GET_ALL_CATEGORIES_SUCCESS:
            return { isLoading: false, categories: action.payload }
        case CategoriesConstants.GET_ALL_CATEGORIES_FAIL:
            return { isLoading: false, isError: action.payload }
        default:
            return state;
    }
}


// create category

export const CreateCategoryReducer = (state = {}, action) => {
    switch (action.type) {
        case CategoriesConstants.CREATE_CATEGORY_REQUEST:
            return { isLoading: true,
            }
        case CategoriesConstants.CREATE_CATEGORY_SUCCESS:
            return { isLoading: false, isSuccess: true
            }
        case CategoriesConstants.CREATE_CATEGORY_FAIL:
            return { isLoading: false, isError: action.payload
            }
        case CategoriesConstants.CREATE_CATEGORY_RESET:
            return {}
        default:
            return state;
    }
}

// update category

export const UpdateCategoryReducer = (state = {}, action) => {
    switch (action.type) {
        case CategoriesConstants.UPDATE_CATEGORY_REQUEST:
            return { isLoading: true,
            }
        case CategoriesConstants.UPDATE_CATEGORY_SUCCESS:
            return { isLoading: false, isSuccess: true
            }
        case CategoriesConstants.UPDATE_CATEGORY_FAIL:
            return { isLoading: false, isError: action.payload
            }
        case CategoriesConstants.UPDATE_CATEGORY_RESET:
            return {}
        default:
            return state;
    }
}

// delete category

export const DeleteCategoryReducer = (state = {}, action) => {
    switch (action.type) {
        case CategoriesConstants.DELETE_CATEGORY_REQUEST:
            return { isLoading: true,
            }
        case CategoriesConstants.DELETE_CATEGORY_SUCCESS:
            return { isLoading: false, isSuccess: true
            }
        case CategoriesConstants.DELETE_CATEGORY_FAIL:
            return { isLoading: false, isError: action.payload
            }
        case CategoriesConstants.DELETE_CATEGORY_RESET:
            return {}
        default:
            return state;
    }
}
