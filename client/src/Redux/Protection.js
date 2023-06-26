import { LogoutAction } from "./Actions/UserActions";

export const ErrorsAction = (error,dispatch,action) => {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    if (message === 'Not authorized, token failed') {
        dispatch(LogoutAction());
    }
    return dispatch({
        type: action,
        payload: message
    });
}

// api token protection

export const TokenProtection = (token) => {
    const {
        UserLogin: { userInfo },
    } = token();
    if (!userInfo?.token) {
        return null
    }
    else {
        return token = userInfo?.token;
    }
}
