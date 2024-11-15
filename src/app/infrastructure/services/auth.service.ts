import { PAuth } from "@/app/core/application/ports";
import { HttpClient } from "../utils/httpClient";
import { ILoginRequest } from "@/app/core/application/dto/auth/login-request.dto";
import { ILoginResponse } from "@/app/core/application/dto/auth/login-response.dto";

export class AuthService implements PAuth{

    private httpClient: HttpClient;
    private basePath: string = 'auth';

    constructor(){
        this.httpClient = new HttpClient();
    }

    async login(req: ILoginRequest): Promise<ILoginResponse>{
        return this.httpClient.post<ILoginResponse, ILoginRequest>(
            `${this.basePath}/login`,
            req
        )
    }
}