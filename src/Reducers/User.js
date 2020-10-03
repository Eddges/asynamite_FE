const initialState = {
    userName : localStorage.getItem('userName') ? localStorage.getItem('userName') : null,
    email : localStorage.getItem('email') ? localStorage.getItem('email') : null,
    userId : localStorage.getItem('userId') ? localStorage.getItem('userId') : null,
    phone : localStorage.getItem('phone') ? localStorage.getItem('phone') : null,
    token : localStorage.getItem('token') ? localStorage.getItem('token') : null
}

const User = (state = initialState, action) => {
    switch(action.type) {
        case 'ASSIGN_USER' : 
            console.log('User, assigning User ', action.payload)
            return{
                ...state,
                userName : action.payload.userName,
                email : action.payload.email,
                userId : action.payload.userId,
                phone : action.payload.phone,
                token : action.payload.token
            }
        case 'HANDLE_SIGNOUT' : 
            console.log('Signing out')
            return{
                ...state,
                userName : null,
                email : null,
                userId : null,
                phone : null,
                token : null
            }
    }
    return state
}

export default User