import { User, stateUser, actionUser } from '@/app/types/userType';

export const reducer = (state: stateUser, action: actionUser) => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                users: [...state.users, action.payload],
            };
        case 'UPDATE_USER':
            return {
                ...state,
                users: state.users.map((user: User) =>
                    user.id === action.payload.id ? action.payload : user
                ),
            };
        case 'DELETE_USER':
            return {
                ...state,
                users: state.users.filter((user: User) => user.id !== action.payload.id),
            };
        default:
            return state;
    }
}