import { useState } from 'react';
import { Button, Pagination } from '../components';
import { useNavigate } from 'react-router-dom';

export const PaginationPage = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);

    const totalItems = 42;
    const pageSize = 5;

    return (
        <div className="p-10 space-y-12 min-h-screen bg-gradient-to-br from-primary/25 via-white to-blue-100">

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

            <header className="text-center">
                <h1 className="text-4xl font-bold text-gray-800">Pagination Component</h1>
                <p className="text-lg mt-2">
                    A reusable pagination component with support for custom rendering, linking, and mobile view.
                </p>
            </header>

            <div className="max-w-3xl mx-auto space-y-10">

                {/* Basic Pagination Example */}
                <section>
                    <h2 className="text-xl font-semibold mb-2">Basic Pagination</h2>
                    <Pagination
                        currentPage={currentPage}
                        count={totalItems}
                        pageSize={pageSize}
                        onPageChange={(page) => setCurrentPage(page)}
                    />
                    <p className="mt-2 text-sm text-gray-500">Current Page: {currentPage}</p>
                </section>

                {/* Simplified */}
                <section>
                    <h2 className="text-xl font-semibold mb-2">Simplified</h2>
                    <Pagination
                        simplified
                        pageSize={pageSize}
                        count={totalItems}
                        currentPage={currentPage}
                        onPageChange={(page) => setCurrentPage(page)}
                    />
                </section>

                {/* With Custom Icons */}
                <section>
                    <h2 className="text-xl font-semibold mb-2">Custom Icons</h2>
                    <Pagination
                        currentPage={currentPage}
                        count={totalItems}
                        pageSize={pageSize}
                        onPageChange={setCurrentPage}
                        prevIcon={<span>⬅️</span>}
                        nextIcon={<span>➡️</span>}
                    />
                </section>

                {/* As Links */}
                <section>
                    <h2 className="text-xl font-semibold mb-2">Link Mode</h2>
                    <Pagination
                        currentPage={currentPage}
                        count={totalItems}
                        pageSize={pageSize}
                        asLink
                        getPageHref={(page) => `?page=${page}`}
                        onPageChange={setCurrentPage}
                    />
                </section>

                {/* Simplified With Range */}
                <section>
                    <h2 className="text-xl font-semibold mb-2">Simplified With Range</h2>
                    <Pagination
                        simplified
                        currentPage={currentPage}
                        count={totalItems}
                        pageSize={pageSize}
                        format="long"
                        onPageChange={setCurrentPage}
                    />
                </section>

                {/* Custom Sibling Count */}
                <section>
                    <h2 className="text-xl font-semibold mb-2">Sibling Count</h2>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={10}
                        siblingCount={2}
                        onPageChange={setCurrentPage}
                    />
                </section>

                {/* Different Sizes */}
                <section>
                    <h2 className="text-xl font-semibold mb-2">Sizes</h2>
                    <div className="space-y-4">
                        {(['sm', 'md', 'lg'] as const).map(size => (
                            <div key={size}>
                                <h4 className="font-semibold capitalize mb-2">{size} size</h4>
                                <Pagination
                                    currentPage={currentPage}
                                    count={totalItems}
                                    pageSize={pageSize}
                                    size={size}
                                    onPageChange={setCurrentPage}
                                />
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default PaginationPage;
