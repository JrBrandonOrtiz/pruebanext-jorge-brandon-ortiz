import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { VehicleService } from "@/app/infrastructure/services/vehicle.service";
import VehiclesPageTemplate from "@/ui/template/dashboardTemplate/DashboardTemplate";

interface IProps {
    searchParams: {
        page: string;
        size: string;
        name: string;
    };
}

export const generateMetadata = async ({ searchParams }: IProps) => {
    const page = searchParams.page ?? 1;

    return {
        title: `Vehículos ${page}`,
        description: "Transports Solutions",
    };
};

export default async function VehiclesPage({ searchParams }: IProps) {
    const session = await getServerSession(authOptions);
    if (!session) {
        redirect("/login");
    }

    const service = new VehicleService();
    const page = searchParams.page ? parseInt(searchParams.page) : 1;
    const size = searchParams.size ? parseInt(searchParams.size) : 4;
    const data = await service.find(page, size);

    console.log(data);    
    
    return (
        <div>
            <VehiclesPageTemplate dataResponse={data}></VehiclesPageTemplate>
        </div>
    )
}