import React from 'react';
import { Menu } from '@/components/ui/Menu';
import { ComponentTemplate } from '@/components/shared/ComponentTemplate';
import { ComponentPreview } from '@/components/shared/ComponentPreview';
import { ComponentPlayground } from '@/components/shared/ComponentPlayground';
import { ChevronDownIcon, UserIcon, CogIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';

const menuItems = [
  {
    id: '1',
    label: 'Profile',
    icon: <UserIcon />,
    onClick: () => console.log('Profile clicked')
  },
  {
    id: '2',
    label: 'Settings',
    icon: <CogIcon />,
    items: [
      {
        id: '2-1',
        label: 'Account',
        onClick: () => console.log('Account clicked')
      },
      {
        id: '2-2',
        label: 'Preferences',
        onClick: () => console.log('Preferences clicked')
      }
    ]
  },
  {
    id: '3',
    label: 'Logout',
    icon: <ArrowRightOnRectangleIcon />,
    onClick: () => console.log('Logout clicked')
  }
];

const renderUseCases = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-4">Basic Menu</h3>
        <ComponentPreview>
          <Menu
            trigger={
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Menu <ChevronDownIcon className="ml-2 h-4 w-4" />
              </button>
            }
            items={menuItems}
          />
        </ComponentPreview>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Right-Aligned Menu</h3>
        <ComponentPreview>
          <div className="text-right">
            <Menu
              trigger={
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Menu <ChevronDownIcon className="ml-2 h-4 w-4" />
                </button>
              }
              items={menuItems}
              align="right"
            />
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
};

const renderApiReference = () => {
  return (
    <div className="prose max-w-none">
      <h3>Core Props</h3>
      <table className="w-full">
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>trigger</td>
            <td>ReactNode</td>
            <td>-</td>
            <td>The element that triggers the menu when clicked</td>
          </tr>
          <tr>
            <td>items</td>
            <td>MenuItem[]</td>
            <td>-</td>
            <td>Array of menu items to display</td>
          </tr>
          <tr>
            <td>align</td>
            <td>'left' | 'right'</td>
            <td>'left'</td>
            <td>Alignment of the menu relative to the trigger</td>
          </tr>
          <tr>
            <td>className</td>
            <td>string</td>
            <td>-</td>
            <td>Additional CSS classes for the menu container</td>
          </tr>
        </tbody>
      </table>

      <h3 className="mt-8">MenuItem Interface</h3>
      <table className="w-full">
        <thead>
          <tr>
            <th>Property</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>id</td>
            <td>string</td>
            <td>Unique identifier for the menu item</td>
          </tr>
          <tr>
            <td>label</td>
            <td>string</td>
            <td>Text to display for the menu item</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>ReactNode</td>
            <td>Optional icon to display before the label</td>
          </tr>
          <tr>
            <td>onClick</td>
            <td>() => void</td>
            <td>Optional click handler for the menu item</td>
          </tr>
          <tr>
            <td>items</td>
            <td>MenuItem[]</td>
            <td>Optional array of submenu items</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>boolean</td>
            <td>Optional flag to disable the menu item</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const renderPlayground = () => {
  return (
    <ComponentPlayground
      component={Menu}
      defaultProps={{
        trigger: (
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Menu <ChevronDownIcon className="ml-2 h-4 w-4" />
          </button>
        ),
        items: menuItems,
        align: 'left'
      }}
      controls={[
        {
          type: 'select',
          prop: 'align',
          options: ['left', 'right'],
          label: 'Alignment'
        }
      ]}
    />
  );
};

export default function MenuPage() {
  return (
    <ComponentTemplate
      title="Menu"
      description="A dropdown menu component that supports icons, nested submenus, and keyboard navigation."
      source="https://github.com/yourusername/design-system/blob/main/src/components/ui/Menu.tsx"
      navigation={[
        { id: 'usage', label: 'Usage' },
        { id: 'examples', label: 'Examples' },
        { id: 'playground', label: 'Playground' },
        { id: 'api-reference', label: 'API Reference' }
      ]}
      renderUseCases={renderUseCases}
      renderApiReference={renderApiReference}
      renderPlayground={renderPlayground}
    />
  );
} 