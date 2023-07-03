import React, { useEffect, useState } from 'react'
import SideBar from '../../Dashboard/SideBar'
import { Input } from '../../../Components/UserInputs';
import Uploader from '../../../Components/Uploader';
import { Select } from '../../../Components/UserInputs';
import { CategoriesData } from '../../../Data/CategoriesData';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { MovieValidation } from '../../../Components/Validation/MovieValidation';
import { toast } from 'react-hot-toast';
import {InlineError} from '../../../Components/Notifications/ErrorN';
import {ImagePreview} from '../../../Components/ImagePreview';
import { CreateMovieAction } from '../../../Redux/Actions/MoviesActions';


function AddMovie() {
  const [imageWithOutTitle, setImageWithOutTitle] = useState('')
  const [imageTitle, setImageTitle] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // use Selectors
  const { isLoading, isError, isSuccess } = useSelector(state => state.CreateMovie)

  // validate movie
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(MovieValidation),
  });

  // handle submit
  const onSubmit = (data) => {
    dispatch(CreateMovieAction({
      ...data,
      poster: imageWithOutTitle,
      titleimg: imageTitle,
      })
    )
    // console.log({
    //   ...data,
    //   poster: imageWithOutTitle,
    //   titleimg: imageTitle,
    //   video: VideoURL,

    // })
  };

  // use effect 
  useEffect(() => {
    if (isSuccess) {
      reset({
        name: '',
        time: 0,
        language: '',
        year: 0,
        director: '',
        desc: '',
        category: '',
        agelimit: 0,
        ratings: 0,
        video: '',
      })
      setImageTitle('')
      setImageWithOutTitle('')
      dispatch({ type: 'CREATE_MOVIE_RESET' })
      navigate('/addmovie')
    }
    if (isError) {
      dispatch({ type: 'CREATE_MOVIE_RESET' })
      toast.error(isError)
    }
    }, [isSuccess, reset, isError, dispatch, navigate])
  
  return (
    <SideBar>
        <div className='flex flex-col gap-2'>
        <h2 className='text-xl font-bold'>Create Movie</h2>
        <div className='w-full grid md:grid-cols-2 gap-6'>
        <div className='w-full'>
            <Input 
            label="Movie Name" 
            type="text" 
            placeholder="Ex: Game Of Thrones"
            name="name"
            register={register("name")}
            bg={true} />
            {
              errors.name && <InlineError text={errors.name.message} />
            }
            </div>
            <div className='w-full'>
        <Input 
            label="Movie Time" 
            type="number" 
            placeholder="Ex: 6 (Only numbers)"
            bg={true} 
            name="time"
            register={register("time")}/>
            {
              errors.time && <InlineError text={errors.time.message} />
            }
            </div>
        </div>
        <div className='w-full grid md:grid-cols-2 gap-6'>
        <div className='w-full'>
        <Input 
        label="Movie Language" 
        type="text" 
        placeholder="Ex: English" 
        bg={true}
        name="language"
        register={register("language")}/>
        {
          errors.language && <InlineError text={errors.language.message} />
        }
        </div>
        <div className='w-full'>
        <Input 
        label="Movie Year" 
        type="number" 
        placeholder="Ex: 2006 (Only numbers)" 
        bg={true}
        name="year"
        register={register("year")}/>
        {
          errors.year && <InlineError text={errors.year.message} />
        }
        </div>
        </div>
        {/* DIRECTOR & AGE */}
        <div className='w-full grid md:grid-cols-2 gap-6'>
        <div className='w-full'>
        <Input 
        label="Movie Director" 
        type="text" 
        placeholder="Ex: Ratan Chodi" 
        bg={true}
        name="director"
        register={register("director")}/>
        {
          errors.director && <InlineError text={errors.director.message} />
        }
        </div>
        <div className='w-full'>
        <Input 
        label="Age Limit" 
        type="number" 
        placeholder="Ex: 16 (Only numbers)" 
        bg={true}
        name="agelimit"
        register={register("agelimit")}/>
        {
          errors.agelimit && <InlineError text={errors.agelimit.message} />
        }
        </div>
        </div>
        {/* DESCRIPTION */}
        <div className='w-full'>
        <Input 
        label="Movie Descripton" 
        type="text" 
        placeholder="Make it short & sweet" 
        bg={true}
        name="desc"
        register={register("desc")}/>
        {
          errors.desc && <InlineError text={errors.desc.message} />
        }
        </div>
        {/* IMAGES */}
        <div className='w-full grid md:grid-cols-2 gap-6'>
        {/* IMAGE WITHOUT TITLE */}
        <div className='flex flex-col gap-2'>
          <p className='text-border font-semibold text-sm'>
            Image without Title
          </p>
          <Uploader setImageUrl={setImageWithOutTitle} />
          <ImagePreview image={imageWithOutTitle} name='ImageWithoutTitle' />
          <div>

          </div>
        </div>
        {/* IMAGE WITH TITLE */}
        <div className='flex flex-col gap-2'>
          <p className='text-border font-semibold text-sm'>
            Image with Title
          </p>
          <Uploader setImageUrl={setImageTitle}/>
          <ImagePreview image={imageTitle} name='ImageTitle'/>
          <div>
          </div>
        </div>
        </div>
        
        {/* CATEGORY */}
        <div className='w-full grid md:grid-cols-2 gap-6'>
        <div className='w-full'>
        <div className='text-sm w-full'>
        <Select 
        label="Categories Available" 
        options={CategoriesData}
        />
        </div>
        <div className='w-full'>
        <Input 
        label="Movie Category" 
        type="text" 
        placeholder="Choose from above & write here" 
        bg={true}
        name="category"
        register={register("category")}/>
        {
          errors.category && <InlineError text={errors.category.message} />
        }
        </div>
        </div>
        <div className='w-full'>
      <Input 
        label="Movie Ratings" 
        type="number" 
        placeholder="Ex: 4.5 (Only numbers)" 
        bg={true}
        name="ratings"
        register={register("ratings")}/>
        {
          errors.ratings && <InlineError text={errors.ratings.message} />
        }
        </div>
        </div>
        {/* MOVIE VIDEO */}
        <div className='flex flex-col gap-2 w-full '>
          <label className='text-border font-semibold text-sm'>
            Movie Video
          </label>
      <div className='w-full'>
      <Input 
        label="Movie Link" 
        type='url'
        placeholder="paste firebase link here" 
        bg={true}
        name="video"
        register={register("video")}/>
        {
          errors.video && <InlineError text={errors.video.message} />
        }
        </div>
          </div>
          {/* SUBMIT */}
        <div className='flex justify-end items-center my-4'>
        <button 
        disabled={isLoading}
        onClick={handleSubmit(onSubmit)}
        className='bg-main font-medium transitions hover:bg-subMain border border-subMain text-white px-6 py-3 rounded w-full sm:w-auto '>
          {
            isLoading ? ( 'Publishing...' ):( <>
              Publish Movie
            </>)
          }
          </button>
        </div>
        </div>
    </SideBar>
  )
}

export default AddMovie