"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import { ILoginRequest } from "@/app/core/application/dto/auth/login-request.dto";
import { FormField } from "@/ui/molecules/common/FormField";
import Button from "@/ui/atoms/button/Button";
import Title from "@/ui/atoms/Title";
import Paragraph from "@/ui/atoms/Paragraph";
import { Icons } from "@/ui/atoms";
import styles from "./Loginform.module.scss";

const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email('El correo es inválido')
        .required('Campo obligatorio'),
    password: yup
        .string()
        .required('La contraseña es obligatoria')
});

const LoginForm = () => {
    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<ILoginRequest>({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver: yupResolver(loginSchema)
    });

    const handleLogin = async (data: ILoginRequest) => {
        console.log(data);
        try {
            const result = await signIn("credentials", {
                redirect: false,
                email: data.email,
                password: data.password
            });

            console.log(result);

            if (result?.error) {
                console.log('Ocurrió un error', JSON.parse(result.error));
                return;
            }

            router.push('/dashboard');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles.containerForm}>
            <div className={styles.headerForm}>
                <span className={styles.icon}>{Icons.car}</span>
                <Title className={styles.title} level={2}>Transport Solutions S.A</Title>
                <div className={styles.description}>
                    <Paragraph className={styles.paragraph}>
                        Inicia sesión en tu cuenta y gestiona tu flota de vehículos
                    </Paragraph>
                </div>
            </div>

            <form className={styles.form} onSubmit={handleSubmit(handleLogin)}>
                <FormField<ILoginRequest>
                    control={control}
                    type="email"
                    label="Correo electrónico"
                    name="email"
                    error={errors.email}
                    placeholder="Ingresa tu correo electrónico"
                />

                <FormField<ILoginRequest>
                    control={control}
                    type="password"
                    label="Contraseña"
                    name="password"
                    error={errors.password}
                    placeholder="Ingresa tu contraseña"
                />

                <div className={styles.containerButton}>
                    <Button className="primary-icons" type="submit">
                        {Icons.lock} Iniciar sesión
                    </Button>
                </div>
            </form>

            <div className={styles.footerForm}>
                <Paragraph>¿Problemas para iniciar sesión?</Paragraph>
                <Paragraph> Contacta al administrador del sistema</Paragraph>
            </div>
        </div>
    );
};

export default LoginForm;
