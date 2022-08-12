const initialState = {
    loading: false,
    user: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'Fetch_User_Request': 
            return{
                ...state,
                loading: true
            }
        case 'Fetch_User_Success':
            return{
                loading: false,
                user: action.payload,
                error: ''
            }
        case 'Fetch_User_Failure': 
            return{
                loading: false,
                user: [],
                error: action.payload
            }
        default: return state
    }
}

export default reducer