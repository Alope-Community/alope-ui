import { Button } from "./components"

function App() {
  return (
    <div className="flex flex-col items-start p-10 gap-5">

      <h1 className="text-3xl font-bold">Welcome to ALOPE UI Library</h1>
      
      <Button to="/button" suffixIcon={<span>→</span>}>Go to Button Docs</Button>
      <Button to="/badge" suffixIcon={<span>→</span>}>Go to Badge Docs</Button>
      <Button to="/accordion" suffixIcon={<span>→</span>}>Go to Accordion Docs</Button>
      <Button to="/alert" suffixIcon={<span>→</span>}>Go to Alert Docs</Button>
      <Button to="/breadcrumb" suffixIcon={<span>→</span>}>Go to Breadcrumb Docs</Button>
      <Button to="/card" suffixIcon={<span>→</span>}>Go to Card Docs</Button>
      <Button to="/modal" suffixIcon={<span>→</span>}>Go to Modal Docs</Button>
      <Button to="/offcanvas" suffixIcon={<span>→</span>}>Go to Offcanvas Docs</Button>
      <Button to="/toast" suffixIcon={<span>→</span>}>Go to Toast Docs</Button>
      <Button to="/text-input" suffixIcon={<span>→</span>}>Go to Text Input Docs</Button>
      <Button to="/select-input" suffixIcon={<span>→</span>}>Go to Select Input Docs</Button>
      <Button to="/radio-input" suffixIcon={<span>→</span>}>Go to Radio Input Docs</Button>
      <Button to="/checkbox-input" suffixIcon={<span>→</span>}>Go to Checkbox Input Docs</Button>
      
    </div>
  )
}

export default App
