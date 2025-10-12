import { Grid, GridItem } from "../components";
import Container from "./Container";

const GridPage = () => {
  return (
    <Container title="Grid Component" description="Create a grid layouts.">

      <h2 className="text-xl font-semibold dark:text-white mb-2">Basic Usage</h2>
      <Grid cols={5} gap={4}>
        <GridItem className="bg-gray-300 dark:bg-gray-600 dark:text-white p-4 rounded-lg">Item 1</GridItem>
        <GridItem className="bg-gray-300 dark:bg-gray-600 dark:text-white p-4 rounded-lg">Item 2</GridItem>
        <GridItem className="bg-gray-300 dark:bg-gray-600 dark:text-white p-4 rounded-lg">Item 3</GridItem>
        <GridItem className="bg-gray-300 dark:bg-gray-600 dark:text-white p-4 rounded-lg">Item 4</GridItem>
        <GridItem className="bg-gray-300 dark:bg-gray-600 dark:text-white p-4 rounded-lg">Item 6</GridItem>
        <GridItem colSpan={2} className="bg-gray-500 dark:dark:bg-gray-700 text-white p-4 rounded-lg">Item 5 (col-span-2)</GridItem>
        <GridItem className="bg-gray-300 dark:bg-gray-600 dark:text-white p-4 rounded-lg">Item 7</GridItem>
        <GridItem colSpan={4} className="bg-gray-500 dark:dark:bg-gray-700 text-white p-4 rounded-lg">Item 8 (col-span-4)</GridItem>
      </Grid>

      <h2 className="text-xl font-semibold dark:text-white mb-2">Responsive Layout</h2>
      <Grid cols={{ base: 1, md: 3, lg: 4 }} gap={{ base: 2, md: 4 }}>
        <GridItem colSpan={{ base: 1, md: 2 }} className="bg-gray-300 dark:bg-gray-600 dark:text-white p-4 rounded-lg">Item 1</GridItem>
        <GridItem className="bg-gray-300 dark:bg-gray-600 dark:text-white p-4 rounded-lg">Item 2</GridItem>
        <GridItem className="bg-gray-300 dark:bg-gray-600 dark:text-white p-4 rounded-lg">Item 3</GridItem>
        <GridItem colSpan={{ base: 1, md: 2 }} className="bg-gray-300 dark:bg-gray-600 dark:text-white p-4 rounded-lg">Item 4</GridItem>
      </Grid>

    </Container>
  );
};

export default GridPage;
