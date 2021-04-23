import axios, { AxiosInstance, AxiosResponse } from 'axios';

declare module 'axios' {
    interface AxiosResponse<T = any> extends Promise<T> {}
}

abstract class HttpClient {
    protected readonly instance: AxiosInstance;

    public constructor(baseURL: string) {
        this.instance = axios.create({
            baseURL,
        });

        this._initResInterceptor();
    }

    private _initResInterceptor = () => {
        this.instance.interceptors.response.use(this._handleRes, this._handleError);
    };

    private _handleRes = ({ data }: AxiosResponse) => data;

    protected _handleError = (error: any) => Promise.reject(error);
}

export default HttpClient;
