import { HttpClient } from "@/app/infrastructure/utils/httpClient";
import { IVehicleResponse } from "@/app/core/application/dto/vehicles/vehicleRps";
import { IVehicleRequest } from "@/app/core/application/dto/vehicles/vehiclerequest";


export class VehicleService{
    private httpClient: HttpClient;

    constructor() {
        this.httpClient = new HttpClient();
    }

    async find(page: number, size: number): Promise<IVehicleResponse> {
        try {
            const response = await this.httpClient.get<IVehicleResponse>(`vehicles?page=${page}&size=${size}`);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    
    async create( body : FormData) {
        try {
            const data = this.httpClient.postFormData<IVehicleRequest>("vehicles", body);
            return data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }; 

    async destroy(id: number){
        try {
            const response = await this.httpClient.delete(`vehicles/${id}`);
            return response;

        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}