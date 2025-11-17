import { useState } from 'react';
import { Table } from '../components';
import type { Column } from '../components/Table/Table';
import Container from './Container';

export default function TablePage() {
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

            {/* Variants */}
            <section>
                <h2 className="text-2xl font-semibold dark:text-white mb-4">Variants</h2>
                <div className="space-y-6">
                    {(['outline', 'solid'] as const).map(variant => (
                        <div key={variant}>
                            <h3 className="text-lg font-semibold dark:text-white mb-2">Variant: {variant}</h3>
                            <Table
                                variant={variant}
                                columns={columns}
                                data={data}
                                striped
                            />
                        </div>
                    ))}
                </div>
            </section>

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
                    striped
                    columns={columns}
                    data={data}
                />
            </section>

            {/* Sticky Header */}
            <section>
                <h2 className="text-2xl font-semibold dark:text-white mb-4">Sticky Header</h2>
                <Table
                    stickyHeader
                    columns={columns}
                    data={Array.from({ length: 10 }, (_, i) => ({ ...data[i % 5], id: i }))}
                />
            </section>

            {/* Selectable Rows */}
            <section>
                <h2 className="text-2xl font-semibold dark:text-white mb-4">Selectable Rows</h2>
                <Table
                    striped
                    selectable
                    columns={columns}
                    data={data}
                    selectedRows={selectedPeople}
                    onSelectionChange={setSelectedPeople}
                />
                <div className="mt-4">
                    <h3 className="text-lg font-bold dark:text-white">Selected Users</h3>
                    <pre className="mt-1 p-3 bg-gray-100 dark:bg-secondary-800 rounded text-sm text-gray-700 dark:text-white">
                        {JSON.stringify(selectedPeople.map(p => p.name), null, 2)}
                    </pre>
                </div>
            </section>

            {/* Custom Empty State */}
            <section>
                <h2 className="text-2xl font-semibold dark:text-white mb-4">Empty Data</h2>
                <Table
                    columns={columns}
                    data={[]}
                    customEmptyData={
                        <div className="text-center text-secondary-500 py-6 dark:text-secondary-400">
                            Huft, No Data. 😓
                        </div>
                    }
                />
            </section>

            {/* Caption & Position */}
            <section>
                <h2 className="text-2xl font-semibold dark:text-white mb-4">Table Caption</h2>
                <Table
                    columns={columns}
                    data={data}
                    caption="Active Users"
                    captionPosition="top"
                />
            </section>

        </Container>
    );
}
