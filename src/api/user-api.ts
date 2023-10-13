import jwtDecode from "jwt-decode";
import {$authHost, $host} from "./http";

export const registration = async (email: string, password: string) => {
    const {data} = await $host.post('user/registration', {email, password, role: 'USER'});
    return jwtDecode(data.token)
}

export const login = async (email: string, password: string) => {
    const {data} = await $host.post('user/login', {email, password});
    return jwtDecode(data.token)
}

export const check = async () => {
    const response = await $host.post('user/auth', {});
    return response;
}
