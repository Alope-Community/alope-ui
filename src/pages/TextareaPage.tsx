import { useNavigate } from 'react-router-dom'
import { Button, Textarea } from '../components'

const TextareaPage = () => {
  const navigate = useNavigate()

  return (
    <div className="p-10 space-y-12 min-h-screen bg-gradient-to-br from-primary/25 via-white to-blue-100">

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
        }>
        Back
      </Button>

      {/* Header */}
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Textarea Component</h1>
        <p className="text-lg text-gray-600 mt-2">
          Used for entering longer blocks of text.
        </p>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto space-y-10">

        {/* Basic */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Basic Example</h2>
          <div className="p-4">
            <Textarea id="basic" name="basic" placeholder="Type your message..." />
          </div>
        </div>

        {/* With Label */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">With Label</h2>
          <div className="p-4">
            <Textarea autoResize id="with-label" name="with-label" label="Address" placeholder="Country Road No. 123" />
          </div>
        </div>

        {/* With Error */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">With Error</h2>
          <div className="p-4">
            <Textarea
              id="with-error"
              name="with-error"
              label="Feedback"
              placeholder="Write your feedback here..."
              error="Feedback is required."
            />
          </div>
        </div>

        {/* Disabled */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Disabled</h2>
          <div className="p-4">
            <Textarea
              id="disabled"
              name="disabled"
              label="Comment"
              placeholder="You can't type here"
              disabled
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default TextareaPage
