import { Textarea } from '../components'
import Container from './Container'

const TextareaPage = () => {

  return (
    <Container title='Textarea Component' description='Used for entering longer blocks of text.'>

      {/* Basic */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold dark:text-white">Basic Example</h2>
        <div className="p-4">
          <Textarea id="basic" name="basic" placeholder="Type your message..." />
        </div>
      </div>

      {/* With Label */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold dark:text-white">With Label</h2>
        <div className="p-4">
          <Textarea autoResize id="with-label" name="with-label" label="Address" placeholder="Country Road No. 123" />
        </div>
      </div>

      {/* With Error */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold dark:text-white">With Error</h2>
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
        <h2 className="text-xl font-semibold dark:text-white">Disabled</h2>
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

    </Container>
  )
}

export default TextareaPage
