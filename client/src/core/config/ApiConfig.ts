import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

/**
 * axios 요청 환경 설정
 */
const axiosRequestConfiguration: AxiosRequestConfig = {
    baseURL: 'http://localhost:5000',
    responseType: 'json',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
};

/**
 * axios 초기화를 한다.
 *
 * @param config 환경
 */
const axiosInit = (config: AxiosRequestConfig): AxiosInstance => {
    const axiosInstance = axios.create(config);
    axiosInstance.interceptors.response.use(
        (res: any) => res,
        (err: any) => {
            return Promise.reject(err);
        },
    );
    return axiosInstance;
};

/**
 * axios 인스턴스를 초기화한다.
 */
export const axiosInstance = axiosInit(axiosRequestConfiguration);

/**
 * 토큰을 저장한다.
 *
 * @param token 토큰
 */
export const setAuthToken = (token: string | null) => {
    if (token) {
        axiosInstance.defaults.headers.common['x-auth-token'] = token;
        localStorage.setItem('token', token);
    } else {
        delete axiosInstance.defaults.headers.common['x-auth-token'];
        localStorage.removeItem('token');
    }
};
