import { useState } from 'react';
import { Tabs } from '../components';
import { Button } from '../components';
import { useNavigate } from 'react-router-dom';

const initialTabsData = [
  {
    label: 'About Me',
    content: (
      <div className="p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-medium">Profile Information</h3>
        <p className="mt-2 text-sm text-gray-600">
          This is where you can view and edit your profile information. You can update your name, email, and other
          personal details.
        </p>
      </div>
    ),
  },
  {
    label: 'Settings',
    content: (
      <div className="p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-medium">Account Settings</h3>
        <p className="mt-2 text-sm text-gray-600">
          Here you can manage your account settings, such as changing your password, managing notifications, and
          configuring your privacy settings.
        </p>
      </div>
    ),
  },
  {
    label: 'Billing',
    disabled: true,
    content: (
      <div className="p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-medium">Billing Details</h3>
        <p className="mt-2 text-sm text-gray-600">
          This section allows you to manage your billing information, view your payment history, and download invoices.
        </p>
      </div>
    ),
  },
];

const tabsDataWithLinks = [
  {
    label: 'Home',
    content: 'This content will not be shown because it navigates.',
    link: '/',
  },
  {
    label: 'Button Page',
    content: 'This content will not be shown because it navigates.',
    link: '/button',
  },
  {
    label: 'Alert Page (disabled)',
    content: 'This content will not be shown because it navigates.',
    link: '/alert',
    disabled: true,
  },
];

const TabsPage = () => {
  const navigate = useNavigate();
  const [controlledTabs, setControlledTabs] = useState(initialTabsData);
  const [activeControlledTab, setActiveControlledTab] = useState(0);

  const addControlledTab = () => {
    const newTab = {
      label: `Tab ${controlledTabs.length + 1}`,
      content: (
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-medium">New Controlled Tab</h3>
          <p className="mt-2 text-sm text-gray-600">This is the content for the newly added tab.</p>
        </div>
      ),
    };
    setControlledTabs([...controlledTabs, newTab]);
  };

  const removeControlledTab = () => {
    if (controlledTabs.length > 1) {
      if (activeControlledTab >= controlledTabs.length - 1) {
        setActiveControlledTab(controlledTabs.length - 2);
      }
      setControlledTabs(controlledTabs.slice(0, -1));
    }
  };

  return (
    <div className="p-10 space-y-12 bg-gray-50 min-h-screen bg-gradient-to-br from-primary/25 via-white to-blue-100">
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
        }
      >
        Back
      </Button>

      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Tabs</h1>
        <p className="text-lg text-gray-600 mt-2">
          A versatile tabs component with multiple variants.
        </p>
      </header>

      <main className="max-w-4xl mx-auto space-y-12">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Default (Line)</h2>
          <Tabs tabs={initialTabsData} />
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Solid</h2>
          <Tabs tabs={initialTabsData} variant="solid" />
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Subtle</h2>
          <Tabs tabs={initialTabsData} variant="subtle" />
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Inline</h2>
          <Tabs tabs={initialTabsData} variant="inline" />
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Outline</h2>
          <Tabs tabs={initialTabsData} variant="outline" />
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Plain</h2>
          <Tabs tabs={initialTabsData} variant="plain" />
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Fitted</h2>
          <Tabs tabs={initialTabsData} fitted />
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">With Links</h2>
          <Tabs tabs={tabsDataWithLinks} />
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Controlled Tabs</h2>
          <div className="flex space-x-2 mb-4">
            <Button onClick={addControlledTab}>Add Tab</Button>
            <Button onClick={removeControlledTab} disabled={controlledTabs.length <= 1}>
              Remove Tab
            </Button>
          </div>
          <Tabs
            tabs={controlledTabs}
            activeTab={activeControlledTab}
            onTabChange={setActiveControlledTab}
          />
        </div>
      </main>
    </div>
  );
};

export default TabsPage;