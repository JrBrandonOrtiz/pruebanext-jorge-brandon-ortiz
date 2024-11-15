import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { CustomSession } from '@/app/api/auth/[...nextauth]/route';
import { signOut } from "next-auth/react";
import { Icons } from "@/ui/atoms";
import styles from './sidebar.module.scss';
import Button from "@/ui/atoms/button/Button";
import Title from "@/ui/atoms/Title";
import Paragraph from '@/ui/atoms/Paragraph';

const Sidebar: React.FC = () => {
    const { data: session } = useSession();
    const sessionUser = session as CustomSession;

    const handleSignOut = async () => {
        await signOut({
            callbackUrl: '/'
        });
    };

    return (
        <aside className={styles.aside}>
            <div className={styles.header}>
                <Title level={3} className={styles.title}>Transports Solutions</Title>
            </div>
            <div className={styles.user}>
                <span>{Icons.user}</span>
                <Paragraph>{sessionUser.user.email}</Paragraph>
            </div>
            <div className={styles.options}>
                <div className={styles.itemCar}>
                    <Button className="secondary-icons-big-secondary">{Icons.car} Vehículos</Button>
                </div>
                <div className={styles.item}>
                    <Button className="secondary-icons-big" onClick={handleSignOut}>{Icons.logOut} Cerrar sesión</Button>
                </div>

            </div>
        </aside>
    )
}

export default Sidebar;