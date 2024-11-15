import { FiBarChart } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { IoCarOutline } from "react-icons/io5";
import { MdLockOutline } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { MdHistory } from "react-icons/md";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { CiTrash } from "react-icons/ci";
import { FiEdit3 } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import { FaRegFolderOpen } from "react-icons/fa";
import { GrDocumentDownload } from "react-icons/gr";
import { PiFolderOpenLight } from "react-icons/pi";

export const Icons = {
    paginationNext: <FaChevronRight />,
    paginationPrevious: <FaChevronLeft />,
    add: <IoIosAddCircleOutline size={25}/>,
    close: <IoIosClose size={35}/>,
    delete: <CiTrash size={20}/>,
    edit: <FiEdit3 size={20}/>,
    history: <MdHistory size={20} />,
    logOut: <MdLogout size={30}/>,
    folder: <FaRegFolderOpen size={30} />,
    download: <GrDocumentDownload size={23}/>,
    folderCard: <PiFolderOpenLight size={25} />,
    chart: <FiBarChart size={25}/>,
    user: <FaUserCircle size={45} color="#7692FF"/>,
    calendar: <CiCalendar size={25}/>,
    car: <IoCarOutline size={35}/>,
    lock: <MdLockOutline size={25}/>
}