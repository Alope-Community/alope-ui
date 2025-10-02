import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, Button } from '../components';
import type { Column } from '../components/Table/Table';
import Container from './Container';

export default function TablePage() {
    const navigate = useNavigate();

    type Person = {
        id: number;
        name: string;
        email: string;
        age: number;
        actions?: React.ReactNode;
    };

    const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);

    const data: Person[] = Array.from({ length: 5 }, (_, i) => ({
        id: i + 1,
        name: ['Tony', 'Steve', 'Peter'][i % 3],
        email: ['tony@stark.com', 'steve@rogers.com', 'peter@parker.com'][i % 3],
        age: [35, 33, 21][i % 3],
    }));

    const columns: Column<Person>[] = [
        { header: 'Name', accessor: 'name' },
        { header: 'Email', accessor: 'email' },
        { header: 'Age', accessor: 'age' },
        {
            header: 'Action',
            accessor: 'actions',
            render: (_, row) => (
                <button
                    onClick={() => alert(`Detail: ${row.name}`)}
                    className="px-2 py-1 text-xs rounded bg-blue-500 text-white hover:bg-blue-600"
                >
                    Info
                </button>
            ),
        },
    ];

    return (
        <Container title='Table Component' description='A flexible and reusable table component with support for selection, sticky headers, custom rendering, and more.'>

            {/* Size */}
            <section>
                <h2 className="text-2xl font-semibold dark:text-white mb-4">Size</h2>
                <div className="space-y-6">
                    {(['sm', 'md', 'lg'] as const).map(size => (
                        <div key={size}>
                            <h3 className="text-lg font-semibold dark:text-white mb-2">Size: {size}</h3>
                            <Table
                                size={size}
                                columns={columns}
                                data={data}
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Striped */}
            <section>
                <h2 className="text-2xl font-semibold dark:text-white mb-4">Striped Rows</h2>
                <Table
                    size="sm"
                    striped
                    columns={columns}
                    data={data}
                />
            </section>

            {/* Stripe Color */}
            <section>
                <h2 className="text-2xl font-semibold dark:text-white mb-4">Stripe Color</h2>
                <Table
                    size="sm"
                    striped
                    stripeColor="bg-blue-300 dark:bg-info-dark-700"
                    dataRowClassName='hover:bg-blue-500 hover:text-white dark:hover:bg-info-dark'
                    headerClassName='bg-blue-500 text-white dark:bg-info-dark-700'
                    columns={columns}
                    data={data}
                />
            </section>

            {/* Sticky Header */}
            <section>
                <h2 className="text-2xl font-semibold dark:text-white mb-4">Sticky Header</h2>
                <Table
                    size="sm"
                    stickyHeader
                    columns={columns}
                    data={Array.from({ length: 3 }, () => data).flat()}
                />
            </section>

            {/* Selectable Rows */}
            <section>
                <h2 className="text-2xl font-semibold dark:text-white mb-4">Selectable Rows</h2>
                <Table
                    size="sm"
                    striped
                    selectable
                    stickyHeader
                    columns={columns}
                    data={data}
                    selectedRows={selectedPeople}
                    onSelectionChange={setSelectedPeople}
                    headerClassName="bg-primary text-white dark:bg-primary-dark-700"
                    dataRowClassName="hover:bg-primary-700 hover:text-white hover:dark:bg-primary-dark"
                    stripeColor="bg-primary/75 text-white dark:bg-primary-dark-700"
                />
                <div className="mt-4">
                    <h3 className="text-lg font-bold dark:text-white">Selected Users</h3>
                    <pre className="mt-1 p-3 bg-gray-100 dark:bg-secondary-dark-700 rounded text-sm text-gray-700 dark:text-white">
                        {JSON.stringify(selectedPeople.map(p => p.name), null, 2)}
                    </pre>
                </div>
            </section>

            {/* Bordered Example */}
            <section>
                <h2 className="text-2xl font-semibold dark:text-white mb-4">Bordered Table</h2>
                <Table
                    size="sm"
                    striped
                    stickyHeader
                    stripeColor="bg-primary/75 text-white dark:bg-primary-dark-700"
                    columns={columns}
                    data={data}
                    headerClassName="bg-primary text-white outline outline-white dark:bg-primary-700"
                    dataRowClassName="hover:bg-primary-700 hover:text-white"
                    dataColumnClassName="outline-primary outline"
                />
            </section>

            {/* Custom Empty State */}
            <section>
                <h2 className="text-2xl font-semibold dark:text-white mb-4">Empty Data</h2>
                <Table
                    size="sm"
                    columns={columns}
                    data={[]}
                    customEmptyData={
                        <div className="text-center text-gray-500 py-6 dark:text-white">
                            Huft, No Data. 😓
                        </div>
                    }
                />
            </section>

            {/* Caption & Position */}
            <section>
                <h2 className="text-2xl font-semibold dark:text-white mb-4">Table Caption</h2>
                <Table
                    size="sm"
                    columns={columns}
                    data={data}
                    caption="Active Users"
                    captionPosition="top"
                    captionClassName="text-primary"
                />
            </section>

        </Container>
    );
}
