import React from 'react';
import SideBar from '../../Dashboard/SideBar';
import { HiPlusCircle } from 'react-icons/hi';
import Table2 from '../../../Components/Table2';
import CategoryModels from '../../../Components/Modals/CategoryModels';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DeleteCategoryAction, GetAllCategoriesAction } from '../../../Redux/Actions/CategoriesActions';
import { toast } from 'react-hot-toast';
import { Empty } from '../../../Components/Notifications/EmptyN';
import Loader from '../../../Components/Notifications/LoaderN';
import { useDispatch } from 'react-redux';

function Categories() {
  const [modelOpen, setModelOpen] = React.useState(false);
  const [category, setCategory] = React.useState();
  const dispatch = useDispatch();

  // get all categories
  const { categories, isLoading } = useSelector(state => state.CategoryGetAll);

  // delete category
  const { isSuccess, isError } = useSelector(state => state.CategoryDelete);
  const AdminDeleteCategory = (id) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      dispatch(DeleteCategoryAction(id));
    }
  };

  const OnEditFunc = (id) => {
    setCategory(id);
    setModelOpen(!modelOpen);
  };
  useEffect(() => {
    dispatch(GetAllCategoriesAction());

    if (isError) {
      toast.error(isError);
      dispatch({ type: 'DELETE_CATEGORY_RESET' });
    }
    if (isSuccess) {
      dispatch({ type: 'DELETE_CATEGORY_RESET' });
    }

    if (modelOpen === false) {
      setCategory();
    }
  }, [modelOpen, isSuccess, isError, dispatch]);

  return (
    <SideBar>
      <CategoryModels modelOpen={modelOpen} setModelOpen={setModelOpen} category={category} />
      <div className='flex flex-col gap-6'>
        <div className='flex-btn gap-2'>
          <h2 className='text-xl font-bold'>Categories</h2>
          <button
            onClick={() => setModelOpen(true)}
            className='bg-subMain flex-rows gap-4 font-medium transitions hover:bg-main border border-subMain text-white py-2 px-4 rounded'
          >
            <HiPlusCircle /> Create
          </button>
        </div>
        {isLoading ? (
          <Loader />
        ) : categories?.length > 0 ? (
          <Table2
            data={categories}
            users={false}
            OnEditFunc={OnEditFunc}
            OnDeleteFunction={AdminDeleteCategory}
          />
        ) : (
          <Empty message='No Categories Yet, Try Adding Some!' />
        )}
      </div>
    </SideBar>
  );
}

export default Categories;
