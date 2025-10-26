import { TextInput } from "../components"
import Container from "./Container"

const TextInputPage = () => {
  return (
    <Container title="Text Input Component" description="Used to allow users to enter text information.">

      {/* Basic */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold dark:text-white">Basic Example</h2>
        <div className="p-4">
          <TextInput id="basic" name="basic" placeholder="Enter text here" />
        </div>
      </div>

      {/* With Label */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold dark:text-white">With Label</h2>
        <div className="p-4">
          <TextInput id="with-label" name="with-label" label="Your Name" placeholder="John Doe" />
        </div>
      </div>

      {/* With Error */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold dark:text-white">With Error</h2>
        <div className="p-4">
          <TextInput id="with-error" name="with-error" label="Email Address" placeholder="you@example.com" error="Please enter a valid email." />
        </div>
      </div>

      {/* Disabled */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold dark:text-white">Disabled</h2>
        <div className="p-4">
          <TextInput id="disabled" name="disabled" label="Disabled Input" placeholder="You can't type here" disabled />
        </div>
      </div>

    </Container>
  )
}

export default TextInputPage
