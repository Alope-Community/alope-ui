import { useNavigate } from "react-router-dom";
import { Button, Skeleton } from "../components";

const animodes = ["flash", "shimmer"] as const;
const sizes = [
  { width: "100px", height: "20px", label: "Small Line" },
  { width: "200px", height: "20px", label: "Large Line" },
  { width: "100px", height: "100px", label: "Square Box" },
] as const;

function SkeletonPage() {
  const navigate = useNavigate();

  return (
    <div className="p-10 space-y-12 bg-white min-h-screen bg-gradient-to-br from-primary/25 via-white to-blue-100">

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
        }
      >
        Back
      </Button>

      {/* Header */}
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Skeleton Component</h1>
        <p className="text-lg text-gray-600 mt-2">
          Used to display placeholder loading states while content is being fetched or processed.
        </p>
      </header>

      {/* Basic Example */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Basic Usage</h2>
        <div className="flex flex-col gap-2">
          <Skeleton width="200px" height="20px" />
          <Skeleton width="150px" height="20px" />
          <Skeleton width="100px" height="20px" />
        </div>
      </section>

      {/* Animation Modes */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Animation Modes</h2>
        <div className="flex flex-wrap gap-6">
          {animodes.map((mode) => (
            <div key={mode} className="flex flex-col items-center space-y-2">
              <Skeleton animode={mode} width="150px" height="20px" />
              <span className="text-sm text-gray-500">{mode}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Rounded Property */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Rounded Property</h2>
        <div className="flex flex-wrap gap-10 items-center">
          <div className="flex flex-col items-center space-y-2">
            <Skeleton width="80px" height="80px" rounded animode="shimmer" />
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Custom Sizes</h2>
        <div className="flex flex-wrap gap-10">
          {sizes.map((s, i) => (
            <div key={i} className="flex flex-col items-center space-y-2">
              <Skeleton width={s.width} height={s.height} animode="flash" />
              <span className="text-sm text-gray-500">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* With Children */}
      <section>
        <h2 className="text-xl font-semibold mb-2">With Children</h2>
        <Skeleton animode="shimmer">
          <p>This is a loading paragraph</p>
          <p>This is another loading line</p>
        </Skeleton>
      </section>

      {/* Loaded State */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Loaded State</h2>
        <Skeleton isLoading={false}>
          <div className="p-4 bg-green-100 rounded">
            <h3 className="font-semibold">Content Loaded 🎉</h3>
            <p>
              When <code>isLoading=false</code>, children will be rendered instead of skeletons.
            </p>
          </div>
        </Skeleton>
      </section>
    </div>
  );
}

export default SkeletonPage;
