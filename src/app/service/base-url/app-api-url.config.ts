import { environment } from "src/environments/environment";

// Api base url
const Base: string = environment.baseApiUrl;

export const BaseUrl = {
    login: Base,
    register: Base + '/register'
}   