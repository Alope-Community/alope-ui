import { useState } from 'react';
import { Pagination } from '../components';
import Container from './Container';

export const PaginationPage = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalItems = 42;
    const pageSize = 5;

    return (
        <Container title='Pagination Component' description='A reusable pagination component with support for custom rendering, linking, and mobile view.'>

            {/* Basic Pagination Example */}
            <section>
                <h2 className="text-xl font-semibold dark:text-white mb-2">Basic Pagination</h2>
                <Pagination
                    currentPage={currentPage}
                    count={totalItems}
                    pageSize={pageSize}
                    onPageChange={(page) => setCurrentPage(page)}
                />
                <p className="mt-2 text-sm text-gray-500 dark:text-white">Current Page: {currentPage}</p>
            </section>

            {/* Simplified */}
            <section>
                <h2 className="text-xl font-semibold dark:text-white mb-2">Simplified</h2>
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
                <h2 className="text-xl font-semibold dark:text-white mb-2">Custom Icons</h2>
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
                <h2 className="text-xl font-semibold dark:text-white mb-2">Link Mode</h2>
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
                <h2 className="text-xl font-semibold dark:text-white mb-2">Simplified With Range</h2>
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
                <h2 className="text-xl font-semibold dark:text-white mb-2">Sibling Count</h2>
                <Pagination
                    currentPage={currentPage}
                    totalPages={10}
                    siblingCount={2}
                    onPageChange={setCurrentPage}
                />
            </section>

            {/* Different Sizes */}
            <section>
                <h2 className="text-xl font-semibold dark:text-white mb-2">Sizes</h2>
                <div className="space-y-4">
                    {(['sm', 'md', 'lg'] as const).map(size => (
                        <div key={size}>
                            <h4 className="font-semibold dark:text-white capitalize mb-2">{size} size</h4>
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

        </Container>
    );
};

export default PaginationPage;
