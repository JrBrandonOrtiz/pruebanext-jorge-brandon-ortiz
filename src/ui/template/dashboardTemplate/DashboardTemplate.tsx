"use client";
import { IVehicleResponse } from "@/app/core/application/dto/vehicles/vehicleRps";
import styles from '../template.module.scss';
import Title from "@/ui/atoms/Title";
import TableVehicles from "@/ui/organisms/tablex/Tablex";
import VehicleForm from "@/ui/organisms/formVehicle/FormVehicle";
import Panel from "@/ui/organisms/panel/Panel";

interface IProps {
    dataResponse: IVehicleResponse;
}


const VehiclesPageTemplate: React.FC<IProps> = ({ dataResponse }) => {

    const handleEdit = (id : number) => {
        console.log('editando', id);
        
    };


    return(
        <div className={styles.container}>
            <Title className={styles.title} level={1}>Gestión de vehículos</Title>
            <Panel></Panel>
            <TableVehicles dataResponse={dataResponse} onEdit={handleEdit}></TableVehicles>
        </div>
    )
}

export default VehiclesPageTemplate;