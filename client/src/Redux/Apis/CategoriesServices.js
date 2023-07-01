import Axios from "./Axios";



// ****************************** user ****************************** //

// get all categories
const getCategoriesServices = async () => {
    const {data} = await Axios.get('/categories');
    return data;
}

// ****************************** admin ****************************** //


// create new category
const createCategoryServices = async (title, token) => {
    const {data} = await Axios.post('/categories', title, {
        headers: {
            Authorization: `Bearer ${token}`
        }});
    return data;
}

// delete category
const deleteCategoryServices = async (id, token) => {
    const {data} = await Axios.delete(`/categories/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }});
    return data;
}

// update category
const updateCategoryServices = async (id, title, token) => {
    const {data} = await Axios.put(`/categories/${id}`, title, {
        headers: {
            Authorization: `Bearer ${token}`
        }});
    return data;
}


export {
    getCategoriesServices,
    createCategoryServices,
    deleteCategoryServices,
    updateCategoryServices
};
