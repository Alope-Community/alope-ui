import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, Button } from '../components';
import type { Column } from '../components/Table/Table';

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
        <div className="p-10 space-y-12 min-h-screen bg-gradient-to-br from-primary/25 via-white to-blue-100">

            {/* Back Button */}
            <Button
                onClick={() => navigate(-1)}
                className="absolute top-10 left-10 flex items-center gap-2"
                prefixIcon={
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                }>
                Back
            </Button>

            {/* Header */}
            <header className="text-center">
                <h1 className="text-4xl font-bold text-gray-800">Table Component</h1>
                <p className="text-lg mt-2 text-gray-600">
                    A flexible and reusable table component with support for selection, sticky headers, custom rendering, and more.
                </p>
            </header>

            <div className="max-w-6xl mx-auto space-y-16">

                {/* Size */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Size</h2>
                    <div className="space-y-6">
                        {(['sm', 'md', 'lg'] as const).map(size => (
                            <div key={size}>
                                <h3 className="text-lg font-semibold mb-2">Size: {size}</h3>
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
                    <h2 className="text-2xl font-semibold mb-4">Striped Rows</h2>
                    <Table
                        size="sm"
                        striped
                        columns={columns}
                        data={data}
                    />
                </section>

                {/* Stripe Color */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Stripe Color</h2>
                    <Table
                        size="sm"
                        striped
                        stripeColor="bg-blue-300"
                        dataRowClassName='hover:bg-blue-500 hover:text-white'
                        headerClassName='bg-blue-500 text-white'
                        columns={columns}
                        data={data}
                    />
                </section>

                {/* Sticky Header */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Sticky Header</h2>
                    <Table
                        size="sm"
                        stickyHeader
                        columns={columns}
                        data={Array.from({ length: 3 }, () => data).flat()}
                        headerClassName="bg-white shadow"
                    />
                </section>

                {/* Selectable Rows */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Selectable Rows</h2>
                    <Table
                        size="sm"
                        striped
                        selectable
                        stickyHeader
                        columns={columns}
                        data={data}
                        selectedRows={selectedPeople}
                        onSelectionChange={setSelectedPeople}
                        headerClassName="bg-primary text-white"
                        dataRowClassName="hover:bg-primary-700 hover:text-white"
                        stripeColor="bg-primary/75 text-white"
                    />
                    <div className="mt-4">
                        <h3 className="text-lg font-bold">Selected Users</h3>
                        <pre className="mt-1 p-3 bg-gray-100 rounded text-sm text-gray-700">
                            {JSON.stringify(selectedPeople.map(p => p.name), null, 2)}
                        </pre>
                    </div>
                </section>

                {/* Bordered Example */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Bordered Table</h2>
                    <Table
                        size="sm"
                        striped
                        stickyHeader
                        stripeColor="bg-primary/75 text-white"
                        columns={columns}
                        data={data}
                        headerClassName="bg-primary text-white outline outline-white"
                        dataRowClassName="hover:bg-primary-700 hover:text-white"
                        dataColumnClassName="outline-primary outline"
                    />
                </section>

                {/* Custom Empty State */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Empty Data</h2>
                    <Table
                        size="sm"
                        columns={columns}
                        data={[]}
                        customEmptyData={
                            <div className="text-center text-gray-500 py-6">
                                Huft, No Data. 😓
                            </div>
                        }
                    />
                </section>

                {/* Caption & Position */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Table Caption</h2>
                    <Table
                        size="sm"
                        columns={columns}
                        data={data}
                        caption="Active Users"
                        captionPosition="top"
                        captionClassName="text-primary"
                    />
                </section>

            </div>
        </div>
    );
}
