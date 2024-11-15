import Title from '@/ui/atoms/Title';
import styles from './table.module.scss';

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
    headers: { label: string; key: string }[];
    data: { [key: string]: unknown | JSX.Element }[];
}

const Table: React.FC<TableProps> = ({ headers, data, className, ...props }) => {
    return (
        <div className={styles.container}>
            <table className={styles.table} {...props}>
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index}>{header.label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {headers.map((header, colIndex) => (
                                <td key={colIndex}>
                                    {row[header.key] as React.ReactNode}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;