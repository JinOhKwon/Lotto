import {AxiosResponse} from 'axios';
import {axiosInstance} from '../config/ApiConfig';

export const apiService = () => {
    return {
        /**
         * 반환 요청을 한다.
         *
         * @param url url 주소
         * @param queryParams url 파라미터
         */
        get: async <T>(
            url: string,
            queryParams?: T,
        ): Promise<AxiosResponse<T>> => {
            return await axiosInstance.get<T>(`/${url}`, {params: queryParams});
        },

        /**
         * 저장 요청을 한다.
         *
         * @param url url 주소
         * @param queryParams url 파라미터
         */
        post: async <T>(
            url: string,
            body: object,
            queryParams?: T,
        ): Promise<AxiosResponse<T | void>> => {
            return await axiosInstance.post<T>(`${url}`, body, {
                params: queryParams,
            });
        },

        /**
         * 전체 수정 요청을 한다.
         *
         * @param url url 주소
         * @param queryParams url 파라미터
         */
        put: async <T>(
            url: string,
            body: object,
            queryParams?: T,
        ): Promise<AxiosResponse<T | void>> => {
            return await axiosInstance.put<T>(`${url}`, body, {
                params: queryParams,
            });
        },

        /**
         * 부분 수정 요청을 한다.
         *
         * @param url url 주소
         * @param queryParams url 파라미터
         */
        patch: async <T>(
            url: string,
            body: object,
            queryParams?: T,
        ): Promise<AxiosResponse<T | void>> => {
            return await axiosInstance.patch<T>(`${url}`, body, {
                params: queryParams,
            });
        },

        /**
         * 삭제 요청을 한다.
         *
         * @param url url 주소
         * @param queryParams url 파라미터
         */
        delete: async <T>(
            url: string,
            id: string,
        ): Promise<AxiosResponse<T | void>> => {
            return await axiosInstance.delete(`${url}/${id}`);
        },
    };
};
