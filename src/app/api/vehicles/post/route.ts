import { VehicleService } from "@/app/infrastructure/services/vehicle.service";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const service = new VehicleService();

    try {
        const formData = await request.formData();
        const response = await service.create(formData);
        return NextResponse.json(response, { status: 200 });
    } catch (error: unknown) {
        console.error("Error en la API de vehículos:", error);
        return NextResponse.json({ message: "Error en el servidor" }, { status: 500 });
    }
}