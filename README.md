# ALOPE UI Library

[![npm version](https://img.shields.io/npm/v/alope-ui.svg)](https://www.npmjs.com/package/alope-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB)](https://reactjs.org/)

**ALOPE UI Library** is a modern React-based User Interface (UI) component library designed to accelerate your web development workflow. It provides a comprehensive collection of flexible, accessible, and beautifully designed components that ensure consistent user experiences across your applications.

---

## 🌟 Why Choose ALOPE UI?

- **🎨 Customizable** - Easy theming and styling with Tailwind CSS
- **⚡ Lightweight** - Tree-shakable components for optimal bundle size
- **📖 Well Documented** - Comprehensive documentation with live examples

---

## 📦 Key Features

- 🔧 **Flexible Customization** - Customize via props and Tailwind classes
- 📘 **Developer Friendly** - TypeScript support and IntelliSense

---

## 🚀 Quick Start

### Installation

**Using npm:**

```bash
npm install alope-ui
```

**Add `@import` directive(s) on your main css file:**

```css
/* index.css */

/* Make sure to import TailwindCSS first */
@import "tailwindcss";

/* Then import the styles from Alope UI */
@import "../node_modules/alope-ui/dist/index.css";
```

### Basic Setup

Import and use any component in your React application:

```jsx
import React from "react";
import { Button } from "alope-ui";

function App() {
  return (
    <div className="App">
      <Button variant="solid" variantType="primary">
        Hello ALOPE UI!
      </Button>
    </div>
  );
}

export default App;
```

### ⚠️ IMPORTANT NOTES:

If you're using the `to` prop on a `Button` (or any other component that uses SPA-style navigation), make sure you have a `react-router-dom` properly configured.
Refer to the [official documentation](https://reactrouter.com/start/declarative/installation) for setup instructions if needed.

```jsx
import React from "react";
import { Button } from "alope-ui";

function App() {
  return (
    <div className="App">
      <Button to="/button" variant="solid" variantType="primary">
        Hello I'm going to Button Page!
      </Button>
    </div>
  );
}

export default App;
```

---

## 🧩 Component Library

### Navigation Components

- [🪗 Accordion](#accordion) - Collapsible content panels
- [🍞 Breadcrumb](#breadcrumb) - Navigation trail
- [📑 Tabs](#tabs) - Tabbed navigation interface
- [📄 Pagination](#pagination) - Page navigation controls

### Feedback Components

- [⚠️ Alert](#alert) - Status messages and notifications
- [🍞 Toast](#toast) - Temporary notification messages
- [💡 Tooltip](#tooltip) - Contextual information on hover
- [⏳ Spinner](#spinner) - Loading indicators
- [💀 Skeleton](#skeleton) - Content loading placeholders

### Data Display

- [🏷️ Badge](#badge) - Status indicators and labels
- [🃏 Card](#card) - Content containers
- [📊 Table](#table) - Tabular data display
- [👤 Avatar](#avatar) - User profile images

### Form Controls

- [☑️ Checkbox Input](#checkbox-input) - Multiple choice selections
- [🔘 Radio Input](#radio-input) - Single choice selections
- [📝 Select Input](#select-input) - Dropdown selections
- [⌨️ Text Input](#text-input) - Text input fields
- [📝 Textarea](#textarea) - Multi-line text input
- [🔄 Toggle](#toggle) - Switch controls
- [📁 File Upload](#file-upload) - File selection and upload

### Interactive Elements

- [🔘 Button](#button) - Clickable actions
- [🪟 Modal](#modal) - Dialog boxes and overlays
- [📱 Offcanvas](#offcanvas) - Side panels and drawers

---

## 📖 Component Documentation

## Accordion

The Accordion component allows users to show and hide sections of related content on a page.

### Import

```jsx
import { Accordion } from "alope-ui";
```

### Props

| Prop                      | Type                 | Default     | Description                           |
| ------------------------- | -------------------- | ----------- | ------------------------------------- |
| `data`                    | `AccordionItem[]`    | `[]`        | Array of accordion items              |
| `single`                  | `boolean`            | `true`      | Allow only one panel open at a time   |
| `openIndex`               | `number \| number[]` | `undefined` | Controlled open state                 |
| `onToggleItem`            | `function`           | `undefined` | Callback when item is toggled         |
| `icon`                    | `function`           | `undefined` | Custom icon renderer                  |
| `labelClassName`          | `string`             | `""`        | Custom CSS class for labels           |
| `labelContainerClassName` | `string`             | `""`        | Custom CSS class for label containers |
| `descriptionClassName`    | `string`             | `""`        | Custom CSS class for descriptions     |

### Basic Usage

```jsx
const accordionData = [
  {
    label: "What is ALOPE UI?",
    description:
      "ALOPE UI is a modern React component library that helps you build beautiful user interfaces quickly.",
  },
  {
    label: "How do I install it?",
    description:
      "You can install ALOPE UI using npm, yarn, or pnpm. Check the installation section for details.",
  },
  {
    label: "Is it free to use?",
    description:
      "Yes! ALOPE UI is completely free and open-source under the MIT license.",
  },
];

<Accordion data={accordionData} />;
```

### Single Panel Mode

Only allows one panel to be open at a time:

```jsx
<Accordion single data={accordionData} />
```

### Multiple Panels Mode

Allows multiple panels to be open simultaneously:

```jsx
<Accordion single={false} data={accordionData} />
```

### Custom Styling

```jsx
<Accordion
  data={accordionData}
  labelClassName="font-bold text-lg"
  labelContainerClassName="bg-blue-50 border-blue-200 hover:bg-blue-100"
  descriptionClassName="bg-blue-25 text-gray-700"
/>
```

### Controlled State with Custom Icon

```jsx
const [openIndex, setOpenIndex] = useState(0);

<Accordion
  data={accordionData}
  openIndex={openIndex}
  onToggleItem={(index) => setOpenIndex(index)}
  icon={(isActive) => (
    <svg
      className={`w-5 h-5 transition-transform duration-300 ${
        isActive ? "rotate-180" : "rotate-0"
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  )}
/>;
```

---

## Alert

The Alert component displays important messages to users with different severity levels.

### Import

```jsx
import { Alert } from "alope-ui";
```

### Props

| Prop          | Type                                          | Default     | Description              |
| ------------- | --------------------------------------------- | ----------- | ------------------------ |
| `type`        | `'success' \| 'info' \| 'warning' \| 'error'` | `'info'`    | Alert severity type      |
| `title`       | `string`                                      | `""`        | Alert title              |
| `description` | `string`                                      | `""`        | Alert description        |
| `icon`        | `ReactNode`                                   | `undefined` | Custom icon              |
| `action`      | `ReactNode`                                   | `undefined` | Action button or element |
| `withClose`   | `boolean`                                     | `false`     | Show close button        |
| `onClose`     | `function`                                    | `undefined` | Close callback           |

### Basic Usage

```jsx
<Alert
  title="Welcome!"
  description="Thanks for choosing ALOPE UI for your project."
/>
```

### Alert Types

```jsx
{
  /* Success Alert */
}
<Alert
  type="success"
  title="Success!"
  description="Your changes have been saved successfully."
/>;

{
  /* Info Alert */
}
<Alert
  type="info"
  title="Information"
  description="Here's some helpful information for you."
/>;

{
  /* Warning Alert */
}
<Alert
  type="warning"
  title="Warning"
  description="Please review your input before proceeding."
/>;

{
  /* Error Alert */
}
<Alert
  type="error"
  title="Error"
  description="Something went wrong. Please try again."
/>;
```

### Alert with Custom Icon

```jsx
<Alert
  type="warning"
  title="Important Notice"
  description="This action cannot be undone."
  icon={
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
      />
    </svg>
  }
/>
```

### Alert with Action Button

```jsx
<Alert
  type="info"
  title="Update Available"
  description="A new version of the application is available."
  action={
    <Button size="sm" variantType="info">
      Update Now
    </Button>
  }
/>
```

### Dismissible Alert

```jsx
<Alert
  withClose
  type="success"
  title="Success!"
  description="Your profile has been updated successfully."
  onClose={() => console.log("Alert closed")}
/>
```

---

## Badge

The Badge component is used to display small pieces of information like status, count, or labels.

### Import

```jsx
import { Badge } from "alope-ui";
```

### Props

| Prop         | Type                                                           | Default       | Description            |
| ------------ | -------------------------------------------------------------- | ------------- | ---------------------- |
| `variant`    | `'default' \| 'success' \| 'info' \| 'warning' \| 'error'`     | `'default'`   | Badge color variant    |
| `children`   | `ReactNode`                                                    | `undefined`   | Badge content          |
| `isAbsolute` | `boolean`                                                      | `false`       | Absolute positioning   |
| `position`   | `'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left'` | `'top-right'` | Position when absolute |
| `icon`       | `ReactNode`                                                    | `undefined`   | Custom icon            |

### Basic Variants

```jsx
<div className="flex flex-wrap gap-2">
  <Badge variant="default">Default</Badge>
  <Badge variant="success">Success</Badge>
  <Badge variant="info">Info</Badge>
  <Badge variant="warning">Warning</Badge>
  <Badge variant="error">Error</Badge>
</div>
```

### Badge with Icon

```jsx
<Badge variant="success" icon={<CheckIcon className="w-4 h-4" />}>
  Verified
</Badge>
```

### Absolute Positioning

Perfect for notification indicators or status markers:

```jsx
<div className="relative inline-block">
  <Button>Messages</Button>
  <Badge variant="error" position="top-right" isAbsolute>
    3
  </Badge>
</div>
```

### All Position Examples

```jsx
<div className="grid grid-cols-2 gap-4 w-fit">
  <Card containerClassName="relative p-8">
    <Badge variant="success" position="top-left" isAbsolute>
      1
    </Badge>
    <span>Top Left</span>
  </Card>

  <Card containerClassName="relative p-8">
    <Badge variant="info" position="top-right" isAbsolute>
      2
    </Badge>
    <span>Top Right</span>
  </Card>

  <Card containerClassName="relative p-8">
    <Badge variant="warning" position="bottom-left" isAbsolute>
      3
    </Badge>
    <span>Bottom Left</span>
  </Card>

  <Card containerClassName="relative p-8">
    <Badge variant="error" position="bottom-right" isAbsolute>
      4
    </Badge>
    <span>Bottom Right</span>
  </Card>
</div>
```

---

## Breadcrumb

The Breadcrumb component provides navigation context showing the user's location within the application hierarchy.

### Import

```jsx
import { Breadcrumb } from "alope-ui";
```

### Props

| Prop            | Type               | Default | Description                    |
| --------------- | ------------------ | ------- | ------------------------------ |
| `data`          | `BreadcrumbItem[]` | `[]`    | Array of breadcrumb items      |
| `separator`     | `ReactNode`        | `"/"`   | Custom separator between items |
| `linkClassName` | `string`           | `""`    | Custom CSS class for links     |

### Basic Usage

```jsx
const breadcrumbData = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Laptops", path: "/products/laptops" },
  { label: "MacBook Pro" }, // Current page (no path)
];

<Breadcrumb data={breadcrumbData} />;
```

### Custom Separator

```jsx
<Breadcrumb
  data={breadcrumbData}
  separator={
    <svg className="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
      <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
    </svg>
  }
/>
```

### Custom Styling

```jsx
<Breadcrumb
  data={breadcrumbData}
  linkClassName="text-blue-600 hover:text-blue-800 font-medium"
  separator={<span className="mx-2 text-gray-400">→</span>}
/>
```

### Breadcrumb with Icons

```jsx
const breadcrumbWithIcons = [
  {
    label: "Home",
    path: "/",
    icon: (
      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
    ),
  },
  {
    label: "Products",
    path: "/products",
    icon: <span className="mr-1">🛍️</span>,
  },
  {
    label: "MacBook Pro",
    icon: <span className="mr-1">💻</span>,
  },
];

<Breadcrumb data={breadcrumbWithIcons} />;
```

---

## Button

The Button component provides clickable elements for user interactions with various styles and states.

### Import

```jsx
import { Button } from "alope-ui";
```

### Props

| Prop          | Type                                                                      | Default     | Description          |
| ------------- | ------------------------------------------------------------------------- | ----------- | -------------------- |
| `variant`     | `'solid' \| 'outline' \| 'ghost' \| 'plain'`                              | `'solid'`   | Button style variant |
| `variantType` | `'primary' \| 'secondary' \| 'success' \| 'info' \| 'warning' \| 'error'` | `'primary'` | Button color theme   |
| `size`        | `'sm' \| 'md' \| 'lg'`                                                    | `'md'`      | Button size          |
| `radius`      | `'regular' \| 'stadium'`                                                  | `'regular'` | Border radius style  |
| `fullWidth`   | `boolean`                                                                 | `false`     | Full width button    |
| `disabled`    | `boolean`                                                                 | `false`     | Disabled state       |
| `to`          | `string`                                                                  | `undefined` | Link destination     |
| `prefixIcon`  | `ReactNode`                                                               | `undefined` | Icon before text     |
| `suffixIcon`  | `ReactNode`                                                               | `undefined` | Icon after text      |
| `onClick`     | `function`                                                                | `undefined` | Click handler        |
| `children`    | `ReactNode`                                                               | `undefined` | Button content       |

### Button Variants

```jsx
<div className="flex flex-wrap gap-2">
  <Button variant="solid">Solid Button</Button>
  <Button variant="outline">Outline Button</Button>
  <Button variant="ghost">Ghost Button</Button>
  <Button variant="plain">Plain Button</Button>
</div>
```

### Button Types (Colors)

```jsx
<div className="flex flex-wrap gap-2">
  <Button variantType="primary">Primary</Button>
  <Button variantType="secondary">Secondary</Button>
  <Button variantType="success">Success</Button>
  <Button variantType="info">Info</Button>
  <Button variantType="warning">Warning</Button>
  <Button variantType="error">Error</Button>
</div>
```

### Button Sizes

```jsx
<div className="flex flex-wrap gap-2 items-center">
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>
</div>
```

### Button Radius

```jsx
<div className="flex flex-wrap gap-2">
  <Button radius="regular">Regular Radius</Button>
  <Button radius="stadium">Stadium Radius</Button>
</div>
```

### Button States

```jsx
<div className="flex flex-wrap gap-2">
  <Button>Normal Button</Button>
  <Button disabled>Disabled Button</Button>
  <Button fullWidth>Full Width Button</Button>
</div>
```

### Buttons with Icons

```jsx
<div className="flex flex-wrap gap-2">
  <Button
    prefixIcon={
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    }
  >
    Search
  </Button>

  <Button
    suffixIcon={
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    }
  >
    Continue
  </Button>
</div>
```

### Link Button

```jsx
<Button to="/dashboard" variantType="info">
  Go to Dashboard
</Button>
```

### Complete Example

```jsx
<div className="space-y-4">
  <div className="flex flex-wrap gap-2">
    <Button
      variant="solid"
      variantType="primary"
      size="lg"
      prefixIcon={<PlusIcon />}
      onClick={() => alert("Button clicked!")}
    >
      Create New
    </Button>

    <Button variant="outline" variantType="secondary" size="lg">
      Cancel
    </Button>
  </div>
</div>
```

---

## Card

The Card component provides a flexible container for displaying content in a structured format.

### Import

```jsx
import { Card } from "alope-ui";
```

### Props

| Prop                   | Type        | Default     | Description           |
| ---------------------- | ----------- | ----------- | --------------------- |
| `image`                | `string`    | `undefined` | Image URL             |
| `title`                | `string`    | `undefined` | Card title            |
| `description`          | `string`    | `undefined` | Card description      |
| `footer`               | `ReactNode` | `undefined` | Card footer content   |
| `ribbon`               | `string`    | `undefined` | Ribbon text           |
| `horizontal`           | `boolean`   | `false`     | Horizontal layout     |
| `children`             | `ReactNode` | `undefined` | Card content          |
| `containerClassName`   | `string`    | `""`        | Container CSS class   |
| `titleClassName`       | `string`    | `""`        | Title CSS class       |
| `descriptionClassName` | `string`    | `""`        | Description CSS class |

### Basic Card

```jsx
<Card
  image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
  title="Web Development"
  description="Build modern web applications with the latest technologies and best practices."
/>
```

### Card with Footer

```jsx
<Card
  image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
  title="Advanced React Course"
  description="Master React with hooks, context, and advanced patterns. Perfect for developers looking to level up their skills."
  footer={
    <div className="flex justify-between items-center">
      <span className="text-2xl font-bold text-green-600">$99</span>
      <Button size="sm" variantType="primary">
        Enroll Now
      </Button>
    </div>
  }
/>
```

### Card with Ribbon

```jsx
<Card
  image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
  title="Premium Course"
  description="Get access to exclusive content and personalized mentorship."
  ribbon="50% OFF"
  footer={
    <Button fullWidth variantType="success">
      Get Started
    </Button>
  }
/>
```

### Horizontal Card

```jsx
<Card
  horizontal
  image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
  title="JavaScript Fundamentals"
  description="Learn the core concepts of JavaScript programming from scratch. Perfect for beginners who want to start their coding journey."
  footer={
    <div className="flex gap-2">
      <Button size="sm" variant="outline">
        Preview
      </Button>
      <Button size="sm" variantType="primary">
        Start Learning
      </Button>
    </div>
  }
/>
```

### Custom Styling

```jsx
<Card
  image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
  title="Custom Styled Card"
  description="This card demonstrates custom styling capabilities."
  titleClassName="text-3xl font-bold text-purple-700"
  descriptionClassName="text-gray-600 italic"
  containerClassName="border-2 border-purple-200 shadow-lg"
  footer={
    <Button variantType="info" radius="stadium">
      Learn More
    </Button>
  }
/>
```

### Content-Only Card

```jsx
<Card>
  <div className="p-6">
    <h3 className="text-xl font-semibold mb-4">Custom Content</h3>
    <p className="text-gray-600 mb-4">
      You can also use the Card component as a container for any custom content.
    </p>
    <div className="flex justify-end">
      <Button size="sm">Action</Button>
    </div>
  </div>
</Card>
```

---

## Modal

The Modal component provides overlay dialogs for important user interactions and information.

### Import

```jsx
import { Modal } from "alope-ui";
```

### Props

| Prop           | Type                           | Default     | Description            |
| -------------- | ------------------------------ | ----------- | ---------------------- |
| `isOpen`       | `boolean`                      | `false`     | Modal visibility state |
| `onClose`      | `function`                     | `required`  | Close handler          |
| `title`        | `string`                       | `undefined` | Modal title            |
| `size`         | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'`      | Modal size             |
| `overlayClose` | `boolean`                      | `true`      | Close on overlay click |
| `children`     | `ReactNode`                    | `undefined` | Modal content          |

### Basic Modal

```jsx
const [isOpen, setIsOpen] = useState(false);

<>
  <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

  <Modal
    isOpen={isOpen}
    onClose={() => setIsOpen(false)}
    title="Basic Modal"
    size="md"
  >
    <div className="p-4">
      <p className="text-gray-600 mb-4">
        This is a basic modal example. You can put any content here.
      </p>
      <div className="flex justify-end gap-2">
        <Button variant="outline" onClick={() => setIsOpen(false)}>
          Cancel
        </Button>
        <Button onClick={() => setIsOpen(false)}>Confirm</Button>
      </div>
    </div>
  </Modal>
</>;
```

### Confirmation Modal

```jsx
const [isDeleteOpen, setIsDeleteOpen] = useState(false);

const handleDelete = () => {
  // Perform delete action
  console.log("Item deleted");
  setIsDeleteOpen(false);
};

<>
  <Button variantType="error" onClick={() => setIsDeleteOpen(true)}>
    Delete Item
  </Button>

  <Modal
    isOpen={isDeleteOpen}
    onClose={() => setIsDeleteOpen(false)}
    title="Confirm Deletion"
    size="sm"
    overlayClose={false}
  >
    <div className="p-4">
      <p className="text-gray-700 mb-6">
        Are you sure you want to delete this item? This action cannot be undone.
      </p>
      <div className="flex justify-end gap-3">
        <Button variant="outline" onClick={() => setIsDeleteOpen(false)}>
          Cancel
        </Button>
        <Button variantType="error" onClick={handleDelete}>
          Yes, Delete
        </Button>
      </div>
    </div>
  </Modal>
</>;
```

### Form Modal

```jsx
const [isFormOpen, setIsFormOpen] = useState(false);

<>
  <Button onClick={() => setIsFormOpen(true)}>Add User</Button>

  <Modal
    isOpen={isFormOpen}
    onClose={() => setIsFormOpen(false)}
    title="Add New User"
    size="lg"
  >
    <div className="p-6">
      <form className="space-y-4">
        <TextInput label="Full Name" placeholder="Enter full name" required />
        <TextInput
          label="Email Address"
          type="email"
          placeholder="Enter email address"
          required
        />
        <SelectInput
          label="Role"
          options={[
            { label: "Admin", value: "admin" },
            { label: "User", value: "user" },
            { label: "Moderator", value: "moderator" },
          ]}
          placeholder="Select role"
        />
        <div className="flex justify-end gap-3 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => setIsFormOpen(false)}
          >
            Cancel
          </Button>
          <Button type="submit" variantType="success">
            Create User
          </Button>
        </div>
      </form>
    </div>
  </Modal>
</>;
```

### Modal Sizes

```jsx
<div className="flex flex-wrap gap-2">
  <Button onClick={() => setSmallOpen(true)}>Small Modal</Button>
  <Button onClick={() => setMediumOpen(true)}>Medium Modal</Button>
  <Button onClick={() => setLargeOpen(true)}>Large Modal</Button>
  <Button onClick={() => setXLargeOpen(true)}>X-Large Modal</Button>
</div>
```

---

## Offcanvas

The Offcanvas component provides a sliding panel for displaying hidden content like menus or sidebars that slide in from the side.

### Import

```jsx
import { Offcanvas } from "alope-ui";
```

### Props

| Prop                   | Type                | Default     | Description                              |
| ---------------------- | ------------------- | ----------- | ---------------------------------------- |
| `isOpen`               | `boolean`           | `false`     | Controls visibility of the offcanvas     |
| `onClose`              | `() => void`        | `required`  | Callback function when offcanvas closes  |
| `title`                | `string`            | `undefined` | Offcanvas header title                   |
| `position`             | `'left' \| 'right'` | `'left'`    | Position where offcanvas slides from     |
| `children`             | `ReactNode`         | `undefined` | Offcanvas content                        |
| `className`            | `string`            | `""`        | Custom CSS class for offcanvas container |
| `titleClassName`       | `string`            | `""`        | Custom CSS class for title               |
| `closeButtonClassName` | `string`            | `""`        | Custom CSS class for close button        |

### Basic Offcanvas

```jsx
const [isOpen, setIsOpen] = useState(false);

<Button onClick={() => setIsOpen(true)}>Open Offcanvas</Button>

<Offcanvas
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Left Offcanvas"
  position="left"
>
  <p>This is the content of the offcanvas that slides in from the left.</p>
</Offcanvas>
```

### Right Position Offcanvas

```jsx
<Offcanvas
  isOpen={isRightOpen}
  onClose={() => setIsRightOpen(false)}
  title="Right Offcanvas"
  position="right"
>
  <p>
    This is the content of the offcanvas with that slides in from the right.
  </p>
</Offcanvas>
```

### Custom Styling

```jsx
<Offcanvas
  isOpen={isRightOpen}
  onClose={() => setIsRightOpen(false)}
  title="Right Offcanvas"
  position="right"
  className="bg-primary-700"
  titleClassName="text-2xl font-bold text-white"
  closeButtonClassName="text-white hover:text-white/20"
>
  <div className="text-white">
    <p>This is the content of the offcanvas with custom styling.</p>
    <p>
      You can put any content here, such as text, forms, or other components.
    </p>
  </div>
</Offcanvas>
```

---

## Toast

The Toast component provides brief, auto-dismissable messages to inform users about actions or status updates.

### Adding Provider

First, import the ToastProvider

```jsx
import { ToastProvider } from "alope-ui";
```

Then, wrap your main application component with the provider (e.g. in App.tsx or your entry file):

```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ToastProvider } from 'alope-ui';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </StrictMode>
);

```

### Use Toast

Finally, you can use the `useToast()` hook like this:

```jsx
import { useToast } from "alope-ui";
```

```jsx
const { addToast } = useToast();
```

### Props

| Prop       | Type                                                       | Default      | Description              |
| ---------- | ---------------------------------------------------------- | ------------ | ------------------------ |
| `title`    | `string`                                                   | `required`   | Toast title              |
| `message`  | `string`                                                   | `required`   | Toast message content    |
| `type`     | `'success' \| 'error' \| 'info' \| 'warning'`              | `'info'`     | Toast type/variant       |
| `variant`  | `'filled' \| 'outline'`                                    | `'filled'`   | Toast visual style       |
| `position` | `'topLeft' \| 'topRight' \| 'bottomLeft' \| 'bottomRight'` | `'topRight'` | Toast position on screen |

### Basic Toast

```jsx
import { useToast } from "alope-ui";

const BasicExample = () => {
  const { addToast } = useToast();

  return (
    <div className="flex gap-4">
      <Button
        onClick={() =>
          addToast({
            title: "Success",
            message: "This is a success message!",
            type: "success",
          })
        }
      >
        Success Toast
      </Button>

      <Button
        onClick={() =>
          addToast({
            title: "Error",
            message: "This is an error message!",
            type: "error",
          })
        }
      >
        Error Toast
      </Button>

      <Button
        onClick={() =>
          addToast({
            title: "Info",
            message: "This is an info message!",
            type: "info",
          })
        }
      >
        Info Toast
      </Button>

      <Button
        onClick={() =>
          addToast({
            title: "Warning",
            message: "This is a warning message!",
            type: "warning",
          })
        }
      >
        Warning Toast
      </Button>
    </div>
  );
};
```

### Outline Variant

```jsx
<Button onClick={() => addToast({
  title: 'Success',
  message: 'This is a success message!',
  type: 'success',
  variant: 'outline'
})}>
  Success Outline Toast
</Button>

<Button onClick={() => addToast({
  title: 'Error',
  message: 'This is an error message!',
  type: 'error',
  variant: 'outline'
})}>
  Error Outline Toast
</Button>
```

### Custom Position

```jsx
<Button onClick={() => addToast({
  title: 'Top Left',
  message: 'This toast appears at top left!',
  type: 'success',
  variant: 'outline',
  position: 'topLeft'
})}>
  Top Left Toast
</Button>

<Button onClick={() => addToast({
  title: 'Bottom Right',
  message: 'This toast appears at bottom right!',
  type: 'info',
  variant: 'outline',
  position: 'bottomRight'
})}>
  Bottom Right Toast
</Button>
```

---

## Checkbox Input

The CheckboxInput component provides checkbox functionality for selecting single or multiple options, with indeterminate state support.

### Import

```jsx
import { CheckboxInput, ListCheckboxInput } from "alope-ui";
import type { CheckboxOptionType } from "alope-ui";
```

### CheckboxInput Props

| Prop            | Type                                         | Default     | Description                               |
| --------------- | -------------------------------------------- | ----------- | ----------------------------------------- |
| `label`         | `string`                                     | `required`  | Checkbox label text                       |
| `checked`       | `boolean`                                    | `false`     | Checkbox checked state                    |
| `indeterminate` | `boolean`                                    | `false`     | Indeterminate state for partial selection |
| `onChange`      | `(e: ChangeEvent<HTMLInputElement>) => void` | `required`  | Change handler function                   |
| `description`   | `string`                                     | `undefined` | Additional description text               |

### ListCheckboxInput Props

| Prop                 | Type                                     | Default    | Description                        |
| -------------------- | ---------------------------------------- | ---------- | ---------------------------------- |
| `options`            | `CheckboxOptionType[]`                   | `required` | Array of checkbox options          |
| `selectedValues`     | `CheckboxOptionType[]`                   | `[]`       | Currently selected options         |
| `onValueChange`      | `(values: CheckboxOptionType[]) => void` | `required` | Change handler for selected values |
| `variant`            | `'solid' \| 'subtle' \| 'outline'`       | `'solid'`  | Visual variant style               |
| `checkboxSize`       | `'sm' \| 'md' \| 'lg'`                   | `'md'`     | Checkbox size                      |
| `containerClassName` | `string`                                 | `""`       | Container CSS class                |

### Basic CheckboxInput

```jsx
import { useState } from "react";
import { CheckboxInput } from "alope-ui";

const BasicExample = () => {
  const [checked, setChecked] = useState(false);

  return (
    <CheckboxInput
      label="I agree to the terms and conditions"
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
      description="Click this checkbox to proceed."
    />
  );
};
```

### ListCheckboxInput

```jsx
import { useState } from 'react';
import { ListCheckboxInput } from "alope-ui";
import type { CheckboxOptionType } from "alope-ui";

const options: CheckboxOptionType[] = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const ListExample = () => {
  const [selectedOptions, setSelectedOptions] = useState<CheckboxOptionType[]>([]);

  return (
    <ListCheckboxInput
      options={options}
      selectedValues={selectedOptions}
      onValueChange={setSelectedOptions}
      variant="subtle"
      checkboxSize="md"
    />
  );
};
```

### Select All with Indeterminate State

```jsx
const [selectedOptions, setSelectedOptions] = useState<CheckboxOptionType[]>([]);

<CheckboxInput
  label="Select All"
  checked={selectedOptions.length === options.length}
  indeterminate={
    selectedOptions.length > 0 &&
    selectedOptions.length < options.length
  }
  onChange={(e) => {
    const isChecked = e.target.checked;
    setSelectedOptions(isChecked ? options : []);
  }}
  description="Check to select all options or uncheck to deselect all."
/>

<ListCheckboxInput
  options={options}
  selectedValues={selectedOptions}
  onValueChange={setSelectedOptions}
  containerClassName="mt-2"
  variant="subtle"
  checkboxSize="md"
/>
```

### Variants

```jsx
{
  /* Solid Variant */
}
<ListCheckboxInput
  options={options}
  selectedValues={selectedOptions}
  onValueChange={setSelectedOptions}
  variant="solid"
  checkboxSize="md"
/>;

{
  /* Subtle Variant */
}
<ListCheckboxInput
  options={options}
  selectedValues={selectedOptions}
  onValueChange={setSelectedOptions}
  variant="subtle"
  checkboxSize="md"
/>;

{
  /* Outline Variant */
}
<ListCheckboxInput
  options={options}
  selectedValues={selectedOptions}
  onValueChange={setSelectedOptions}
  variant="outline"
  checkboxSize="md"
/>;
```

### Sizes

```jsx
{
  /* Large Size */
}
<ListCheckboxInput
  options={options}
  selectedValues={selectedOptions}
  onValueChange={setSelectedOptions}
  variant="solid"
  checkboxSize="lg"
/>;
```

---

## Radio Input

The RadioInput component allows users to choose one option from a list of mutually exclusive choices.

### Import

```jsx
import { RadioInput } from "alope-ui";
import type { RadioOptionType } from "alope-ui";
```

### Props

| Prop                  | Type                                       | Default     | Description                    |
| --------------------- | ------------------------------------------ | ----------- | ------------------------------ |
| `name`                | `string`                                   | `required`  | Name attribute for radio group |
| `options`             | `RadioOptionType[]`                        | `required`  | Array of radio options         |
| `selectedValue`       | `RadioOptionType \| undefined`             | `undefined` | Currently selected option      |
| `onValueChange`       | `(value: RadioOptionType) => void`         | `required`  | Change handler function        |
| `variant`             | `'subtle' \| 'solid' \| 'outline'`         | `'subtle'`  | Visual variant style           |
| `radioSize`           | `'sm' \| 'md' \| 'lg'`                     | `'md'`      | Radio button size              |
| `disabled`            | `boolean`                                  | `false`     | Disable all radio options      |
| `containerClassName`  | `string`                                   | `""`        | Container CSS class            |
| `inputGroupClassName` | `string \| (isChecked: boolean) => string` | `""`        | Input group CSS class          |
| `inputLabelClassName` | `string \| (isChecked: boolean) => string` | `""`        | Label CSS class                |
| `inputRadioClassName` | `string \| (isChecked: boolean) => string` | `""`        | Radio input CSS class          |

### Basic RadioInput

```jsx
import { useState } from "react";
import { RadioInput } from "alope-ui";
import type { RadioOptionType } from "alope-ui";

const options: RadioOptionType[] = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const BasicExample = () => {
  const [selectedValue, setSelectedValue] =
    (useState < RadioOptionType) | (undefined > options[0]);

  return (
    <RadioInput
      name="flavor"
      options={options}
      selectedValue={selectedValue}
      onValueChange={setSelectedValue}
    />
  );
};
```

### Variants

```jsx
{
  /* Subtle Variant */
}
<RadioInput
  name="variant-subtle"
  options={options}
  selectedValue={selectedValue}
  onValueChange={setSelectedValue}
  variant="subtle"
/>;

{
  /* Solid Variant */
}
<RadioInput
  name="variant-solid"
  options={options}
  selectedValue={selectedValue}
  onValueChange={setSelectedValue}
  variant="solid"
/>;

{
  /* Outline Variant */
}
<RadioInput
  name="variant-outline"
  options={options}
  selectedValue={selectedValue}
  onValueChange={setSelectedValue}
  variant="outline"
/>;
```

### Sizes

```jsx
{
  /* Small Size */
}
<RadioInput
  name="size-sm"
  options={options}
  selectedValue={selectedValue}
  onValueChange={setSelectedValue}
  radioSize="sm"
/>;

{
  /* Large Size */
}
<RadioInput
  name="size-lg"
  options={options}
  selectedValue={selectedValue}
  onValueChange={setSelectedValue}
  radioSize="lg"
/>;
```

### Disabled State

```jsx
<RadioInput
  name="disabled-example"
  options={options}
  selectedValue={selectedValue}
  onValueChange={setSelectedValue}
  disabled
/>
```

### Custom Styling

```jsx
<RadioInput
  name="custom-styling"
  options={options}
  selectedValue={selectedValue}
  onValueChange={setSelectedValue}
  containerClassName="gap-6 bg-blue-50 p-4 rounded-lg"
  inputGroupClassName={(isChecked) =>
    isChecked
      ? "bg-blue-100 border-blue-500 shadow-md"
      : "bg-white border-gray-300 hover:bg-gray-100"
  }
  inputLabelClassName={(isChecked) =>
    isChecked ? "text-blue-800 font-bold" : "text-gray-600"
  }
  inputRadioClassName={(isChecked) =>
    isChecked ? "bg-blue-600 border-blue-600" : "bg-white border-gray-400"
  }
/>
```

---

## Select Input

The SelectInput component provides a dropdown interface for selecting one or multiple options from a list.

### Import

```jsx
import { SelectInput } from "alope-ui";
import type { SelectOptionType } from "alope-ui";
```

### Props

| Prop               | Type                                             | Default       | Description                                    |
| ------------------ | ------------------------------------------------ | ------------- | ---------------------------------------------- |
| `instanceId`       | `string`                                         | `required`    | Unique identifier for the select instance      |
| `label`            | `string`                                         | `undefined`   | Label text for the select                      |
| `options`          | `SelectOptionType[]`                             | `required`    | Array of selectable options                    |
| `value`            | `SelectOptionType \| SelectOptionType[] \| null` | `null`        | Selected value(s)                              |
| `onChange`         | `(value: any) => void`                           | `required`    | Change handler function                        |
| `placeholder`      | `string`                                         | `"Select..."` | Placeholder text                               |
| `isMulti`          | `boolean`                                        | `false`       | Enable multiple selection                      |
| `isSearchable`     | `boolean`                                        | `false`       | Enable search functionality                    |
| `isClearable`      | `boolean`                                        | `false`       | Enable clear button                            |
| `error`            | `string`                                         | `undefined`   | Error message to display                       |
| `labelClassName`   | `string`                                         | `""`          | Label CSS class                                |
| `customClassNames` | `object`                                         | `{}`          | Custom class names for react-select components |

### Single Select

```jsx
import { useState } from 'react';
import { SelectInput } from "alope-ui";
import type { SelectOptionType } from "alope-ui";

const options: SelectOptionType[] = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const SingleExample = () => {
  const [value, setValue] = useState<SelectOptionType | null>(null);

  return (
    <SelectInput
      instanceId="single-select"
      label="Choose your flavor"
      options={options}
      value={value}
      onChange={(value) => setValue(value as SelectOptionType)}
      isClearable
      isSearchable
      placeholder="Select a flavor..."
    />
  );
};
```

### Multiple Select

```jsx
const [multipleValues, setMultipleValues] = useState<readonly SelectOptionType[]>([]);

<SelectInput
  instanceId="multi-select"
  label="Select your favorite toppings"
  options={options}
  value={multipleValues}
  onChange={(value) => setMultipleValues(value as readonly SelectOptionType[])}
  isMulti
  isSearchable
  placeholder="Select toppings..."
/>
```

### Select with Error

```jsx
<SelectInput
  instanceId="error-select"
  label="Your selection"
  options={options}
  error="This field is required."
  placeholder="Make a selection..."
/>
```

### Custom Styling

```jsx
<SelectInput
  instanceId="custom-select"
  label="Your selection"
  options={options}
  placeholder="Custom styled select..."
  labelClassName="font-bold text-lg"
  customClassNames={{
    control: ({ isFocused }) =>
      cn(
        "!w-full !border !rounded-lg p-2 !shadow-md !sm:text-sm !min-h-[38px]",
        isFocused ? "border-info !ring-1 !ring-info" : "!border-info"
      ),
    option: ({ isFocused, isSelected }) =>
      `!px-4 !py-2 !cursor-pointer ${
        isSelected
          ? "!bg-info !text-white"
          : isFocused
          ? "!bg-info/30"
          : "!bg-white"
      }`,
  }}
/>
```

---

## Text Input

The TextInput component provides a text input field for users to enter text information.

### Import

```jsx
import { TextInput } from "alope-ui";
```

### Props

| Prop          | Type      | Default     | Description              |
| ------------- | --------- | ----------- | ------------------------ |
| `id`          | `string`  | `required`  | Input element ID         |
| `name`        | `string`  | `required`  | Input name attribute     |
| `label`       | `string`  | `undefined` | Label text for the input |
| `placeholder` | `string`  | `undefined` | Placeholder text         |
| `error`       | `string`  | `undefined` | Error message to display |
| `disabled`    | `boolean` | `false`     | Disable the input        |

### Basic TextInput

```jsx
import { TextInput } from "alope-ui";

const BasicExample = () => {
  return <TextInput id="basic" name="basic" placeholder="Enter text here" />;
};
```

### With Label

```jsx
<TextInput
  id="with-label"
  name="with-label"
  label="Your Name"
  placeholder="John Doe"
/>
```

### With Error

```jsx
<TextInput
  id="with-error"
  name="with-error"
  label="Email Address"
  placeholder="you@example.com"
  error="Please enter a valid email."
/>
```

### Disabled State

```jsx
<TextInput
  id="disabled"
  name="disabled"
  label="Disabled Input"
  placeholder="You can't type here"
  disabled
/>
```

---

## Pagination

The Pagination component provides navigation controls for paginated content, supporting both simplified and full pagination modes with customizable appearance.

### Import

```jsx
import { Pagination } from "alope-ui";
```

### Props

| Prop            | Type                              | Default   | Description                                           |
| --------------- | --------------------------------- | --------- | ----------------------------------------------------- |
| `currentPage`   | `number`                          | `required`| Current active page number                            |
| `onPageChange`  | `(page: number) => void`          | `required`| Callback function when page changes                   |
| `count`         | `number`                          | `undefined` | Total number of items                               |
| `pageSize`      | `number`                          | `undefined` | Number of items per page                            |
| `totalPages`    | `number`                          | `undefined` | Total number of pages (deprecated, use count + pageSize) |
| `format`        | `'none' \| 'long'`                | `'none'`  | Format for displaying page info                       |
| `simplified`    | `boolean`                         | `false`   | Show simplified pagination (prev/next only)           |
| `asLink`        | `boolean`                         | `false`   | Render pagination buttons as links                    |
| `getPageHref`   | `(page: number) => string`        | `undefined` | Custom href generator for pagination links          |
| `siblingCount`  | `number`                          | `1`       | Number of page buttons to show on each side           |
| `prevIcon`      | `React.ReactNode`                 | `'<'`     | Custom icon for previous button                       |
| `nextIcon`      | `React.ReactNode`                 | `'>'`     | Custom icon for next button                           |
| `size`          | `'sm' \| 'md' \| 'lg'`            | `'sm'`    | Size variant of pagination buttons                    |

### Basic Pagination

```jsx
import { useState } from "react";
import { Pagination } from "alope-ui";

const BasicExample = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination
      currentPage={currentPage}
      count={100}
      pageSize={10}
      onPageChange={setCurrentPage}
    />
  );
};
```

### Simplified Pagination

```jsx
const SimplifiedExample = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination
      currentPage={currentPage}
      count={100}
      pageSize={10}
      onPageChange={setCurrentPage}
      simplified
    />
  );
};
```

### Pagination with Format

```jsx
{/* None Format - Shows page numbers */}
<Pagination
  currentPage={currentPage}
  count={100}
  pageSize={10}
  onPageChange={setCurrentPage}
  format="none"
  simplified
/>

{/* Long Format - Shows item range */}
<Pagination
  currentPage={currentPage}
  count={100}
  pageSize={10}
  onPageChange={setCurrentPage}
  format="long"
  simplified
/>
```

### Sizes

```jsx
{/* Small Size */}
<Pagination
  currentPage={currentPage}
  count={100}
  pageSize={10}
  onPageChange={setCurrentPage}
  size="sm"
/>

{/* Medium Size */}
<Pagination
  currentPage={currentPage}
  count={100}
  pageSize={10}
  onPageChange={setCurrentPage}
  size="md"
/>

{/* Large Size */}
<Pagination
  currentPage={currentPage}
  count={100}
  pageSize={10}
  onPageChange={setCurrentPage}
  size="lg"
/>
```

### Custom Sibling Count

```jsx
{/* Show 2 page buttons on each side */}
<Pagination
  currentPage={currentPage}
  count={100}
  pageSize={10}
  onPageChange={setCurrentPage}
  siblingCount={2}
/>
```

### Custom Icons

```jsx
import { ChevronLeft, ChevronRight } from "lucide-react";

<Pagination
  currentPage={currentPage}
  count={100}
  pageSize={10}
  onPageChange={setCurrentPage}
  prevIcon={<ChevronLeft size={16} />}
  nextIcon={<ChevronRight size={16} />}
/>
```

### As Links

```jsx
<Pagination
  currentPage={currentPage}
  count={100}
  pageSize={10}
  onPageChange={setCurrentPage}
  asLink
  getPageHref={(page) => `/products?page=${page}`}
/>
```

### Using TotalPages (Legacy)

```jsx
{/* This approach is deprecated, prefer using count + pageSize */}
<Pagination
  currentPage={currentPage}
  totalPages={10}
  onPageChange={setCurrentPage}
/>
```

---

## Table

The Table component provides a flexible and feature-rich data table with support for custom rendering, row selection, striping, sticky headers, and responsive design.

### Import

```jsx
import { Table } from "alope-ui";
import type { Column } from "alope-ui";
```

### Props

| Prop                   | Type                              | Default    | Description                                    |
| ---------------------- | --------------------------------- | ---------- | ---------------------------------------------- |
| `columns`              | `Column<T>[]`                     | `required` | Array of column configurations                 |
| `data`                 | `T[]`                             | `required` | Array of data objects to display               |
| `striped`              | `boolean`                         | `false`    | Enable alternating row colors                  |
| `stripeColor`          | `string`                          | `undefined`| Custom color for striped rows                  |
| `headerClassName`      | `string`                          | `""`       | CSS class for table header                     |
| `dataColumnClassName`  | `string`                          | `""`       | CSS class for data cells                       |
| `dataRowClassName`     | `string`                          | `""`       | CSS class for data rows                        |
| `tableClassName`       | `string`                          | `""`       | CSS class for table element                    |
| `captionClassName`     | `string`                          | `""`       | CSS class for caption                          |
| `containerClassName`   | `string`                          | `""`       | CSS class for container                        |
| `customEmptyData`      | `React.ReactNode`                 | `undefined`| Custom message when no data                    |
| `size`                 | `'sm' \| 'md' \| 'lg'`            | `'md'`     | Size variant of table                          |
| `caption`              | `string`                          | `undefined`| Table caption text                             |
| `captionPosition`      | `'top' \| 'bottom'`               | `'bottom'` | Position of caption                            |
| `stickyHeader`         | `boolean`                         | `false`    | Make header sticky on scroll                   |
| `selectable`           | `boolean`                         | `false`    | Enable row selection with checkboxes           |
| `onSelectionChange`    | `(selected: T[]) => void`         | `undefined`| Callback when selection changes                |
| `selectedRows`         | `T[]`                             | `[]`       | Array of selected rows                         |

### Column Type

```typescript
type Column<T> = {
  header: string;
  accessor: keyof T;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
};
```

### Basic Table

```jsx
import { Table } from "alope-ui";
import type { Column } from "alope-ui";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

const columns: Column<User>[] = [
  { header: "Name", accessor: "name" },
  { header: "Email", accessor: "email" },
  { header: "Role", accessor: "role" },
];

const data: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Manager" },
];

const BasicExample = () => {
  return <Table columns={columns} data={data} />;
};
```

### Striped Table

```jsx
<Table columns={columns} data={data} striped />

{/* With custom stripe color */}
<Table
  columns={columns}
  data={data}
  striped
  stripeColor="bg-blue-50 dark:bg-blue-900"
/>
```

### Sizes

```jsx
{/* Small Size */}
<Table columns={columns} data={data} size="sm" />

{/* Medium Size */}
<Table columns={columns} data={data} size="md" />

{/* Large Size */}
<Table columns={columns} data={data} size="lg" />
```

### Custom Rendering

```jsx
const columns: Column<User>[] = [
  { header: "Name", accessor: "name" },
  { header: "Email", accessor: "email" },
  {
    header: "Role",
    accessor: "role",
    render: (value, row) => (
      <span
        className={
          value === "Admin"
            ? "bg-red-100 text-red-800 px-2 py-1 rounded"
            : "bg-blue-100 text-blue-800 px-2 py-1 rounded"
        }
      >
        {value}
      </span>
    ),
  },
];

<Table columns={columns} data={data} />;
```

### Selectable Rows

```jsx
import { useState } from "react";

const SelectableExample = () => {
  const [selectedRows, setSelectedRows] = useState<User[]>([]);

  return (
    <Table
      columns={columns}
      data={data}
      selectable
      selectedRows={selectedRows}
      onSelectionChange={setSelectedRows}
    />
  );
};
```

### Sticky Header

```jsx
<Table columns={columns} data={data} stickyHeader />
```

### With Caption

```jsx
{/* Caption at bottom */}
<Table
  columns={columns}
  data={data}
  caption="User Management Table"
  captionPosition="bottom"
/>

{/* Caption at top */}
<Table
  columns={columns}
  data={data}
  caption="User Management Table"
  captionPosition="top"
/>
```

### Custom Empty State

```jsx
<Table
  columns={columns}
  data={[]}
  customEmptyData={
    <div className="flex flex-col items-center gap-2">
      <span className="text-gray-500">No users found</span>
      <button className="px-4 py-2 bg-blue-500 text-white rounded">
        Add User
      </button>
    </div>
  }
/>
```

### Custom Styling

```jsx
<Table
  columns={columns}
  data={data}
  containerClassName="shadow-lg rounded-lg"
  tableClassName="border-2 border-blue-500"
  headerClassName="bg-blue-600 text-white"
  dataRowClassName="hover:bg-blue-50"
  dataColumnClassName="text-gray-700"
/>
```

### Complete Example

```jsx
import { useState } from "react";
import { Table } from "alope-ui";
import type { Column } from "alope-ui";

type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
  status: string;
};

const ProductTable = () => {
  const [selectedRows, setSelectedRows] = useState<Product[]>([]);

  const columns: Column<Product>[] = [
    { header: "Product Name", accessor: "name" },
    {
      header: "Price",
      accessor: "price",
      render: (value) => `$${value.toFixed(2)}`,
    },
    { header: "Stock", accessor: "stock" },
    {
      header: "Status",
      accessor: "status",
      render: (value) => (
        <span
          className={
            value === "Available"
              ? "bg-green-100 text-green-800 px-2 py-1 rounded"
              : "bg-gray-100 text-gray-800 px-2 py-1 rounded"
          }
        >
          {value}
        </span>
      ),
    },
  ];

  const data: Product[] = [
    { id: 1, name: "Laptop", price: 999.99, stock: 15, status: "Available" },
    { id: 2, name: "Mouse", price: 29.99, stock: 0, status: "Out of Stock" },
    { id: 3, name: "Keyboard", price: 79.99, stock: 23, status: "Available" },
  ];

  return (
    <Table
      columns={columns}
      data={data}
      striped
      selectable
      selectedRows={selectedRows}
      onSelectionChange={setSelectedRows}
      stickyHeader
      caption="Product Inventory"
      size="md"
    />
  );
};
```

---

## Tooltip

The Tooltip component displays informative text when hovering over an element, with customizable placement, styling, and animation options.

### Import

```jsx
import { Tooltip } from "alope-ui";
```

### Props

| Prop                | Type                                      | Default                           | Description                              |
| ------------------- | ----------------------------------------- | --------------------------------- | ---------------------------------------- |
| `children`          | `React.ReactNode`                         | `required`                        | Element that triggers the tooltip        |
| `text`              | `string`                                  | `required`                        | Text content of the tooltip              |
| `showArrow`         | `boolean`                                 | `true`                            | Show arrow pointing to trigger element   |
| `placement`         | `'top' \| 'bottom' \| 'left' \| 'right'`  | `'top'`                           | Position of tooltip relative to trigger  |
| `offset`            | `number`                                  | `8`                               | Distance from trigger element (in px)    |
| `bgColor`           | `string`                                  | `'bg-gray-800 dark:bg-gray-600'`  | Background color class                   |
| `isOpen`            | `boolean`                                 | `undefined`                       | Controlled visibility state              |
| `onOpenChange`      | `(open: boolean) => void`                 | `undefined`                       | Callback when visibility changes         |
| `disabled`          | `boolean`                                 | `false`                           | Disable tooltip functionality            |
| `animationDuration` | `number`                                  | `300`                             | Animation duration (in ms)               |
| `delay`             | `number`                                  | `700`                             | Delay before showing tooltip (in ms)     |

### Basic Tooltip

```jsx
import { Tooltip } from "alope-ui";

const BasicExample = () => {
  return (
    <Tooltip text="This is a helpful tooltip">
      <button className="px-4 py-2 bg-blue-500 text-white rounded">
        Hover me
      </button>
    </Tooltip>
  );
};
```

### Placement

```jsx
{/* Top Placement */}
<Tooltip text="Tooltip on top" placement="top">
  <button>Top</button>
</Tooltip>

{/* Bottom Placement */}
<Tooltip text="Tooltip on bottom" placement="bottom">
  <button>Bottom</button>
</Tooltip>

{/* Left Placement */}
<Tooltip text="Tooltip on left" placement="left">
  <button>Left</button>
</Tooltip>

{/* Right Placement */}
<Tooltip text="Tooltip on right" placement="right">
  <button>Right</button>
</Tooltip>
```

### Without Arrow

```jsx
<Tooltip text="Tooltip without arrow" showArrow={false}>
  <button>No Arrow</button>
</Tooltip>
```

### Custom Offset

```jsx
{/* Small offset */}
<Tooltip text="Close to element" offset={4}>
  <button>Small Offset</button>
</Tooltip>

{/* Large offset */}
<Tooltip text="Far from element" offset={16}>
  <button>Large Offset</button>
</Tooltip>
```

### Custom Background Color

```jsx
<Tooltip text="Blue tooltip" bgColor="bg-blue-600">
  <button>Blue Tooltip</button>
</Tooltip>

<Tooltip text="Red tooltip" bgColor="bg-red-600">
  <button>Red Tooltip</button>
</Tooltip>

<Tooltip text="Green tooltip" bgColor="bg-green-600">
  <button>Green Tooltip</button>
</Tooltip>
```

### Controlled Tooltip

```jsx
import { useState } from "react";

const ControlledExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Tooltip
        text="Controlled tooltip"
        isOpen={isOpen}
        onOpenChange={setIsOpen}
      >
        <button onClick={() => setIsOpen(!isOpen)}>
          Click to toggle
        </button>
      </Tooltip>
    </div>
  );
};
```

### Custom Animation

```jsx
{/* Fast animation */}
<Tooltip text="Fast animation" animationDuration={150}>
  <button>Fast</button>
</Tooltip>

{/* Slow animation */}
<Tooltip text="Slow animation" animationDuration={600}>
  <button>Slow</button>
</Tooltip>
```

### Custom Delay

```jsx
{/* No delay */}
<Tooltip text="Instant tooltip" delay={0}>
  <button>No Delay</button>
</Tooltip>

{/* Long delay */}
<Tooltip text="Patient tooltip" delay={1500}>
  <button>Long Delay</button>
</Tooltip>
```

### Disabled Tooltip

```jsx
<Tooltip text="This won't show" disabled>
  <button>Disabled Tooltip</button>
</Tooltip>
```

### With Icons

```jsx
import { Info, HelpCircle } from "lucide-react";

<Tooltip text="Additional information about this feature">
  <Info className="w-4 h-4 text-gray-500 cursor-help" />
</Tooltip>

<Tooltip text="Click for help documentation" placement="right">
  <HelpCircle className="w-5 h-5 text-blue-500 cursor-pointer" />
</Tooltip>
```

### Complete Example

```jsx
import { Tooltip } from "alope-ui";
import { Info } from "lucide-react";

const UserProfile = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <span>Username</span>
        <Tooltip
          text="Your username is visible to all users"
          placement="top"
          bgColor="bg-blue-600"
          delay={500}
        >
          <Info className="w-4 h-4 text-gray-400 cursor-help" />
        </Tooltip>
      </div>

      <div className="flex items-center gap-2">
        <span>Email</span>
        <Tooltip
          text="Your email is kept private and secure"
          placement="right"
          showArrow={false}
          offset={12}
        >
          <Info className="w-4 h-4 text-gray-400 cursor-help" />
        </Tooltip>
      </div>

      <Tooltip text="Click to edit your profile" placement="bottom">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Edit Profile
        </button>
      </Tooltip>
    </div>
  );
};
```

---

## Spinner

The Spinner component displays an animated loading indicator with customizable size, color, duration, and thickness.

### Import

```jsx
import { Spinner } from "alope-ui";
```

### Props

| Prop        | Type                                                            | Default   | Description                           |
| ----------- | --------------------------------------------------------------- | --------- | ------------------------------------- |
| `size`      | `'sm' \| 'md' \| 'lg'`                                          | `'md'`    | Size of the spinner                   |
| `color`     | `'primary' \| 'error' \| 'warning' \| 'success' \| 'info' \| 'secondary'` | `'primary'` | Color variant of the spinner    |
| `className` | `string`                                                        | `""`      | Additional CSS classes                |
| `duration`  | `number`                                                        | `1000`    | Animation duration (in ms)            |
| `thickness` | `number`                                                        | `undefined` | Custom border thickness (in px)     |

### Basic Spinner

```jsx
import { Spinner } from "alope-ui";

const BasicExample = () => {
  return <Spinner />;
};
```

### Sizes

```jsx
{/* Small Size */}
<Spinner size="sm" />

{/* Medium Size */}
<Spinner size="md" />

{/* Large Size */}
<Spinner size="lg" />
```

### Colors

```jsx
{/* Primary Color */}
<Spinner color="primary" />

{/* Error Color */}
<Spinner color="error" />

{/* Warning Color */}
<Spinner color="warning" />

{/* Success Color */}
<Spinner color="success" />

{/* Info Color */}
<Spinner color="info" />

{/* Secondary Color */}
<Spinner color="secondary" />
```

### Custom Duration

```jsx
{/* Fast animation */}
<Spinner duration={500} />

{/* Slow animation */}
<Spinner duration={2000} />
```

### Custom Thickness

```jsx
{/* Thin spinner */}
<Spinner thickness={1} />

{/* Thick spinner */}
<Spinner thickness={6} />
```

### Combined Customization

```jsx
<Spinner size="lg" color="success" duration={1500} thickness={5} />
```

### With Custom Styling

```jsx
<Spinner className="mx-auto my-4" />

<Spinner className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
```

### Loading States

```jsx
import { useState } from "react";

const LoadingButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 flex items-center gap-2"
    >
      {isLoading && <Spinner size="sm" className="border-white" />}
      {isLoading ? "Loading..." : "Submit"}
    </button>
  );
};
```

### Centered Loading

```jsx
const CenteredLoading = () => {
  return (
    <div className="flex items-center justify-center h-64">
      <Spinner size="lg" color="primary" />
    </div>
  );
};
```

### With Text

```jsx
const LoadingWithText = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <Spinner size="lg" color="info" />
      <p className="text-gray-600 dark:text-gray-400">Loading data...</p>
    </div>
  );
};
```

### Complete Example

```jsx
import { useState, useEffect } from "react";
import { Spinner } from "alope-ui";

const DataFetcher = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setData({ message: "Data loaded successfully!" });
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-96 gap-4">
        <Spinner size="lg" color="primary" duration={800} />
        <p className="text-gray-600 dark:text-gray-400">
          Fetching your data...
        </p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">{data?.message}</h2>
    </div>
  );
};
```

---

## Skeleton

The Skeleton component displays a placeholder preview of content before the actual data is loaded, improving perceived performance and user experience.

### Import

```jsx
import { Skeleton } from "alope-ui";
```

### Props

| Prop        | Type                      | Default      | Description                                    |
| ----------- | ------------------------- | ------------ | ---------------------------------------------- |
| `width`     | `string`                  | `undefined`  | Width of the skeleton (CSS value)              |
| `height`    | `string`                  | `undefined`  | Height of the skeleton (CSS value)             |
| `rounded`   | `boolean`                 | `false`      | Apply rounded shape (full circle/pill)         |
| `isLoading` | `boolean`                 | `true`       | Show skeleton or actual content                |
| `children`  | `React.ReactNode`         | `undefined`  | Content to render when not loading             |
| `animode`   | `'shimmer' \| 'flash'`    | `'flash'`    | Animation mode for the skeleton                |

### Basic Skeleton

```jsx
import { Skeleton } from "alope-ui";

const BasicExample = () => {
  return <Skeleton width="200px" height="20px" />;
};
```

### With Children

```jsx
import { useState, useEffect } from "react";

const SkeletonWithChildren = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <Skeleton isLoading={isLoading}>
      <p>This content will show after loading</p>
    </Skeleton>
  );
};
```

### Animation Modes

```jsx
{/* Flash animation */}
<Skeleton width="200px" height="20px" animode="flash" />

{/* Shimmer animation */}
<Skeleton width="200px" height="20px" animode="shimmer" />
```

### Rounded Skeleton

```jsx
{/* Rounded rectangle */}
<Skeleton width="100px" height="100px" rounded />

{/* Avatar skeleton */}
<Skeleton width="48px" height="48px" rounded />
```

### Different Sizes

```jsx
{/* Small */}
<Skeleton width="100px" height="16px" />

{/* Medium */}
<Skeleton width="200px" height="20px" />

{/* Large */}
<Skeleton width="300px" height="24px" />

{/* Full width */}
<Skeleton width="100%" height="20px" />
```

### Text Skeleton

```jsx
const TextSkeleton = () => {
  return (
    <div className="space-y-2">
      <Skeleton width="100%" height="20px" />
      <Skeleton width="90%" height="20px" />
      <Skeleton width="95%" height="20px" />
      <Skeleton width="85%" height="20px" />
    </div>
  );
};
```

### Card Skeleton

```jsx
const CardSkeleton = () => {
  return (
    <div className="border rounded-lg p-4 space-y-4">
      {/* Image skeleton */}
      <Skeleton width="100%" height="200px" />

      {/* Title skeleton */}
      <Skeleton width="70%" height="24px" />

      {/* Description skeleton */}
      <div className="space-y-2">
        <Skeleton width="100%" height="16px" />
        <Skeleton width="95%" height="16px" />
        <Skeleton width="90%" height="16px" />
      </div>

      {/* Button skeleton */}
      <Skeleton width="120px" height="40px" />
    </div>
  );
};
```

### Avatar Skeleton

```jsx
const AvatarSkeleton = () => {
  return (
    <div className="flex items-center gap-3">
      <Skeleton width="48px" height="48px" rounded />
      <div className="space-y-2 flex-1">
        <Skeleton width="150px" height="16px" />
        <Skeleton width="100px" height="14px" />
      </div>
    </div>
  );
};
```

### List Skeleton

```jsx
const ListSkeleton = () => {
  return (
    <div className="space-y-4">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex items-center gap-3">
          <Skeleton width="40px" height="40px" rounded />
          <div className="space-y-2 flex-1">
            <Skeleton width="60%" height="16px" />
            <Skeleton width="40%" height="14px" />
          </div>
        </div>
      ))}
    </div>
  );
};
```

### Table Skeleton

```jsx
const TableSkeleton = () => {
  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="grid grid-cols-4 gap-4">
        <Skeleton width="100%" height="20px" />
        <Skeleton width="100%" height="20px" />
        <Skeleton width="100%" height="20px" />
        <Skeleton width="100%" height="20px" />
      </div>

      {/* Rows */}
      {[...Array(5)].map((_, i) => (
        <div key={i} className="grid grid-cols-4 gap-4">
          <Skeleton width="100%" height="16px" />
          <Skeleton width="100%" height="16px" />
          <Skeleton width="100%" height="16px" />
          <Skeleton width="100%" height="16px" />
        </div>
      ))}
    </div>
  );
};
```

### Complete Example

```jsx
import { useState, useEffect } from "react";
import { Skeleton } from "alope-ui";

type User = {
  id: number;
  name: string;
  email: string;
  avatar: string;
};

const UserProfile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setUser({
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        avatar: "/avatar.jpg",
      });
      setIsLoading(false);
    };

    fetchUser();
  }, []);

  if (isLoading) {
    return (
      <div className="max-w-md border rounded-lg p-6 space-y-4">
        {/* Avatar and name skeleton */}
        <div className="flex items-center gap-4">
          <Skeleton width="64px" height="64px" rounded />
          <div className="space-y-2 flex-1">
            <Skeleton width="150px" height="20px" />
            <Skeleton width="200px" height="16px" />
          </div>
        </div>

        {/* Bio skeleton */}
        <div className="space-y-2">
          <Skeleton width="100%" height="16px" />
          <Skeleton width="95%" height="16px" />
          <Skeleton width="90%" height="16px" />
        </div>

        {/* Stats skeleton */}
        <div className="flex gap-4">
          <Skeleton width="80px" height="40px" />
          <Skeleton width="80px" height="40px" />
          <Skeleton width="80px" height="40px" />
        </div>

        {/* Button skeleton */}
        <Skeleton width="100%" height="44px" />
      </div>
    );
  }

  return (
    <div className="max-w-md border rounded-lg p-6">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={user?.avatar}
          alt={user?.name}
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h2 className="text-xl font-bold">{user?.name}</h2>
          <p className="text-gray-600">{user?.email}</p>
        </div>
      </div>
      {/* Rest of the content */}
    </div>
  );
};
```

---

## Toggle

The Toggle component provides an animated switch control for toggling between on/off states with various visual styles and sizes.

### Import

```jsx
import { Toggle } from "alope-ui";
```

### Props

| Prop                | Type                                                           | Default     | Description                              |
| ------------------- | -------------------------------------------------------------- | ----------- | ---------------------------------------- |
| `variant`           | `'primary' \| 'error' \| 'warning' \| 'success' \| 'info' \| 'secondary'` | `'primary'` | Color variant of the toggle              |
| `customSize`        | `'sm' \| 'md' \| 'lg'`                                         | `'md'`      | Size of the toggle switch                |
| `thumbShape`        | `'stadium' \| 'rounded'`                                       | `'stadium'` | Shape of the toggle thumb                |
| `label`             | `string`                                                       | `undefined` | Label text displayed next to toggle      |
| `wrapperClassName`  | `string`                                                       | `""`        | CSS class for wrapper element            |
| `labelClassName`    | `string`                                                       | `""`        | CSS class for label text                 |
| `...props`          | `InputHTMLAttributes<HTMLInputElement>`                        | -           | All standard HTML input attributes       |

### Basic Toggle

```jsx
import { useState } from "react";
import { Toggle } from "alope-ui";

const BasicExample = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Toggle
      checked={isChecked}
      onChange={(e) => setIsChecked(e.target.checked)}
    />
  );
};
```

### With Label

```jsx
<Toggle
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
  label="Enable notifications"
/>
```

### Variants

```jsx
{/* Primary Variant */}
<Toggle
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
  variant="primary"
  label="Primary"
/>

{/* Error Variant */}
<Toggle
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
  variant="error"
  label="Error"
/>

{/* Warning Variant */}
<Toggle
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
  variant="warning"
  label="Warning"
/>

{/* Success Variant */}
<Toggle
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
  variant="success"
  label="Success"
/>

{/* Info Variant */}
<Toggle
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
  variant="info"
  label="Info"
/>

{/* Secondary Variant */}
<Toggle
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
  variant="secondary"
  label="Secondary"
/>
```

### Sizes

```jsx
{/* Small Size */}
<Toggle
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
  customSize="sm"
  label="Small"
/>

{/* Medium Size */}
<Toggle
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
  customSize="md"
  label="Medium"
/>

{/* Large Size */}
<Toggle
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
  customSize="lg"
  label="Large"
/>
```

### Thumb Shapes

```jsx
{/* Stadium Shape (Fully Rounded) */}
<Toggle
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
  thumbShape="stadium"
  label="Stadium"
/>

{/* Rounded Shape (Slightly Rounded) */}
<Toggle
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
  thumbShape="rounded"
  label="Rounded"
/>
```

### Disabled State

```jsx
<Toggle
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
  disabled
  label="Disabled toggle"
/>
```

### Custom Styling

```jsx
<Toggle
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
  label="Custom styled toggle"
  wrapperClassName="bg-gray-100 p-4 rounded-lg"
  labelClassName="text-lg font-bold text-blue-600"
/>
```

### Complete Example

```jsx
import { useState } from "react";
import { Toggle } from "alope-ui";

const CompleteExample = () => {
  const [settings, setSettings] = useState({
    notifications: false,
    darkMode: true,
    autoSave: false,
  });

  const handleToggle = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings(prev => ({
      ...prev,
      [key]: e.target.checked
    }));
  };

  return (
    <div className="space-y-4">
      <Toggle
        checked={settings.notifications}
        onChange={handleToggle('notifications')}
        variant="primary"
        customSize="md"
        label="Enable notifications"
      />
      
      <Toggle
        checked={settings.darkMode}
        onChange={handleToggle('darkMode')}
        variant="secondary"
        customSize="md"
        label="Dark mode"
      />
      
      <Toggle
        checked={settings.autoSave}
        onChange={handleToggle('autoSave')}
        variant="success"
        customSize="md"
        label="Auto-save documents"
      />
    </div>
  );
};
```

---

## FileUpload

The FileUpload component provides a flexible file upload interface with support for drag-and-drop, file validation, preview, and two display modes (dropzone and text input).

### Import

```jsx
import { FileUpload } from "alope-ui";
```

### Props

| Prop             | Type                           | Default      | Description                                      |
| ---------------- | ------------------------------ | ------------ | ------------------------------------------------ |
| `onFilesChange`  | `(files: File[]) => void`      | `required`   | Callback fired when files change                 |
| `acceptedFiles`  | `string`                       | `'image/*'`  | Accepted file types (MIME types or extensions)   |
| `maxFiles`       | `number`                       | `1`          | Maximum number of files allowed                  |
| `maxKiloByte`    | `number`                       | `2048`       | Maximum file size in kilobytes                   |
| `mode`           | `'dropzone' \| 'textinput'`    | `'dropzone'` | Display mode of the file upload                  |
| `clearable`      | `boolean`                      | `true`       | Show clear button on file previews               |
| `inputLabel`     | `string`                       | `undefined`  | Label for text input mode button                 |
| `helperText`     | `string`                       | `undefined`  | Helper text displayed below the input            |
| `mediaCapture`   | `'user' \| 'environment'`      | `undefined`  | Camera capture mode (for mobile devices)         |

### Basic FileUpload (Dropzone Mode)

```jsx
import { useState } from "react";
import { FileUpload } from "alope-ui";

const BasicExample = () => {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <FileUpload
      onFilesChange={setFiles}
    />
  );
};
```

### Text Input Mode

```jsx
<FileUpload
  mode="textinput"
  onFilesChange={setFiles}
  inputLabel="Upload File"
/>
```

### Multiple Files

```jsx
<FileUpload
  maxFiles={5}
  onFilesChange={setFiles}
  helperText="You can upload up to 5 files"
/>
```

### Custom File Types

```jsx
{/* Accept only images */}
<FileUpload
  acceptedFiles="image/*"
  onFilesChange={setFiles}
/>

{/* Accept specific image types */}
<FileUpload
  acceptedFiles="image/png, image/jpeg, image/jpg"
  onFilesChange={setFiles}
/>

{/* Accept PDFs */}
<FileUpload
  acceptedFiles="application/pdf"
  onFilesChange={setFiles}
/>

{/* Accept by file extension */}
<FileUpload
  acceptedFiles=".pdf, .doc, .docx"
  onFilesChange={setFiles}
/>

{/* Accept multiple types */}
<FileUpload
  acceptedFiles="image/*, .pdf, .doc"
  onFilesChange={setFiles}
/>
```

### File Size Limit

```jsx
{/* 5MB limit */}
<FileUpload
  maxKiloByte={5120}
  onFilesChange={setFiles}
  helperText="Maximum file size: 5MB"
/>

{/* 500KB limit */}
<FileUpload
  maxKiloByte={512}
  onFilesChange={setFiles}
  helperText="Maximum file size: 500KB"
/>
```

### With Helper Text

```jsx
<FileUpload
  onFilesChange={setFiles}
  helperText="Accepted formats: PNG, JPG, JPEG. Max size: 2MB"
/>
```

### Camera Capture (Mobile)

```jsx
{/* Use front camera */}
<FileUpload
  acceptedFiles="image/*"
  mediaCapture="user"
  onFilesChange={setFiles}
/>

{/* Use back camera */}
<FileUpload
  acceptedFiles="image/*"
  mediaCapture="environment"
  onFilesChange={setFiles}
/>
```

### Non-clearable Files

```jsx
<FileUpload
  onFilesChange={setFiles}
  clearable={false}
/>
```

### Complete Example with Dropzone Mode

```jsx
import { useState } from "react";
import { FileUpload } from "alope-ui";

const DropzoneExample = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFilesChange = (files: File[]) => {
    setUploadedFiles(files);
    console.log('Uploaded files:', files);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Upload Your Images</h2>
      
      <FileUpload
        mode="dropzone"
        acceptedFiles="image/png, image/jpeg, image/jpg"
        maxFiles={3}
        maxKiloByte={5120}
        onFilesChange={handleFilesChange}
        helperText="Upload up to 3 images. Max 5MB per file."
      />
      
      {uploadedFiles.length > 0 && (
        <div className="mt-4">
          <p className="font-medium">Selected files:</p>
          <ul className="list-disc list-inside">
            {uploadedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
```

### Complete Example with Text Input Mode

```jsx
import { useState } from "react";
import { FileUpload } from "alope-ui";

const TextInputExample = () => {
  const [documents, setDocuments] = useState<File[]>([]);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Upload Documents</h2>
      
      <FileUpload
        mode="textinput"
        acceptedFiles=".pdf, .doc, .docx"
        maxFiles={5}
        maxKiloByte={10240}
        inputLabel="Choose Documents"
        onFilesChange={setDocuments}
        helperText="Accepted: PDF, DOC, DOCX. Max 10MB per file."
      />
    </div>
  );
};
```

---

## Textarea

The Textarea component provides a multi-line text input with optional auto-resize functionality, label, error messages, and dark mode support.

### Import

```jsx
import { Textarea } from "alope-ui";
import type { TextareaType } from "alope-ui";
```

### Props

| Prop              | Type                                          | Default | Description                                      |
| ----------------- | --------------------------------------------- | ------- | ------------------------------------------------ |
| `label`           | `string`                                      | `undefined` | Label text displayed above textarea          |
| `error`           | `string`                                      | `undefined` | Error message displayed below textarea       |
| `autoResize`      | `boolean`                                     | `false` | Enable auto-resize based on content              |
| `customClassName` | `string`                                      | `""`    | Custom CSS class for textarea element            |
| `...props`        | `InputHTMLAttributes<HTMLTextAreaElement>`    | -       | All standard HTML textarea attributes            |

### Basic Textarea

```jsx
import { useState } from "react";
import { Textarea } from "alope-ui";

const BasicExample = () => {
  const [value, setValue] = useState("");

  return (
    <Textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Enter your text here..."
    />
  );
};
```

### With Label

```jsx
<Textarea
  label="Description"
  name="description"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Enter description..."
/>
```

### With Error Message

```jsx
const [description, setDescription] = useState("");
const [error, setError] = useState("");

const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  setDescription(e.target.value);
  if (e.target.value.length < 10) {
    setError("Description must be at least 10 characters");
  } else {
    setError("");
  }
};

<Textarea
  label="Description"
  value={description}
  onChange={handleChange}
  error={error}
  placeholder="Enter at least 10 characters..."
/>
```

### Auto-Resize Textarea

```jsx
<Textarea
  label="Auto-resizing textarea"
  autoResize
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="This textarea grows as you type..."
/>
```

### Disabled State

```jsx
<Textarea
  label="Disabled textarea"
  value="This textarea is disabled"
  disabled
/>
```

### Custom Styling

```jsx
<Textarea
  label="Custom styled textarea"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  customClassName="border-2 border-blue-500 focus:ring-blue-600 rounded-lg"
  placeholder="Custom styled..."
/>
```

### With Rows

```jsx
<Textarea
  label="Fixed height textarea"
  rows={8}
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="8 rows high..."
/>
```

### Complete Example

```jsx
import { useState } from "react";
import { Textarea } from "alope-ui";

const CompleteExample = () => {
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (feedback.length < 20) {
      setError("Feedback must be at least 20 characters");
      return;
    }
    
    console.log("Feedback submitted:", feedback);
    setFeedback("");
    setError("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(e.target.value);
    if (error && e.target.value.length >= 20) {
      setError("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Share Your Feedback</h2>
      
      <Textarea
        label="Feedback"
        name="feedback"
        value={feedback}
        onChange={handleChange}
        error={error}
        autoResize
        placeholder="Tell us what you think... (minimum 20 characters)"
        customClassName="mb-4"
      />
      
      <p className="text-sm text-gray-500 mb-4">
        Character count: {feedback.length}
      </p>
      
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Submit Feedback
      </button>
    </form>
  );
};
```

### Form Integration Example

```jsx
import { useState } from "react";
import { Textarea } from "alope-ui";

const FormExample = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    comments: ""
  });

  const handleChange = (field: string) => (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  return (
    <div className="space-y-4 max-w-lg mx-auto p-6">
      <Textarea
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange('message')}
        placeholder="Your message..."
        rows={4}
      />
      
      <Textarea
        label="Additional Comments"
        name="comments"
        value={formData.comments}
        onChange={handleChange('comments')}
        placeholder="Any additional comments..."
        autoResize
      />
    </div>
  );
};
```

---

## Tabs

The Tabs component provides a tabbed navigation interface for organizing and displaying content in separate panels.

### Import

```jsx
import { Tabs } from "alope-ui";
import type { Tabs as TabType } from "alope-ui";
```

### Props

| Prop                 | Type                                                | Default  | Description                              |
| -------------------- | --------------------------------------------------- | -------- | ---------------------------------------- |
| `tabs`               | `TabType[]`                                         | `required` | Array of tab objects                   |
| `variant`            | `'line' \| 'solid' \| 'subtle' \| 'inline' \| 'outline' \| 'plain'` | `'line'` | Visual variant style    |
| `fitted`             | `boolean`                                           | `false`  | Make tabs fill available width           |
| `wrapperClassName`   | `string`                                            | `""`     | Wrapper container CSS class              |
| `buttonClassName`    | `string`                                            | `""`     | Tab button CSS class                     |
| `activeClassName`    | `string`                                            | `""`     | Active tab CSS class                     |
| `inactiveClassName`  | `string`                                            | `""`     | Inactive tab CSS class                   |
| `activeTab`          | `number`                                            | `undefined` | Controlled active tab index           |
| `onTabChange`        | `(index: number) => void`                           | `undefined` | Callback when tab changes             |

### Tab Object Type

```typescript
type Tabs = {
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
  link?: string;
}
```

### Basic Tabs

```jsx
import { Tabs } from "alope-ui";

const BasicExample = () => {
  const tabs = [
    {
      label: "Profile",
      content: <div>Profile content here</div>,
    },
    {
      label: "Settings",
      content: <div>Settings content here</div>,
    },
    {
      label: "Notifications",
      content: <div>Notifications content here</div>,
    },
  ];

  return <Tabs tabs={tabs} />;
};
```

### Variants

```jsx
{/* Line Variant */}
<Tabs tabs={tabs} variant="line" />

{/* Solid Variant */}
<Tabs tabs={tabs} variant="solid" />

{/* Subtle Variant */}
<Tabs tabs={tabs} variant="subtle" />

{/* Inline Variant */}
<Tabs tabs={tabs} variant="inline" />

{/* Outline Variant */}
<Tabs tabs={tabs} variant="outline" />

{/* Plain Variant */}
<Tabs tabs={tabs} variant="plain" />
```

### Fitted Tabs

```jsx
{/* Tabs will fill the available width equally */}
<Tabs tabs={tabs} fitted />
```

### Controlled Tabs

```jsx
import { useState } from "react";
import { Tabs } from "alope-ui";

const ControlledExample = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Tab 1",
      content: <div>Content 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>Content 2</div>,
    },
  ];

  return (
    <Tabs
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  );
};
```

### Disabled Tabs

```jsx
const tabs = [
  {
    label: "Active Tab",
    content: <div>Active content</div>,
  },
  {
    label: "Disabled Tab",
    content: <div>This content won't show</div>,
    disabled: true,
  },
];

<Tabs tabs={tabs} />
```

### Tabs with Links

```jsx
const tabs = [
  {
    label: "Dashboard",
    content: <div>Dashboard content</div>,
    link: "/dashboard",
  },
  {
    label: "Profile",
    content: <div>Profile content</div>,
    link: "/profile",
  },
];

<Tabs tabs={tabs} />
```

### Custom Styling

```jsx
<Tabs
  tabs={tabs}
  variant="solid"
  wrapperClassName="bg-gray-100 dark:bg-gray-800"
  buttonClassName="text-base"
  activeClassName="font-bold"
  inactiveClassName="opacity-70"
/>
```

### Complete Example

```jsx
import { useState } from "react";
import { Tabs } from "alope-ui";

const CompleteExample = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Overview",
      content: (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">Overview</h2>
          <p>Dashboard overview content goes here.</p>
        </div>
      ),
    },
    {
      label: "Analytics",
      content: (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">Analytics</h2>
          <p>Analytics and statistics content.</p>
        </div>
      ),
    },
    {
      label: "Reports",
      content: (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">Reports</h2>
          <p>Reports and data visualization.</p>
        </div>
      ),
    },
    {
      label: "Settings",
      content: (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">Settings</h2>
          <p>Configuration and preferences.</p>
        </div>
      ),
      disabled: true,
    },
  ];

  return (
    <Tabs
      tabs={tabs}
      variant="subtle"
      fitted
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  );
};
```

---

## Avatar

The Avatar component displays user profile images with fallback initials, status indicators, and various styling options.

### Import

```jsx
import { Avatar } from "alope-ui";
```

### Props

| Prop              | Type                                                      | Default     | Description                           |
| ----------------- | --------------------------------------------------------- | ----------- | ------------------------------------- |
| `imageSrc`        | `string`                                                  | `undefined` | URL of the avatar image               |
| `fallbackName`    | `string`                                                  | `undefined` | Name to generate initials from        |
| `fallbackColor`   | `'primary' \| 'error' \| 'warning' \| 'success' \| 'info' \| 'secondary'` | `'primary'` | Background color for fallback |
| `shape`           | `'sharp' \| 'cornered' \| 'rounded'`                      | `'rounded'` | Shape of the avatar                   |
| `variant`         | `'solid' \| 'outline'`                                    | `'solid'`   | Visual variant style                  |
| `size`            | `'sm' \| 'md' \| 'lg'`                                    | `'md'`      | Size of the avatar                    |
| `ring`            | `boolean`                                                 | `false`     | Show ring around avatar               |
| `ringClassName`   | `string`                                                  | `""`        | Custom ring CSS class                 |
| `alt`             | `string`                                                  | `'avatar'`  | Alt text for image                    |
| `status`          | `'online' \| 'offline'`                                   | `undefined` | Status indicator                      |
| `className`       | `string`                                                  | `""`        | Additional CSS class                  |

### Basic Avatar

```jsx
import { Avatar } from "alope-ui";

const BasicExample = () => {
  return (
    <Avatar
      imageSrc="https://i.pravatar.cc/150?img=1"
      alt="User Avatar"
    />
  );
};
```

### Fallback with Initials

```jsx
{/* Avatar with fallback name */}
<Avatar fallbackName="John Doe" />

{/* Avatar with no image (shows initials) */}
<Avatar 
  imageSrc="invalid-url.jpg" 
  fallbackName="Jane Smith" 
/>
```

### Sizes

```jsx
{/* Small */}
<Avatar 
  imageSrc="https://i.pravatar.cc/150?img=1" 
  size="sm" 
/>

{/* Medium */}
<Avatar 
  imageSrc="https://i.pravatar.cc/150?img=1" 
  size="md" 
/>

{/* Large */}
<Avatar 
  imageSrc="https://i.pravatar.cc/150?img=1" 
  size="lg" 
/>
```

### Shapes

```jsx
{/* Sharp corners */}
<Avatar 
  imageSrc="https://i.pravatar.cc/150?img=1" 
  shape="sharp" 
/>

{/* Cornered (slightly rounded) */}
<Avatar 
  imageSrc="https://i.pravatar.cc/150?img=1" 
  shape="cornered" 
/>

{/* Rounded (circular) */}
<Avatar 
  imageSrc="https://i.pravatar.cc/150?img=1" 
  shape="rounded" 
/>
```

### Variants

```jsx
{/* Solid variant */}
<Avatar 
  fallbackName="John Doe" 
  variant="solid" 
/>

{/* Outline variant */}
<Avatar 
  fallbackName="John Doe" 
  variant="outline" 
/>
```

### Fallback Colors

```jsx
{/* Primary color */}
<Avatar fallbackName="John Doe" fallbackColor="primary" />

{/* Error color */}
<Avatar fallbackName="John Doe" fallbackColor="error" />

{/* Warning color */}
<Avatar fallbackName="John Doe" fallbackColor="warning" />

{/* Success color */}
<Avatar fallbackName="John Doe" fallbackColor="success" />

{/* Info color */}
<Avatar fallbackName="John Doe" fallbackColor="info" />

{/* Secondary color */}
<Avatar fallbackName="John Doe" fallbackColor="secondary" />
```

### With Ring

```jsx
{/* Default ring */}
<Avatar 
  imageSrc="https://i.pravatar.cc/150?img=1" 
  ring 
/>

{/* Custom ring color */}
<Avatar 
  imageSrc="https://i.pravatar.cc/150?img=1" 
  ring 
  ringClassName="ring-success dark:ring-success-dark"
/>
```

### Status Indicator

```jsx
{/* Online status */}
<Avatar 
  imageSrc="https://i.pravatar.cc/150?img=1" 
  status="online" 
/>

{/* Offline status */}
<Avatar 
  imageSrc="https://i.pravatar.cc/150?img=1" 
  status="offline" 
/>
```

### Complete Example

```jsx
import { Avatar } from "alope-ui";

const CompleteExample = () => {
  return (
    <div className="flex gap-4">
      <Avatar
        imageSrc="https://i.pravatar.cc/150?img=1"
        fallbackName="John Doe"
        size="lg"
        shape="rounded"
        ring
        status="online"
        alt="John Doe Avatar"
      />
      
      <Avatar
        imageSrc="https://i.pravatar.cc/150?img=2"
        fallbackName="Jane Smith"
        size="lg"
        shape="rounded"
        ring
        status="offline"
        alt="Jane Smith Avatar"
      />
    </div>
  );
};
```

## AvatarGroup

The AvatarGroup component displays multiple avatars in an overlapping stack with a counter for additional avatars.

### Import

```jsx
import { AvatarGroup } from "alope-ui";
import type { AvatarGroupProps } from "alope-ui";
```

### Props

| Prop          | Type              | Default  | Description                              |
| ------------- | ----------------- | -------- | ---------------------------------------- |
| `avatars`     | `AvatarProps[]`   | `required` | Array of avatar configurations         |
| `maxVisible`  | `number`          | `3`      | Maximum number of visible avatars        |
| `size`        | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of all avatars in the group    |
| `overlap`     | `string`          | `'-ml-3'` | CSS class for overlap spacing           |
| `className`   | `string`          | `""`     | Additional CSS class                     |

### Basic AvatarGroup

```jsx
import { AvatarGroup } from "alope-ui";

const BasicGroupExample = () => {
  const avatars = [
    { imageSrc: "https://i.pravatar.cc/150?img=1", fallbackName: "John Doe" },
    { imageSrc: "https://i.pravatar.cc/150?img=2", fallbackName: "Jane Smith" },
    { imageSrc: "https://i.pravatar.cc/150?img=3", fallbackName: "Bob Wilson" },
  ];

  return <AvatarGroup avatars={avatars} />;
};
```

### With Max Visible Limit

```jsx
const avatars = [
  { imageSrc: "https://i.pravatar.cc/150?img=1", fallbackName: "User 1" },
  { imageSrc: "https://i.pravatar.cc/150?img=2", fallbackName: "User 2" },
  { imageSrc: "https://i.pravatar.cc/150?img=3", fallbackName: "User 3" },
  { imageSrc: "https://i.pravatar.cc/150?img=4", fallbackName: "User 4" },
  { imageSrc: "https://i.pravatar.cc/150?img=5", fallbackName: "User 5" },
];

{/* Show only 3 avatars, rest shown as "+2" */}
<AvatarGroup avatars={avatars} maxVisible={3} />
```

### Different Sizes

```jsx
{/* Small size */}
<AvatarGroup avatars={avatars} size="sm" />

{/* Medium size */}
<AvatarGroup avatars={avatars} size="md" />

{/* Large size */}
<AvatarGroup avatars={avatars} size="lg" />
```

### Custom Overlap

```jsx
{/* More overlap */}
<AvatarGroup avatars={avatars} overlap="-ml-4" />

{/* Less overlap */}
<AvatarGroup avatars={avatars} overlap="-ml-2" />

{/* No overlap */}
<AvatarGroup avatars={avatars} overlap="" />
```

### Complete AvatarGroup Example

```jsx
import { AvatarGroup } from "alope-ui";

const CompleteGroupExample = () => {
  const teamMembers = [
    { 
      imageSrc: "https://i.pravatar.cc/150?img=1", 
      fallbackName: "John Doe",
      status: "online"
    },
    { 
      imageSrc: "https://i.pravatar.cc/150?img=2", 
      fallbackName: "Jane Smith",
      status: "online"
    },
    { 
      imageSrc: "https://i.pravatar.cc/150?img=3", 
      fallbackName: "Bob Wilson",
      status: "offline"
    },
    { 
      fallbackName: "Alice Brown",
      fallbackColor: "success"
    },
    { 
      fallbackName: "Charlie Davis",
      fallbackColor: "info"
    },
  ];

  return (
    <AvatarGroup
      avatars={teamMembers}
      maxVisible={3}
      size="md"
      overlap="-ml-3"
    />
  );
};
```

---

## 💡 Contributing

We welcome contributions! If you want to add features, fix bugs, or improve documentation, feel free to fork this project and submit a pull request.

---

## 📄 License

MIT License – Free to use, modify, and distribute.

---

## 🙌 Thank You

Thank you for using **ALOPE UI Library**. We hope this helps you build beautiful and functional user interfaces with ease.