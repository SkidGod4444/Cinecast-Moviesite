import React from 'react'
import SideBar from '../../Dashboard/SideBar'
import { HiPlusCircle } from 'react-icons/hi'
import Table2 from '../../../Components/Table2'
import { CategoriesData } from '../../../Data/CategoriesData'
import CategoryModels from '../../../Components/Modals/CategoryModels'
import { useEffect } from 'react'


function Categories() {
  const [modelOpen, setModelOpen] = React.useState(false)
  const [category, setCategory] = React.useState()

  const OnEditFunc = (id) => {
    setCategory(id)
    setModelOpen(!modelOpen)
  }
  useEffect(() => {
    if (modelOpen === false) {
      setCategory()
    }
  }, [modelOpen])


  return (
    <SideBar>
      <CategoryModels modelOpen={modelOpen} setModelOpen={setModelOpen} category={category} />
      <div className='flex flex-col gap-6'>
            <div className='flex-btn gap-2'>
                <h2 className='text-xl font-bold'>Categories</h2>
                <button
                onClick={() => setModelOpen(true)}
                className='bg-subMain flex-rows gap-4 font-medium transitions hover:bg-main border border-subMain text-white py-2 px-4 rounded'>
                    <HiPlusCircle /> Create
                </button>
            </div>
            <Table2 data={CategoriesData} users={false} OnEditFunc={OnEditFunc}/>
        </div>
    </SideBar>
  )
}

export default Categories