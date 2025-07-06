import { Button } from "./components"

function App() {
  return (
    <div className="flex flex-col items-start p-10 gap-5">

      <h1 className="text-3xl font-bold">Welcome to ALOPE UI Library</h1>
      
      <Button to="/button" variant="solid" suffixIcon={<span>→</span>}>Go to Button Docs</Button>
      <Button to="/badge" variant="solid" suffixIcon={<span>→</span>}>Go to Badge Docs</Button>
      <Button to="/accordion" variant="solid" suffixIcon={<span>→</span>}>Go to Accordion Docs</Button>
      <Button to="/alert" variant="solid" suffixIcon={<span>→</span>}>Go to Alert Docs</Button>
      <Button to="/breadcrumb" variant="solid" suffixIcon={<span>→</span>}>Go to Breadcrumb Docs</Button>
      <Button to="/card" variant="solid" suffixIcon={<span>→</span>}>Go to Card Docs</Button>
      <Button to="/modal" variant="solid" suffixIcon={<span>→</span>}>Go to Modal Docs</Button>
      
    </div>
  )
}

export default App
