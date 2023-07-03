import * as yup from "yup";

const MovieValidation = yup.object().shape({
    name: yup.string().required('Movie name is required')
    .max(50, 'Movie name must be less than 50 characters'),
    time: yup.number().required('Movie time is required'),
    language: yup.string().required('Movie language is required'),
    year: yup.number().required('Movie year is required'),
    director: yup.string().required('Movie director is required'),
    desc: yup.string().required('Movie description is required')
    .max(300, 'Movie description must be less than 300 characters'),
    category: yup.string().required('Movie category is required'),
    agelimit: yup.number().required('Movie age limit is required'),
    ratings: yup.number().required('Movie ratings is required'),
});

export { MovieValidation}