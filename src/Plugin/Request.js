import axios from "axios";
import {message} from "ant-design-vue";

const instance = axios.create({
    // baseURL: process.env.VUE_APP_BASE_API,
    // baseURL: "http://192.168.0.101:8101",
    baseURL: "http://8.140.154.77:8976",
    // baseURL:process.env.NODE_ENV === "production"?"http://8.140.154.77:8976":"http://192.168.0.101:8101",
    timeout: 60000,
});

let token = undefined;

export function Token(data) {
    token = data;
}

instance.interceptors.request.use(
    config => {
        if (!config.headers.token && token) {
            config.headers.token = token;
        }
        return config;
    },
    error => {
        message.error(error.toString());
        return Promise.reject(error.toString());
    },
);


instance.interceptors.response.use(
    response => {
        const res = response.data;
        // if (token) {
        //     if (res.code !== 200) {
        //         message.warning(res.msg);
        //     }
        // }
        return res;
    },
    error => {
        message.error(error.toString());
        return Promise.reject(error);
    },
);

export function Post(url, data = {}, header = {}) {
    return new Promise((resolve, reject) => {
        instance.post(url, data, {
            headers: header,
        }).then(response => {
            resolve(response);
        }, err => {
            reject(err);
        });
    });
}


export function Get(url, data = {}) {
    return new Promise((resolve, reject) => {
        instance.get(url, {params: data})
            .then(response => {
                resolve(response);
            }, err => {
                reject(err);
            });
    });
}