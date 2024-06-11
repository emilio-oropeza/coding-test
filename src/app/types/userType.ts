export interface User {
    id: number;
    name: string;
    last_name: string;
    email: string;
    age: number;
}

export interface stateUser {
    users: User[];
}

export interface actionUser {
    type: string;
    payload: User;
}
