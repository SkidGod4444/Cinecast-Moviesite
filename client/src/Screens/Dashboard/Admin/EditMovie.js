import React, { useEffect, useState } from 'react'
import SideBar from '../../Dashboard/SideBar'
import { Input } from '../../../Components/UserInputs';
import Uploader from '../../../Components/Uploader';
import { Select } from '../../../Components/UserInputs';
import { CategoriesData } from '../../../Data/CategoriesData';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { MovieValidation } from '../../../Components/Validation/MovieValidation';
import { toast } from 'react-hot-toast';
import {InlineError} from '../../../Components/Notifications/ErrorN';
import {ImagePreview} from '../../../Components/ImagePreview';
import { GetMovieByIdAction, UpdateMovieAction } from '../../../Redux/Actions/MoviesActions';
import Loader from '../../../Components/Notifications/LoaderN';
import {Empty} from '../../../Components/Notifications/EmptyN';

function EditMovie() {
    // const sameClass = 'w-full gap-6 flex-colo min-h-screen'
    const [imageWithOutTitle, setImageWithOutTitle] = useState('')
    const [imageTitle, setImageTitle] = useState('')
    const [VideoURL, setVideoURL] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id} = useParams()

  // use Selectors
    const { isLoading, isError, movie } = useSelector(state => state.GetMovieById)
    const { isLoading:EditLoading, isError:EditError, isSuccess } = useSelector(state => state.UpdateMovie)
  // validate movie
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(MovieValidation),
  });

  // handle submit
    const onSubmit = (data) => {
    dispatch(UpdateMovieAction(movie?._id,{
        ...data,
        poster: imageWithOutTitle,
        titleimg: imageTitle,
        video: VideoURL,
        })
    )
    };

  // use effect 
  useEffect(() => {
    if (movie?._id !== id) {
        dispatch(GetMovieByIdAction(id))
    }
    else {
        setValue('name', movie?.name)
        setValue('time', movie?.time)
        setValue('language', movie?.language)
        setValue('year', movie?.year)
        setValue('director', movie?.director)
        setValue('desc', movie?.desc)
        setValue('category', movie?.category)
        setValue('agelimit', movie?.agelimit)
        setValue('ratings', movie?.ratings)
        setImageTitle(movie?.titleimg)
        setImageWithOutTitle(movie?.poster)
        setVideoURL(movie?.video)
    }
    if (isSuccess) {
      
      dispatch({ type: 'UPDATE_MOVIE_RESET' })
      navigate(`/movie/edit/${id}`)
    }
    if (EditError) {
      dispatch({ type: 'UPDATE_MOVIE_RESET' })
      toast.error(EditError)
    }
    }, [dispatch, id, movie, isSuccess, EditError, navigate, setValue])
  
  return (
    <SideBar>
        {
            isLoading ? (
                <Loader />
            )
            : isError ? (
                <Empty message='Movie Not Found!'/>
            )
            : (
        <div className='flex flex-col gap-2'>
        <h2 className='text-xl font-bold'>Edit "{movie?.name}"</h2>
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
          <div className={`w-full grid ${VideoURL && 'md:grid-cols-2'} gap-6`}>
            {
              VideoURL && (
                <div className='w-full bg-main text-sm text-subMain py-4 border border-border rounded flex-col'>
                  Video Uploaded!
                  </div>
                  )
            }
          <Uploader setImageUrl={setVideoURL}/>
          </div>
          </div>
          {/* SUBMIT */}
        <div className='flex justify-end items-center my-4'>
        <button 
        disabled={isLoading}
        onClick={handleSubmit(onSubmit)}
        className='bg-main font-medium transitions hover:bg-subMain border border-subMain text-white px-6 py-3 rounded w-full sm:w-auto '>
          {
            EditLoading ? ( 'Saving...' ):( <>
              Save Changes
            </>)
          }
          </button>
        </div>
        </div>
            )
        }
        
    </SideBar>
  )
}

export default EditMovie