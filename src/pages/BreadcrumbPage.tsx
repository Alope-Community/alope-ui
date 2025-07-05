import { Breadcrumb } from "../components"

const BreadcrumbPage = () => {

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Laptops' },
  ];

  return (
    <div className="p-10 space-y-10">
      <h1 className="text-3xl font-bold">Breadcrumb Component Documentation</h1>

      {/* Basic */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Basic Example Breadcrumb</h2>
        <div className="flex flex-wrap gap-4">
          <Breadcrumb
            data={breadcrumbItems}
          />
        </div>
      </div>

      {/* With Custom Separator */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">With Custom Separator</h2>
        <div className="flex flex-wrap gap-4">
          <Breadcrumb
            data={breadcrumbItems}
            separator={<div>/</div>}
          />
        </div>
      </div>

      {/* With Custom ClassName */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">With Custom Class</h2>
        <div className="flex flex-wrap gap-4">
          <Breadcrumb
            data={breadcrumbItems}
            linkClassName="text-info"
            separator={<div>/</div>}
          />
        </div>
      </div>

    </div>
  )
}

export default BreadcrumbPage