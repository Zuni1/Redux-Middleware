import axios from "axios";

const fetchRequest = () => {
    return{
        type: 'Fetch_User_Request'
    }
}

const fetchSuccess = (user) => {
    return{
        type: 'Fetch_User_Success',
        payload: user
    }
}

const fetchFailure = (error) => {
    return{
        type: 'Fetch_User_Failure',
        payload: error
    }
}

export const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            const user = res.data.map((user) => (
                <p key={user.id}>{user.name}</p>
            ))
            dispatch(fetchSuccess(user))
        })
        .catch(error => {
            dispatch(fetchFailure(error.message))
        })
    }
}