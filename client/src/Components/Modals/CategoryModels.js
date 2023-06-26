import React from 'react';
import MainModals from './MainModals';
import { Input } from '../UserInputs';

function CategoryModels({ modelOpen, setModelOpen, category }) {
  return (
    <MainModals modelOpen={modelOpen} setModelOpen={setModelOpen}>
      <div className='online-block sm:w-4/5 border border-border md:w-3/5 lg:w-2/5 w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto align-middle p-10 overflow-y-auto h-4/5 sm:h-auto bg-main text-white rounded-2xl' style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <h2 className='text-3xl font-bold'>{category ? 'Edit':'Create'}</h2>
        <form className='flex flex-col gap-5 text-left mt-3'>
        <Input label="Category Name" type="text" placeholder={category ? category.title : 'Action/Sci-fi/Romantic'} bg={true} />
        <button 
        onClick={() => setModelOpen(false)}
        className='w-full flex-colo py-3 font-bold transitions hover:bg-dry border-2 border-subMain rounded bg-subMain text-white '>
            Save Changes
        </button>
        </form>
      </div>
    </MainModals>
  );
}

export default CategoryModels;
