import { useNavigate } from "react-router-dom";
import { Breadcrumb, Button } from "../components"

const BreadcrumbPage = () => {
  const navigate = useNavigate()

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Laptops' },
  ];

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