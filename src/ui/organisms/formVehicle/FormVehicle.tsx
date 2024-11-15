'use client';
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { FormField } from "@/ui/molecules/common/FormField";
import { FormFileField } from "@/ui/molecules/common/File";
import Button from "@/ui/atoms/button/Button";
import { IVehicleRequest } from "@/app/core/application/dto/vehicles/vehiclerequest";
import Title from "@/ui/atoms/Title";
import Paragraph from "@/ui/atoms/Paragraph";
import styles from "./FormVehicle.module.scss";

interface IProps {
    closeModal: () => void;
    projectID?: number;
}


const vehicleSchema = yup.object().shape({
    make: yup
        .string()
        .required('El campo es obligatorio.'),
    model: yup
        .string()
        .required('El campo es obligatorio.'),

    year: yup
        .string()
        .required('El campo es obligatorio.'),

    licensePlate: yup
        .string()
        .required('El campo es obligatorio.'),

    photo: yup
        .mixed<File>()
        .nullable()
        .required('El campo es obligatorio.')

});
const VehicleForm = ({closeModal}: IProps) => {
    const router = useRouter();
    const { control, handleSubmit, setError, formState: { errors } } = useForm<IVehicleRequest>({ mode: "onChange", reValidateMode: "onChange", resolver: yupResolver(vehicleSchema) });
    
    const handleRegister = async (data: IVehicleRequest) => {
        try {
            const formData = new FormData();
            formData.append("make", data.make);
            formData.append("model", data.model);
            formData.append("year", data.year.toString());
            formData.append("licensePlate", data.licensePlate);
    
            if (data.file instanceof File) {
                formData.append("file", data.file);
            } else {
                throw new Error("La foto no es un archivo válido");
            }
    
            const response = await fetch("/api/vehicle/post", {
                method: "POST",
                body: formData,
            });
    
            if (!response.ok) {
                throw new Error("Error al registrar el vehículo");
            }
    
            console.log("Vehículo registrado exitosamente.");
            router.refresh();
            closeModal();
    
            return await response.json();
        } catch (error) {
            console.error("Error al registrar vehículo:", error);
        }
    };
    
    return (
        <form className={styles.vehicleForm} onSubmit={handleSubmit(handleRegister)}>
            <Title level={2} className={styles.title}>Agregar nuevo vehículo</Title>
            <FormField<IVehicleRequest>
                control={control}
                type="text"
                name="make"
                label="Marca"
                error={errors.make}
                placeholder="Ingresa la marca"
            />
            <FormField<IVehicleRequest>
                control={control}
                type="text"
                name="model"
                label=" Modelo:"
                error={errors.model}
                placeholder="Ingresa el modelo"
            />
            <FormField<IVehicleRequest>
                control={control}
                type="text"
                name="year"
                label="Año:"
                error={errors.year}
                placeholder="Ingresa el año"
            />

            <FormField<IVehicleRequest>
                control={control}
                type="text"
                name="licensePlate"
                label="Placa:"
                error={errors.licensePlate}
                placeholder="Ingresa la placa"
            />

            <FormFileField<IVehicleRequest>
                control={control}
                name="file"
                label="Foto:"
                error={errors.file}
            />
            <Button type="submit" className='primary-big'>Agregue su vehiculo</Button>
        </form>
    );
};
export default VehicleForm;