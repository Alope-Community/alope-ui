# ALOPE UI Library

## 📚 Available Translations:

- 🇮🇩 [Bahasa Indonesia](README_ID.md)

**ALOPE UI Library** is a powerful and modern React-based user interface (UI) component library. It offers a collection of flexible and accessible UI components designed to accelerate your web development workflow and deliver consistent user experiences.

This documentation provides detailed usage instructions and examples for each component available in the library.

---

## 📦 Features

- ✨ **Modular** and reusable component system
- 🎨 **Modern design** with clean and consistent style
- 🔧 Fully **customizable via props and classNames**
- 📘 **Well-documented** and easy-to-use examples
- 📦 Lightweight and **tree-shakable** for optimized builds

---

## 🧩 Components

- [Accordion](#accordion)
- [Alert](#alert)
- [Badge](#badge)
- [Breadcrumb](#breadcrumb)
- [Button](#button)
- [Card](#card)
- [Checkbox Input](#checkbox-input)
- [Modal](#modal)
- [Offcanvas](#offcanvas)
- [Radio Input](#radio-input)
- [Select Input](#select-input)
- [Text Input](#text-input)
- [Toast](#toast)

---

## 🚀 Getting Started

> ⚠️ Make sure you're inside a React project before running this.

### Installation via npm

```bash
npm i alope-ui
```

### Installation via yarn

```bash
yarn add alope-ui
```

---

## 🧪 Examples

### Accordion

#### ➕ Import

```jsx
import { Accordion } from "alope-ui/Accordion";
```

#### 🔹 Basic Usage

```jsx
const data = [
  { label: "What is Accordion?", description: "This is description of an Accordion." },
  { label: "What is Accordion?", description: "This is description of an Accordion." },
  { label: "What is Accordion?", description: "This is description of an Accordion." },
];

<Accordion data={data} />
```

#### 🔸 Single Panel Open

```jsx
<Accordion single data={data} />
```

#### 🔸 Multiple Panels Open

```jsx
<Accordion single={false} data={data} />
```

#### 🎨 With Custom Classes

```jsx
<Accordion
  data={data}
  labelClassName="font-bold"
  labelContainerClassName="bg-info/35 border-info"
  descriptionClassName="bg-info/50 font-semibold"
/>
```

#### 🔧 With Custom Icon and Controlled State

```jsx
<Accordion
  data={data}
  openIndex={openIndex}
  onToggleItem={(index) => setOpenIndex(index)}
  icon={isActive => (
    <svg
      className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'rotate-180' : 'rotate-0'}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14M5 12h14" />
    </svg>
  )}
/>
```

---

### Alert

#### ➕ Import

```jsx
import { Alert } from "alope-ui/Alert";
```

#### 🔹 Basic Usage

```jsx
<Alert
  title="Alert"
  description="Alert is used to give some feedback or infos to the user."
/>
```

#### 🔸 Types

```jsx
<Alert type="success" title="Success" description="Everything worked!" />
<Alert type="info" title="Info" description="Here's some information." />
<Alert type="warning" title="Warning" description="Be careful!" />
<Alert type="error" title="Error" description="Something went wrong." />
```

#### 🎨 With Custom Icon

```jsx
<Alert
  type="warning"
  title="Alert"
  description="Custom alert with icon."
  icon={
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-warning-700" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    </svg>
  }
/>
```

#### ✅ With Action

```jsx
<Alert
  type="info"
  title="Info Alert"
  description="This alert has a button."
  action={<Button variantType="info">Confirm</Button>}
/>
```

#### ❌ With Close Button

```jsx
<Alert
  withClose
  type="primary"
  title="Closable Alert"
  description="This alert can be closed."
  action={<Button>Got it</Button>}
/>
```

---

### Badge

#### ➕ Import

```jsx
import { Badge } from "alope-ui/Badge";
```

#### 🔹 Variants

```jsx
<Badge variant="default">Default</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="info">Info</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
```

#### 🎯 With Icon

```jsx
<Badge
  isAbsolute
  variant="success"
  position="top-right"
  icon={<MyCustomIcon />}
>
  100
</Badge>
```

#### 📍 Absolute Positioning

🔧 Available Positions:

<b>top-right</b>

<b>top-left</b>

<b>bottom-right</b>

<b>bottom-left</b>

```jsx
<Card containerClassName="relative">
  <Badge variant="success" position={'top-right'} isAbsolute>
    100
  </Badge>
  <div className="p-5">Top Right Badge Position</div>
</Card>
```

#### 🎯 With Icon & Absolute Position

You can render a badge with a custom `icon` and `position` it in one of the four corners relative to its container. This is useful for status indicators, counters, or alerts.

```jsx
<Card containerClassName="relative">
  <Badge
    isAbsolute
    variant="success"
    position={'top-right'}
    icon={
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z" />
      </svg>
    }
  >
    100
  </Badge>
  <div className="p-5 text-center text-sm text-gray-700">
    Top Right Badge Position & Custom Icon
  </div>
</Card>
```

---

### Breadcrumb

#### ➕ Import

```jsx
import { Breadcrumb } from "alope-ui/Breadcrumb";
```

#### 🔹 Basic Usage

```jsx
<Breadcrumb data={breadcrumbItems} />
```

#### 🔹 Custom Separator

```jsx
<Breadcrumb 
  data={breadcrumbItems} 
  separator={<div>/</div>}
/>
```

#### 🔹 Custom ClassName

```jsx
<Breadcrumb
  data={breadcrumbItems}
  linkClassName="text-info"
  separator={<div>/</div>}
/>
```

#### 🔹 Custom Prefix Icon

<b>Defining icon per item:</b>

```jsx
const breadcrumbItemsWithIcons = [
  {
    label: 'Home',
    path: '/',
    icon: (<p>🏠</p>),
  },
  {
    label: 'Products',
    path: '/products',
    icon: (<p>🛍️</p>),
  },
  {
    label: 'Laptops',
    icon: (<p>💻</p>),
  },
];
```
<b>Using it:</b>

```jsx
<Breadcrumb
  data={breadcrumbItemsWithIcons}
  linkClassName="text-info"
  separator={<div>/</div>}
/>
```

### Button

#### ➕ Import

```jsx
import { Button } from "alope-ui/Button";
```

#### 🔹 Variants

```jsx
<Button variant={'solid'}> This is Button </Button>
<Button variant={'outline'}> This is Button </Button>
<Button variant={'ghost'}> This is Button </Button>
<Button variant={'plain'}> This is Button </Button>
```

#### 🔹 Variant Types

```jsx
<Button variantType={'primary'}> This is Button </Button>
<Button variantType={'error'}> This is Button </Button>
<Button variantType={'info'}> This is Button </Button>
<Button variantType={'warning'}> This is Button </Button>
<Button variantType={'success'}> This is Button </Button>
<Button variantType={'secondary'}> This is Button </Button>
```

#### 🔹 Sizes

```jsx
<Button size={'sm'}> This is Button </Button>
<Button size={'md'}> This is Button </Button>
<Button size={'lg'}> This is Button </Button>
```

#### 🔹 Radius Sizes

```jsx
<Button radius={'regular'}> This is Button </Button>
<Button radius={'stadium'}> This is Button </Button>
```

#### 🔹 Full Width

```jsx
<Button fullWidth> This is Button </Button>
```

#### 🔹 Disabled

```jsx
<Button disabled> This is Button </Button>
```

#### 🔹 Link (to)

```jsx
<Button to='/'> This is Button </Button>
```

#### 🔹 Prefix & Suffix Icon

```jsx
<Button prefixIcon={<span>🔍</span>}> This is Button </Button>
<Button suffixIcon={<span>➡️</span>}> This is Button </Button>
```

### 🔹 Card

#### ➕ Import

```jsx
import { Card } from "alope-ui/Card";
```

```jsx
<Card
  image="https://placehold.co/600x400"
  title="This is Card"
  description="A card is used to display a collection of related items."
/>
```

#### With Footer

```jsx
<Card
  image="https://placehold.co/600x400"
  title="This is Card"
  description="A card is used to display a collection of related items."
  footer={<button className="text-sm text-info hover:underline">Read More</button>}
/>
```

#### With Ribbon

```jsx
<Card
  image="https://placehold.co/600x400"
  title="This is Card"
  ribbon="35% Off"
  description="A card is used to display a collection of related items."
  footer={<button className="text-sm text-info hover:underline">Read More</button>}
/>
```

#### Horizontal Card

```jsx
<Card
  horizontal
  image="https://placehold.co/600x400"
  title="This is Card"
  description="A card is used to display a collection of related items."
  footer={<button className="text-sm text-info hover:underline">Read More</button>}
/>
```

#### Ribbon on Horizontal Card

```jsx
<Card
  horizontal
  image="https://placehold.co/600x400"
  title="This is Card"
  ribbon="35% Off"
  description="A card is used to display a collection of related items."
  footer={<button className="text-sm text-info hover:underline">Read More</button>}
/>
```

#### Custom Class

```jsx
<Card
  image="https://placehold.co/600x400"
  title="This is Card"
  titleClassName="text-2xl font-bold text-primary"
  descriptionClassName="text-info"
  description="A card is used to display a collection of related items."
  footer={
      <Button>
          Got It!
      </Button>
  }
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