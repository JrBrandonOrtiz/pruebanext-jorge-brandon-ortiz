"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Icons } from "@/ui/atoms";
import { IVehicleResponse } from "@/app/core/application/dto/vehicles/vehicleRps";
import Table from "@/ui/molecules/table/Table";
import Button from "@/ui/atoms/button/Button";
import PaginationVehicle from "../pagination/Pagination";
import VehicleForm from "../formVehicle/FormVehicle";
import Title from "@/ui/atoms/Title";
import styles from './tablex.module.scss';

interface TableVehiclesProps {
    dataResponse: IVehicleResponse;
    onEdit: (id: number) => void;
}

const TableVehicles: React.FC<TableVehiclesProps> = ({ dataResponse, onEdit }) => {
    const router = useRouter();
    const { data } = dataResponse;

    const handleDelete = async (id: number) => {
        const isConfirm = confirm('¿Estás seguro de que deseas eliminar este vehículo?');
        if (!isConfirm) return;

        try {
            await fetch(`/api/vehicle/delete/${id}`, {
                method: 'DELETE'
            });
            console.log('Eliminado');
            router.refresh();
    
        } catch (error) {
            console.log('Error', error);
        }

        router.refresh();
    }

    const headers = [
        { label: "Foto", key: "photo" },
        { label: "Marca", key: "make" },
        { label: "Modelo", key: "model" },
        { label: "Año", key: "year" },
        { label: "Placa", key: "licensePlate" },
        { label: "Acciones", key: "actions" }
    ];

    const formatedData = data.map((vehicle) => ({
        photo: (
            <img
                src={vehicle.photo!}
                alt={`${vehicle.make} ${vehicle.model}`}
                className={styles.imageCar}
            />
        ),
        make: vehicle.make,
        model: vehicle.model,
        year: vehicle.year,
        licensePlate: vehicle.licensePlate,
        actions: (
            <div className={styles.actions}>
                <Button className="secondary" onClick={() => onEdit(vehicle.id)}>{Icons.edit}</Button>
                <Button className="secondary">{Icons.history}</Button>
                <Button className="secondary" onClick={() => handleDelete(vehicle.id)}>{Icons.delete}</Button>
            </div>
        ),

    }));

    return (
        <>  
            <Table headers={headers} data={formatedData}></Table>
            <PaginationVehicle data={dataResponse}></PaginationVehicle>
        </>

    )
}

export default TableVehicles;