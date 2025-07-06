import React from 'react';
import { useToast } from '../components/Toast/ToastProvider';
import { Button } from '../components';

const ToastPage: React.FC = () => {
  const { addToast } = useToast();

  return (
    <div className="p-10 space-y-10">
      <h1 className="text-3xl font-bold">Toast Component Documentation</h1>

      {/* Basic */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Basic Example Toast</h2>
        <div className="flex flex-wrap gap-4">
          <Button onClick={() => addToast({ title: 'Toast', message: 'This is an success message!', type: 'success' })}>Success Toast</Button>
          <Button onClick={() => addToast({ title: 'Toast', message: 'This is an Error message!', type: 'error' })}>Error Toast</Button>
          <Button onClick={() => addToast({ title: 'Toast', message: 'This is an Info message!', type: 'info' })}>Info Toast</Button>
          <Button onClick={() => addToast({ title: 'Toast', message: 'This is an Warning message!', type: 'warning' })}>Warning Toast</Button>
        </div>
      </div>

      {/* With Outline Variant */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">With Outline Variant</h2>
        <div className="flex flex-wrap gap-4">
          <Button onClick={() => addToast({ title: 'Toast', message: 'This is an success message!', type: 'success', variant: 'outline' })}>Success Toast</Button>
          <Button onClick={() => addToast({ title: 'Toast', message: 'This is an Error message!', type: 'error', variant: 'outline' })}>Error Toast</Button>
          <Button onClick={() => addToast({ title: 'Toast', message: 'This is an Info message!', type: 'info', variant: 'outline' })}>Info Toast</Button>
          <Button onClick={() => addToast({ title: 'Toast', message: 'This is an Warning message!', type: 'warning', variant: 'outline' })}>Warning Toast</Button>
        </div>
      </div>

      {/* With Custom Position */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">With Custom Position</h2>
        <div className="flex flex-wrap gap-4">
          <Button onClick={() => addToast({ title: 'Toast', message: 'This is an success message!', type: 'success', variant: 'outline', position: 'topLeft' })}>Success Toast</Button>
          <Button onClick={() => addToast({ title: 'Toast', message: 'This is an Error message!', type: 'error', variant: 'outline', position: 'topRight' })}>Error Toast</Button>
          <Button onClick={() => addToast({ title: 'Toast', message: 'This is an Info message!', type: 'info', variant: 'outline', position: 'bottomLeft' })}>Info Toast</Button>
          <Button onClick={() => addToast({ title: 'Toast', message: 'This is an Warning message!', type: 'warning', variant: 'outline', position: 'bottomRight' })}>Warning Toast</Button>
        </div>
      </div>
    </div>
  );
};

export default ToastPage;
