import { Skeleton } from "../components";
import Container from "./Container";

const animodes = ["flash", "shimmer"] as const;
const sizes = [
  { width: "100px", height: "20px", label: "Small Line" },
  { width: "200px", height: "20px", label: "Large Line" },
  { width: "100px", height: "100px", label: "Square Box" },
] as const;

function SkeletonPage() {

  return (
    <Container title="Skeleton Component" description="Used to display placeholder loading states while content is being fetched or processed.">

      {/* Basic Example */}
      <section>
        <h2 className="text-xl font-semibold dark:text-white mb-2">Basic Usage</h2>
        <div className="flex flex-col gap-2">
          <Skeleton width="200px" height="20px" />
          <Skeleton width="150px" height="20px" />
          <Skeleton width="100px" height="20px" />
        </div>
      </section>

      {/* Animation Modes */}
      <section>
        <h2 className="text-xl font-semibold dark:text-white mb-2">Animation Modes</h2>
        <div className="flex flex-wrap gap-6">
          {animodes.map((mode) => (
            <div key={mode} className="flex flex-col items-center space-y-2">
              <Skeleton animode={mode} width="150px" height="20px" />
              <span className="text-sm dark:text-white text-gray-500">{mode}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Rounded Property */}
      <section>
        <h2 className="text-xl font-semibold dark:text-white mb-2">Rounded Property</h2>
        <div className="flex flex-wrap gap-10 items-center">
          <div className="flex flex-col items-center space-y-2">
            <Skeleton width="80px" height="80px" rounded animode="shimmer" />
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section>
        <h2 className="text-xl font-semibold dark:text-white mb-2">Custom Sizes</h2>
        <div className="flex flex-wrap gap-10">
          {sizes.map((s, i) => (
            <div key={i} className="flex flex-col items-center space-y-2">
              <Skeleton width={s.width} height={s.height} animode="flash" />
              <span className="text-sm dark:text-white text-gray-500">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* With Children */}
      <section>
        <h2 className="text-xl font-semibold dark:text-white mb-2">With Children</h2>
        <Skeleton animode="shimmer">
          <p>This is a loading paragraph</p>
          <p>This is another loading line</p>
        </Skeleton>
      </section>

      {/* Loaded State */}
      <section>
        <h2 className="text-xl font-semibold dark:text-white mb-2">Loaded State</h2>
        <Skeleton isLoading={false}>
          <div className="p-4 bg-green-100 dark:bg-secondary-dark-700 rounded">
            <h3 className="font-semibold dark:text-white">Content Loaded 🎉</h3>
            <p className="dark:text-white">
              When <code>isLoading=false</code>, children will be rendered instead of skeletons.
            </p>
          </div>
        </Skeleton>
      </section>

    </Container>
  );
}

export default SkeletonPage;
