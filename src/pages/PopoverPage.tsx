import Container from "./Container";
import { Popover, Button, Avatar } from "../components";

function PopoverPage() {
  return (
    <Container
      title="Popover Component"
      description="Used to trigger an action or event when clicked."
    >
      {/* Default Popover */}
      <Popover
        title="Default Popover"
        content="This is the default popover, suitable for displaying brief information."
      >
        <div className="flex flex-wrap gap-2">
          <Button variant="solid">Default Popover</Button>
        </div>
      </Popover>

      {/* Popovers placements */}
      <div className="flex flex-wrap gap-2 mt-4">
        <Popover
          placement="top"
          title="Top Popover"
          content="This popover appears above the button."
        >
          <Button variant="solid" variantType="secondary">
            Popover on top
          </Button>
        </Popover>

        <Popover
          placement="right"
          title="Right Popover"
          content="This popover appears to the right of the button."
        >
          <Button variant="solid" variantType="secondary">
            Popover on right
          </Button>
        </Popover>

        <Popover
          placement="bottom"
          title="Bottom Popover"
          content="This popover appears below the button."
        >
          <Button variant="solid" variantType="secondary">
            Popover on bottom
          </Button>
        </Popover>

        <Popover
          placement="left"
          title="Left Popover"
          content="This popover appears to the left of the button."
        >
          <Button variant="solid" variantType="secondary">
            Popover on left
          </Button>
        </Popover>
      </div>

      {/* Trigger types */}
      <div className="flex flex-wrap gap-2 mt-4">
        <Popover
          title="Click Popover"
          content="Click the button to display the popover."
        >
          <Button>Click popover</Button>
        </Popover>

        <Popover
          trigger="hover"
          title="Hover Popover"
          content="Hover over the button to display the popover."
        >
          <Button>Hover popover</Button>
        </Popover>
      </div>

      {/* Arrow options */}
      <div className="flex flex-wrap gap-2 mt-4">
        <Popover
          arrow="arrow"
          title="Arrow Popover"
          content="This popover has a pointing arrow."
        >
          <Button>Arrow popover</Button>
        </Popover>

        <Popover
          arrow="no-arrow"
          title="No Arrow Popover"
          content="This popover does not have an arrow."
        >
          <Button>No arrow popover</Button>
        </Popover>
      </div>

      {/* Offset examples */}
      <div className="flex flex-wrap gap-2 mt-4">
        <Popover title="Default Offset" content="The default offset is 8px.">
          <Button>Default offset popover</Button>
        </Popover>

        <Popover
          offset="16"
          title="Custom Offset"
          content="This popover uses a custom 16px offset."
        >
          <Button>Custom offset popover</Button>
        </Popover>
      </div>

      {/* Custom popover */}
      <Popover
        content={
          <div className="flex flex-col gap-3 w-64 max-w-full p-4 bg-white dark:bg-gray-900">
            <div className="flex items-center gap-3">
              <Avatar fallbackName="John Doe" />
              <div className="flex flex-col truncate">
                <span className="font-semibold text-gray-900 dark:text-gray-100 truncate">
                  Jane Doe
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 truncate">
                  @janedoe
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 truncate">
              Frontend developer passionate about React and UI design.
            </p>
            <div className="flex justify-between mt-2 text-sm text-gray-700 dark:text-gray-300">
              <div>
                <span className="font-semibold">120</span> Posts
              </div>
              <div>
                <span className="font-semibold">450</span> Followers
              </div>
            </div>
            <Button variant="solid" variantType="info">
              Follow
            </Button>
          </div>
        }
        offset="8"
      >
        <Button variant="solid">Custom Popover</Button>
      </Popover>

      {/* Dismissible popover */}
      <div className="flex flex-wrap gap-2 mt-4">
        <Popover
          title="Dismissible Popover"
          content="This popover can be closed by clicking outside."
          dismissible
        >
          <Button variant="solid" variantType="error">
            Dismissible popover
          </Button>
        </Popover>
      </div>

      {/* Disabled popover */}
      <div className="flex flex-wrap gap-2 mt-4">
        <Popover
          title="Disabled Popover"
          content="This popover is disabled because the button is inactive."
          disabled
        >
          <Button variant="solid">Disabled button popover</Button>
        </Popover>
      </div>
    </Container>
  );
}

export default PopoverPage;
