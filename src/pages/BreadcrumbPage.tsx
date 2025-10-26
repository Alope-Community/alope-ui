import { Breadcrumb } from "../components"
import Container from "./Container";

const BreadcrumbPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Laptops' },
  ];

  const breadcrumbItemsWithIcons = [
    {
      label: 'Home',
      path: '/',
      icon: (<p>🏠</p>),
    },
    {
      label: 'Products',
      path: '/products',
      icon: (<p>🛍️</p>),
    },
    {
      label: 'Laptops',
      icon: (<p>💻</p>),
    },
  ];

  return (
    <Container title="Breadcrumb Component" description="Used to show the user's current location within a site's navigation hierarchy.">

      {/* Basic */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold dark:text-white">Basic Example Breadcrumb</h2>
        <div className="flex flex-wrap gap-4">
          <Breadcrumb
            data={breadcrumbItems}
          />
        </div>
      </div>

      {/* With Custom Separator */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold dark:text-white">With Custom Separator</h2>
        <div className="flex flex-wrap gap-4">
          <Breadcrumb
            data={breadcrumbItems}
            separator={<div>/</div>}
          />
        </div>
      </div>

      {/* With Custom ClassName */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold dark:text-white">With Custom Class</h2>
        <div className="flex flex-wrap gap-4">
          <Breadcrumb
            data={breadcrumbItems}
            linkClassName="text-info"
            separator={<div>/</div>}
          />
        </div>
      </div>

      {/* With Custom Prefix Icon */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold dark:text-white">With Prefix Icon</h2>
        <div className="flex flex-wrap gap-4">
          <Breadcrumb
            data={breadcrumbItemsWithIcons}
            linkClassName="text-info"
            separator={<div>/</div>}
          />
        </div>
      </div>

    </Container>
  )
}

export default BreadcrumbPage