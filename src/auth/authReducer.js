import { types } from '../types/types'

// const loginAction = {
//     name:'Fernando',
//     payload : {
//         email: 'terry@gmail.com',
//         logged: true
//     }
// }

export const authReducer = (state = {}, action) => {

    switch( action.type ){

        case types.login:
            return {
                ...action.payload,
                logged: true
            }

        case types.logout: 
            return {
                logged: false
            }

        default: 
            return state;

    }

}