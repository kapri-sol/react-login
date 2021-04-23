import HttpClient from './HttpClient';
interface CreateUserBody {
    email: string;
    password: string;
    nickName?: string;
}

export default class MainApi extends HttpClient {
    public constructor() {
        super(process.env.URL || '');
    }

    getUsers = () => this.instance.get('/users');

    createUsers = (body: CreateUserBody) => this.instance.post('/users', body);
}
