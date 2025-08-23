# ALOPE UI Library

[![npm version](https://img.shields.io/npm/v/alope-ui-v3.svg)](https://www.npmjs.com/package/alope-ui-v3)
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
npm install alope-ui-v3
```

**Add ``@import`` directive(s) on your main css file:**
```css
/* index.css */

/* Make sure to import TailwindCSS first */
@import "tailwindcss";

/* Then import the styles from Alope UI */
@import "../node_modules/alope-ui-v3/dist/index.css";
```

### Basic Setup

Import and use any component in your React application:

```jsx
import React from 'react';
import { Button } from 'alope-ui-v3';

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

If you're using the ``to`` prop on a ``Button`` (or any other component that uses SPA-style navigation), make sure you have a ``react-router-dom`` properly configured.
Refer to the [official documentation](https://reactrouter.com/start/declarative/installation) for setup instructions if needed.


```jsx
import React from 'react';
import { Button } from 'alope-ui-v3';

function App() {
  return (
    <div className="App">
      <Button to='/button' variant="solid" variantType="primary">
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

### Feedback Components
- [⚠️ Alert](#alert) - Status messages and notifications
- [🍞 Toast](#toast) - Temporary notification messages

### Data Display
- [🏷️ Badge](#badge) - Status indicators and labels
- [🃏 Card](#card) - Content containers

### Form Controls
- [☑️ Checkbox Input](#checkbox-input) - Multiple choice selections
- [🔘 Radio Input](#radio-input) - Single choice selections
- [📝 Select Input](#select-input) - Dropdown selections
- [⌨️ Text Input](#text-input) - Text input fields

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
import { Accordion } from "alope-ui-v3";
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `AccordionItem[]` | `[]` | Array of accordion items |
| `single` | `boolean` | `true` | Allow only one panel open at a time |
| `openIndex` | `number \| number[]` | `undefined` | Controlled open state |
| `onToggleItem` | `function` | `undefined` | Callback when item is toggled |
| `icon` | `function` | `undefined` | Custom icon renderer |
| `labelClassName` | `string` | `""` | Custom CSS class for labels |
| `labelContainerClassName` | `string` | `""` | Custom CSS class for label containers |
| `descriptionClassName` | `string` | `""` | Custom CSS class for descriptions |

### Basic Usage

```jsx
const accordionData = [
  { 
    label: "What is ALOPE UI?", 
    description: "ALOPE UI is a modern React component library that helps you build beautiful user interfaces quickly." 
  },
  { 
    label: "How do I install it?", 
    description: "You can install ALOPE UI using npm, yarn, or pnpm. Check the installation section for details." 
  },
  { 
    label: "Is it free to use?", 
    description: "Yes! ALOPE UI is completely free and open-source under the MIT license." 
  },
];

<Accordion data={accordionData} />
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
  icon={isActive => (
    <svg
      className={`w-5 h-5 transition-transform duration-300 ${
        isActive ? 'rotate-180' : 'rotate-0'
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
/>
```

---

## Alert

The Alert component displays important messages to users with different severity levels.

### Import

```jsx
import { Alert } from "alope-ui-v3";
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'success' \| 'info' \| 'warning' \| 'error'` | `'info'` | Alert severity type |
| `title` | `string` | `""` | Alert title |
| `description` | `string` | `""` | Alert description |
| `icon` | `ReactNode` | `undefined` | Custom icon |
| `action` | `ReactNode` | `undefined` | Action button or element |
| `withClose` | `boolean` | `false` | Show close button |
| `onClose` | `function` | `undefined` | Close callback |

### Basic Usage

```jsx
<Alert
  title="Welcome!"
  description="Thanks for choosing ALOPE UI for your project."
/>
```

### Alert Types

```jsx
{/* Success Alert */}
<Alert 
  type="success" 
  title="Success!" 
  description="Your changes have been saved successfully." 
/>

{/* Info Alert */}
<Alert 
  type="info" 
  title="Information" 
  description="Here's some helpful information for you." 
/>

{/* Warning Alert */}
<Alert 
  type="warning" 
  title="Warning" 
  description="Please review your input before proceeding." 
/>

{/* Error Alert */}
<Alert 
  type="error" 
  title="Error" 
  description="Something went wrong. Please try again." 
/>
```

### Alert with Custom Icon

```jsx
<Alert
  type="warning"
  title="Important Notice"
  description="This action cannot be undone."
  icon={
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
  onClose={() => console.log('Alert closed')}
/>
```

---

## Badge

The Badge component is used to display small pieces of information like status, count, or labels.

### Import

```jsx
import { Badge } from "alope-ui-v3";
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'success' \| 'info' \| 'warning' \| 'error'` | `'default'` | Badge color variant |
| `children` | `ReactNode` | `undefined` | Badge content |
| `isAbsolute` | `boolean` | `false` | Absolute positioning |
| `position` | `'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left'` | `'top-right'` | Position when absolute |
| `icon` | `ReactNode` | `undefined` | Custom icon |

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
  <Button>
    Messages
  </Button>
  <Badge 
    variant="error" 
    position="top-right" 
    isAbsolute
  >
    3
  </Badge>
</div>
```

### All Position Examples

```jsx
<div className="grid grid-cols-2 gap-4 w-fit">
  <Card containerClassName="relative p-8">
    <Badge variant="success" position="top-left" isAbsolute>1</Badge>
    <span>Top Left</span>
  </Card>
  
  <Card containerClassName="relative p-8">
    <Badge variant="info" position="top-right" isAbsolute>2</Badge>
    <span>Top Right</span>
  </Card>
  
  <Card containerClassName="relative p-8">
    <Badge variant="warning" position="bottom-left" isAbsolute>3</Badge>
    <span>Bottom Left</span>
  </Card>
  
  <Card containerClassName="relative p-8">
    <Badge variant="error" position="bottom-right" isAbsolute>4</Badge>
    <span>Bottom Right</span>
  </Card>
</div>
```

---

## Breadcrumb

The Breadcrumb component provides navigation context showing the user's location within the application hierarchy.

### Import

```jsx
import { Breadcrumb } from "alope-ui-v3";
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `BreadcrumbItem[]` | `[]` | Array of breadcrumb items |
| `separator` | `ReactNode` | `"/"` | Custom separator between items |
| `linkClassName` | `string` | `""` | Custom CSS class for links |

### Basic Usage

```jsx
const breadcrumbData = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Laptops', path: '/products/laptops' },
  { label: 'MacBook Pro' } // Current page (no path)
];

<Breadcrumb data={breadcrumbData} />
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
    label: 'Home',
    path: '/',
    icon: (
      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
    ),
  },
  {
    label: 'Products',
    path: '/products',
    icon: <span className="mr-1">🛍️</span>,
  },
  {
    label: 'MacBook Pro',
    icon: <span className="mr-1">💻</span>,
  },
];

<Breadcrumb data={breadcrumbWithIcons} />
```

---

## Button

The Button component provides clickable elements for user interactions with various styles and states.

### Import

```jsx
import { Button } from "alope-ui-v3";
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'solid' \| 'outline' \| 'ghost' \| 'plain'` | `'solid'` | Button style variant |
| `variantType` | `'primary' \| 'secondary' \| 'success' \| 'info' \| 'warning' \| 'error'` | `'primary'` | Button color theme |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `radius` | `'regular' \| 'stadium'` | `'regular'` | Border radius style |
| `fullWidth` | `boolean` | `false` | Full width button |
| `disabled` | `boolean` | `false` | Disabled state |
| `to` | `string` | `undefined` | Link destination |
| `prefixIcon` | `ReactNode` | `undefined` | Icon before text |
| `suffixIcon` | `ReactNode` | `undefined` | Icon after text |
| `onClick` | `function` | `undefined` | Click handler |
| `children` | `ReactNode` | `undefined` | Button content |

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
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    }
  >
    Search
  </Button>
  
  <Button 
    suffixIcon={
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
      onClick={() => alert('Button clicked!')}
    >
      Create New
    </Button>
    
    <Button 
      variant="outline" 
      variantType="secondary" 
      size="lg"
    >
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
import { Card } from "alope-ui-v3";
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `image` | `string` | `undefined` | Image URL |
| `title` | `string` | `undefined` | Card title |
| `description` | `string` | `undefined` | Card description |
| `footer` | `ReactNode` | `undefined` | Card footer content |
| `ribbon` | `string` | `undefined` | Ribbon text |
| `horizontal` | `boolean` | `false` | Horizontal layout |
| `children` | `ReactNode` | `undefined` | Card content |
| `containerClassName` | `string` | `""` | Container CSS class |
| `titleClassName` | `string` | `""` | Title CSS class |
| `descriptionClassName` | `string` | `""` | Description CSS class |

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
      <Button size="sm" variantType="primary">Enroll Now</Button>
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
      <Button size="sm" variant="outline">Preview</Button>
      <Button size="sm" variantType="primary">Start Learning</Button>
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
import { Modal } from "alope-ui-v3";
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | `false` | Modal visibility state |
| `onClose` | `function` | `required` | Close handler |
| `title` | `string` | `undefined` | Modal title |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Modal size |
| `overlayClose` | `boolean` | `true` | Close on overlay click |
| `children` | `ReactNode` | `undefined` | Modal content |

### Basic Modal

```jsx
const [isOpen, setIsOpen] = useState(false);

<>
  <Button onClick={() => setIsOpen(true)}>
    Open Modal
  </Button>
  
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
        <Button 
          variant="outline" 
          onClick={() => setIsOpen(false)}
        >
          Cancel
        </Button>
        <Button onClick={() => setIsOpen(false)}>
          Confirm
        </Button>
      </div>
    </div>
  </Modal>
</>
```

### Confirmation Modal

```jsx
const [isDeleteOpen, setIsDeleteOpen] = useState(false);

const handleDelete = () => {
  // Perform delete action
  console.log('Item deleted');
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
        <Button 
          variant="outline" 
          onClick={() => setIsDeleteOpen(false)}
        >
          Cancel
        </Button>
        <Button 
          variantType="error" 
          onClick={handleDelete}
        >
          Yes, Delete
        </Button>
      </div>
    </div>
  </Modal>
</>
```

### Form Modal

```jsx
const [isFormOpen, setIsFormOpen] = useState(false);

<>
  <Button onClick={() => setIsFormOpen(true)}>
    Add User
  </Button>
  
  <Modal
    isOpen={isFormOpen}
    onClose={() => setIsFormOpen(false)}
    title="Add New User"
    size="lg"
  >
    <div className="p-6">
      <form className="space-y-4">
        <TextInput
          label="Full Name"
          placeholder="Enter full name"
          required
        />
        <TextInput
          label="Email Address"
          type="email"
          placeholder="Enter email address"
          required
        />
        <SelectInput
          label="Role"
          options={[
            { label: 'Admin', value: 'admin' },
            { label: 'User', value: 'user' },
            { label: 'Moderator', value: 'moderator' }
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
</>
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
import { Offcanvas } from "alope-ui-v3";
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | `false` | Controls visibility of the offcanvas |
| `onClose` | `() => void` | `required` | Callback function when offcanvas closes |
| `title` | `string` | `undefined` | Offcanvas header title |
| `position` | `'left' \| 'right'` | `'left'` | Position where offcanvas slides from |
| `children` | `ReactNode` | `undefined` | Offcanvas content |
| `className` | `string` | `""` | Custom CSS class for offcanvas container |
| `titleClassName` | `string` | `""` | Custom CSS class for title |
| `closeButtonClassName` | `string` | `""` | Custom CSS class for close button |

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
  <p>This is the content of the offcanvas with that slides in from the right.</p>
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
    <p>You can put any content here, such as text, forms, or other components.</p>
  </div>
</Offcanvas>
```

---

## Toast

The Toast component provides brief, auto-dismissable messages to inform users about actions or status updates.

### Adding Provider

First, import the ToastProvider

```jsx
import { ToastProvider } from 'alope-ui-v3'
```

Then, wrap your main application component with the provider (e.g. in App.tsx or your entry file):

```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ToastProvider } from 'alope-ui-v3';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </StrictMode>
);

```

### Use Toast

Finally, you can use the ``useToast()`` hook like this:

```jsx
import { useToast } from 'alope-ui-v3'
```

```jsx
const { addToast } = useToast();
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `required` | Toast title |
| `message` | `string` | `required` | Toast message content |
| `type` | `'success' \| 'error' \| 'info' \| 'warning'` | `'info'` | Toast type/variant |
| `variant` | `'filled' \| 'outline'` | `'filled'` | Toast visual style |
| `position` | `'topLeft' \| 'topRight' \| 'bottomLeft' \| 'bottomRight'` | `'topRight'` | Toast position on screen |

### Basic Toast

```jsx
import { useToast } from "alope-ui-v3";

const BasicExample = () => {
  const { addToast } = useToast();

  return (
    <div className="flex gap-4">
      <Button onClick={() => addToast({ 
        title: 'Success', 
        message: 'This is a success message!', 
        type: 'success' 
      })}>
        Success Toast
      </Button>
      
      <Button onClick={() => addToast({ 
        title: 'Error', 
        message: 'This is an error message!', 
        type: 'error' 
      })}>
        Error Toast
      </Button>
      
      <Button onClick={() => addToast({ 
        title: 'Info', 
        message: 'This is an info message!', 
        type: 'info' 
      })}>
        Info Toast
      </Button>
      
      <Button onClick={() => addToast({ 
        title: 'Warning', 
        message: 'This is a warning message!', 
        type: 'warning' 
      })}>
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
import { CheckboxInput, ListCheckboxInput } from "alope-ui-v3";
import type { CheckboxOptionType } from "alope-ui-v3";
```

### CheckboxInput Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `required` | Checkbox label text |
| `checked` | `boolean` | `false` | Checkbox checked state |
| `indeterminate` | `boolean` | `false` | Indeterminate state for partial selection |
| `onChange` | `(e: ChangeEvent<HTMLInputElement>) => void` | `required` | Change handler function |
| `description` | `string` | `undefined` | Additional description text |

### ListCheckboxInput Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `CheckboxOptionType[]` | `required` | Array of checkbox options |
| `selectedValues` | `CheckboxOptionType[]` | `[]` | Currently selected options |
| `onValueChange` | `(values: CheckboxOptionType[]) => void` | `required` | Change handler for selected values |
| `variant` | `'solid' \| 'subtle' \| 'outline'` | `'solid'` | Visual variant style |
| `checkboxSize` | `'sm' \| 'md' \| 'lg'` | `'md'` | Checkbox size |
| `containerClassName` | `string` | `""` | Container CSS class |

### Basic CheckboxInput

```jsx
import { useState } from 'react';
import { CheckboxInput } from "alope-ui-v3";

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
import { ListCheckboxInput } from "alope-ui-v3";
import type { CheckboxOptionType } from "alope-ui-v3";

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
{/* Solid Variant */}
<ListCheckboxInput
  options={options}
  selectedValues={selectedOptions}
  onValueChange={setSelectedOptions}
  variant="solid"
  checkboxSize="md"
/>

{/* Subtle Variant */}
<ListCheckboxInput
  options={options}
  selectedValues={selectedOptions}
  onValueChange={setSelectedOptions}
  variant="subtle"
  checkboxSize="md"
/>

{/* Outline Variant */}
<ListCheckboxInput
  options={options}
  selectedValues={selectedOptions}
  onValueChange={setSelectedOptions}
  variant="outline"
  checkboxSize="md"
/>
```

### Sizes

```jsx
{/* Large Size */}
<ListCheckboxInput
  options={options}
  selectedValues={selectedOptions}
  onValueChange={setSelectedOptions}
  variant="solid"
  checkboxSize="lg"
/>
```

---

## Radio Input

The RadioInput component allows users to choose one option from a list of mutually exclusive choices.

### Import

```jsx
import { RadioInput } from "alope-ui-v3";
import type { RadioOptionType } from "alope-ui-v3";
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | `required` | Name attribute for radio group |
| `options` | `RadioOptionType[]` | `required` | Array of radio options |
| `selectedValue` | `RadioOptionType \| undefined` | `undefined` | Currently selected option |
| `onValueChange` | `(value: RadioOptionType) => void` | `required` | Change handler function |
| `variant` | `'subtle' \| 'solid' \| 'outline'` | `'subtle'` | Visual variant style |
| `radioSize` | `'sm' \| 'md' \| 'lg'` | `'md'` | Radio button size |
| `disabled` | `boolean` | `false` | Disable all radio options |
| `containerClassName` | `string` | `""` | Container CSS class |
| `inputGroupClassName` | `string \| (isChecked: boolean) => string` | `""` | Input group CSS class |
| `inputLabelClassName` | `string \| (isChecked: boolean) => string` | `""` | Label CSS class |
| `inputRadioClassName` | `string \| (isChecked: boolean) => string` | `""` | Radio input CSS class |

### Basic RadioInput

```jsx
import { useState } from 'react';
import { RadioInput } from "alope-ui-v3";
import type { RadioOptionType } from "alope-ui-v3";

const options: RadioOptionType[] = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const BasicExample = () => {
  const [selectedValue, setSelectedValue] = useState<RadioOptionType | undefined>(options[0]);

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
{/* Subtle Variant */}
<RadioInput
  name="variant-subtle"
  options={options}
  selectedValue={selectedValue}
  onValueChange={setSelectedValue}
  variant="subtle"
/>

{/* Solid Variant */}
<RadioInput
  name="variant-solid"
  options={options}
  selectedValue={selectedValue}
  onValueChange={setSelectedValue}
  variant="solid"
/>

{/* Outline Variant */}
<RadioInput
  name="variant-outline"
  options={options}
  selectedValue={selectedValue}
  onValueChange={setSelectedValue}
  variant="outline"
/>
```

### Sizes

```jsx
{/* Small Size */}
<RadioInput
  name="size-sm"
  options={options}
  selectedValue={selectedValue}
  onValueChange={setSelectedValue}
  radioSize="sm"
/>

{/* Large Size */}
<RadioInput
  name="size-lg"
  options={options}
  selectedValue={selectedValue}
  onValueChange={setSelectedValue}
  radioSize="lg"
/>
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
      ? 'bg-blue-100 border-blue-500 shadow-md'
      : 'bg-white border-gray-300 hover:bg-gray-100'
  }
  inputLabelClassName={(isChecked) =>
    isChecked ? 'text-blue-800 font-bold' : 'text-gray-600'
  }
  inputRadioClassName={(isChecked) =>
    isChecked ? 'bg-blue-600 border-blue-600' : 'bg-white border-gray-400'
  }
/>
```

---

## Select Input

The SelectInput component provides a dropdown interface for selecting one or multiple options from a list.

### Import

```jsx
import { SelectInput } from "alope-ui-v3";
import type { SelectOptionType } from "alope-ui-v3";
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `instanceId` | `string` | `required` | Unique identifier for the select instance |
| `label` | `string` | `undefined` | Label text for the select |
| `options` | `SelectOptionType[]` | `required` | Array of selectable options |
| `value` | `SelectOptionType \| SelectOptionType[] \| null` | `null` | Selected value(s) |
| `onChange` | `(value: any) => void` | `required` | Change handler function |
| `placeholder` | `string` | `"Select..."` | Placeholder text |
| `isMulti` | `boolean` | `false` | Enable multiple selection |
| `isSearchable` | `boolean` | `false` | Enable search functionality |
| `isClearable` | `boolean` | `false` | Enable clear button |
| `error` | `string` | `undefined` | Error message to display |
| `labelClassName` | `string` | `""` | Label CSS class |
| `customClassNames` | `object` | `{}` | Custom class names for react-select components |

### Single Select

```jsx
import { useState } from 'react';
import { SelectInput } from "alope-ui-v3";
import type { SelectOptionType } from "alope-ui-v3";

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
    control: ({ isFocused }) => cn(
      '!w-full !border !rounded-lg p-2 !shadow-md !sm:text-sm !min-h-[38px]',
      isFocused
        ? 'border-info !ring-1 !ring-info'
        : '!border-info'
    ),
    option: ({ isFocused, isSelected }) =>
      `!px-4 !py-2 !cursor-pointer ${
        isSelected
          ? '!bg-info !text-white'
          : isFocused
          ? '!bg-info/30'
          : '!bg-white'
      }`,
  }}
/>
```

---

## Text Input

The TextInput component provides a text input field for users to enter text information.

### Import

```jsx
import { TextInput } from "alope-ui-v3";
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | `required` | Input element ID |
| `name` | `string` | `required` | Input name attribute |
| `label` | `string` | `undefined` | Label text for the input |
| `placeholder` | `string` | `undefined` | Placeholder text |
| `error` | `string` | `undefined` | Error message to display |
| `disabled` | `boolean` | `false` | Disable the input |

### Basic TextInput

```jsx
import { TextInput } from "alope-ui-v3";

const BasicExample = () => {
  return (
    <TextInput
      id="basic"
      name="basic"
      placeholder="Enter text here"
    />
  );
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

## 💡 Contributing

We welcome contributions! If you want to add features, fix bugs, or improve documentation, feel free to fork this project and submit a pull request.

---

## 📄 License

MIT License – Free to use, modify, and distribute.

---

## 🙌 Thank You

Thank you for using **ALOPE UI Library**. We hope this helps you build beautiful and functional user interfaces with ease.