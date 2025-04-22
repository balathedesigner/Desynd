import React from 'react';
import { Menu } from '@/components/ui/Menu';
import { ComponentDocTemplate as ComponentTemplate } from '@/components/shared/ComponentDocTemplate';
import { EmptyComponentTemplate as ComponentPreview } from '@/components/shared/EmptyComponentTemplate';
import { ComponentPlayground } from '@/components/shared/ComponentPlayground';
import { ChevronDownIcon, UserIcon, CogIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';
import { SectionContentWrapper } from '@/components/shared/ComponentDocTemplate';
import { ComponentDocTemplate } from '@/components/shared/ComponentDocTemplate';

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
      <SectionContentWrapper>
        <div>
          <h3 className="text-lg font-medium mb-4">Basic Menu</h3>
          <div className="space-y-4">
            <p className="text-sm text-gray-600">A simple menu with basic functionality</p>
            <Menu
              trigger={
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Menu <ChevronDownIcon className="ml-2 h-4 w-4" />
                </button>
              }
              items={menuItems}
            />
          </div>
        </div>
      </SectionContentWrapper>

      <SectionContentWrapper>
        <div>
          <h3 className="text-lg font-medium mb-4">Right-Aligned Menu</h3>
          <div className="space-y-4">
            <p className="text-sm text-gray-600">A menu aligned to the right side</p>
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
          </div>
        </div>
      </SectionContentWrapper>
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
            <td>{'() => void'}</td>
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
          group: 'Layout',
          items: [
            {
              type: 'select',
              label: 'Alignment',
              value: 'left',
              options: [
                { value: 'left', label: 'Left' },
                { value: 'right', label: 'Right' }
              ],
              onChange: (value) => console.log('Alignment changed:', value)
            }
          ]
        }
      ]}
      preview={
        <Menu
          trigger={
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Menu <ChevronDownIcon className="ml-2 h-4 w-4" />
            </button>
          }
          items={menuItems}
          align="left"
        />
      }
    />
  );
};

export default function MenuPage() {
  return (
    <ComponentDocTemplate
      title="Menu"
      description="A dropdown menu component that supports icons, nested submenus, and keyboard navigation."
      status={{ label: 'Stable', color: 'blue' }}
      importCode="import { Menu } from '@/components/ui/Menu';"
      rightNavItems={{
        items: [
          { id: 'usage', label: 'Usage' },
          { id: 'examples', label: 'Examples' },
          { id: 'playground', label: 'Playground' },
          { id: 'api-reference', label: 'API Reference' }
        ]
      }}
      renderUseCases={renderUseCases}
      renderApiReference={renderApiReference}
      renderPlayground={renderPlayground}
      renderCoreVariants={() => null}
      renderCompositions={() => null}
    />
  );
} 