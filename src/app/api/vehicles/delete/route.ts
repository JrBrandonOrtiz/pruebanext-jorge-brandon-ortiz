import { NextResponse } from "next/server";
import { VehicleService } from "@/app/infrastructure/services/vehicle.service";

export async function DELETE(_: Request, {params} : {params: Promise<{id: number}>}) {
    const service = new VehicleService();

    try {
        const id = (await params).id
        await service.destroy(id);

        return NextResponse.json({message: 'Eliminado'}, {status: 200});

    } catch (error) {
        console.log('Error: ', error);
        return NextResponse.json({message: 'Error'}, {status: 500})
        
    }
}