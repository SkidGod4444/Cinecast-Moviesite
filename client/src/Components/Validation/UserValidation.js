import * as yup from "yup";

// login validation
const LoginValidation = yup.object().shape({
    email: yup.string().email().required("email is required").trim(),
    password: yup.string().required("password is required")
    .min(8, "password must be at least 8 characters")
    .max(16, "password must be at most 16 characters")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,"password must contain at least one uppercase letter, one lowercase letter and one number")
});

// register validation
const RegisterValidation = yup.object().shape({
    username: yup.string().required("username is required")
    .min(3, "username must be at least 3 characters")
    .max(16, "username must be at most 16 characters")
    .matches(/^[a-zA-Z]*$/,"username must contain only letters"),
    email: yup.string().email().required("email is required").trim(),
    password: yup.string().required("password is required")
    .min(8, "password must be at least 8 characters")
    .max(16, "password must be at most 16 characters")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,"password must contain at least one uppercase letter, one lowercase letter and one number")
});
// profile validation
const ProfileValidation = yup.object().shape({
    username: yup.string().required("username is required")
    .min(3, "username must be at least 3 characters")
    .max(16, "username must be at most 16 characters")
    .matches(/^[a-zA-Z]*$/,"username must contain only letters"),
    email: yup.string().email().required("email is required").trim(),
});

// password validation
const PasswordValidation = yup.object().shape({
    Oldpassword: yup.string().required("password is required")
    .min(8, "password must be at least 8 characters")
    .max(16, "password must be at most 16 characters")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,"password must contain at least one uppercase letter, one lowercase letter and one number"),
    Newpassword: yup.string().required("password is required")
    .min(8, "password must be at least 8 characters")
    .max(16, "password must be at most 16 characters")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,"password must contain at least one uppercase letter, one lowercase letter and one number"),
});
// export validation
export { 
    LoginValidation, 
    RegisterValidation, 
    ProfileValidation,
    PasswordValidation };