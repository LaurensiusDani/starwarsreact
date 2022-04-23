import axios, { Method } from "axios";

const httpCall = (url: string, mthd: Method, data?: object) => {
    return new Promise ((resolve, reject) => {
        return axios ({
            method: mthd,
            url: url,
            data: data,
        });
    })
}

export default httpCall;