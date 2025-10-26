import { useState } from 'react';
import { Tabs } from '../components';
import { Button } from '../components';
import Container from './Container';

const initialTabsData = [
  {
    label: 'About Me',
    content: (
      <div className="p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
        <h3 className="text-lg font-medium dark:text-white">Profile Information</h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-white">
          This is where you can view and edit your profile information. You can update your name, email, and other
          personal details.
        </p>
      </div>
    ),
  },
  {
    label: 'Settings',
    content: (
      <div className="p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
        <h3 className="text-lg font-medium dark:text-white">Account Settings</h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-white">
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
      <div className="p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
        <h3 className="text-lg font-medium dark:text-white">Billing Details</h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-white">
          This section allows you to manage your billing information, view your payment history, and download invoices.
        </p>
      </div>
    ),
  },
];

const tabsDataWithLinks = [
  {
    label: 'Home',
    content:
      <div className="dark:text-white">
        This content will not be shown because it navigates.
      </div>,
    link: '/',
  },
  {
    label: 'Button Page',
    content:
      <div className="dark:text-white">
        This content will not be shown because it navigates.
      </div>,
    link: '/button',
  },
  {
    label: 'Alert Page (disabled)',
    content:
      <div className="dark:text-white">
        This content will not be shown because it navigates.
      </div>,
    link: '/alert',
    disabled: true,
  },
];

const TabsPage = () => {
  const [controlledTabs, setControlledTabs] = useState(initialTabsData);
  const [activeControlledTab, setActiveControlledTab] = useState(0);

  const addControlledTab = () => {
    const newTab = {
      label: `Tab ${controlledTabs.length + 1}`,
      content: (
        <div className="p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
          <h3 className="text-lg font-medium dark:text-white">New Controlled Tab</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-white">This is the content for the newly added tab.</p>
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
    <Container title='Tabs Component' description='A versatile tabs component with multiple variants.'>

      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-4">Default (Line)</h2>
        <Tabs tabs={initialTabsData} />
      </div>

      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-4">Solid</h2>
        <Tabs tabs={initialTabsData} variant="solid" />
      </div>

      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-4">Subtle</h2>
        <Tabs tabs={initialTabsData} variant="subtle" />
      </div>

      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-4">Inline</h2>
        <Tabs tabs={initialTabsData} variant="inline" />
      </div>

      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-4">Outline</h2>
        <Tabs tabs={initialTabsData} variant="outline" />
      </div>

      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-4">Plain</h2>
        <Tabs tabs={initialTabsData} variant="plain" />
      </div>

      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-4">Fitted</h2>
        <Tabs tabs={initialTabsData} fitted />
      </div>

      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-4">With Links</h2>
        <Tabs tabs={tabsDataWithLinks} />
      </div>

      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-4">Controlled Tabs</h2>
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

    </Container>
  );
};

export default TabsPage;