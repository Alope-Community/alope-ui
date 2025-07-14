import { useNavigate } from "react-router-dom"
import { Button, TextInput } from "../components"

const TextInputPage = () => {
  const navigate = useNavigate()

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
        <h1 className="text-4xl font-bold text-gray-800">Text Input Component</h1>
        <p className="text-lg text-gray-600 mt-2">
          Used to allow users to enter text information.
        </p>
      </header>

      <div className="max-w-4xl mx-auto space-y-10">

        {/* Basic */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Basic Example</h2>
          <div className="p-4">
            <TextInput id="basic" name="basic" placeholder="Enter text here" />
          </div>
        </div>

        {/* With Label */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">With Label</h2>
          <div className="p-4">
            <TextInput id="with-label" name="with-label" label="Your Name" placeholder="John Doe" />
          </div>
        </div>

        {/* With Error */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">With Error</h2>
          <div className="p-4">
            <TextInput id="with-error" name="with-error" label="Email Address" placeholder="you@example.com" error="Please enter a valid email." />
          </div>
        </div>

        {/* Disabled */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Disabled</h2>
          <div className="p-4">
            <TextInput id="disabled" name="disabled" label="Disabled Input" placeholder="You can't type here" disabled />
          </div>
        </div>

      </div>
    </div>
  )
}

export default TextInputPage
