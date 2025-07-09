import { Breadcrumb } from "../components"

const BreadcrumbPage = () => {

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Laptops' },
  ];

  return (
    <div className="p-10 space-y-12 min-h-screen">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Breadcrumb Component</h1>
        <p className="text-lg text-gray-600 mt-2">
          Used to show the user's current location within a site's navigation hierarchy.
        </p>
      </header>

      <div className="max-w-4xl mx-auto space-y-10">

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
    </div>
  )
}

export default BreadcrumbPage