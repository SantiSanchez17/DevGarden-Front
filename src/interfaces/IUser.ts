export interface IUser extends DTOUser {
    _id: string;
}

export interface DTOUser {
    name: string,
    handle: string,
    email: string,
    password: string,
}

export type RegisterForm = Pick<DTOUser, 'name' | 'handle' | 'email'> & {
    password: string,
    password_com: string
}