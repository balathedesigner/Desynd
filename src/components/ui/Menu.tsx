import React, { useState, useRef, useEffect } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { Transition } from '@headlessui/react';
import { cn } from '@/lib/utils';

export interface MenuItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  items?: MenuItem[];
  disabled?: boolean;
}

interface MenuProps {
  trigger: React.ReactNode;
  items: MenuItem[];
  align?: 'left' | 'right';
  className?: string;
}

interface MenuItemComponentProps {
  item: MenuItem;
  depth?: number;
  onClose?: () => void;
}

const MenuItemComponent: React.FC<MenuItemComponentProps> = ({ item, depth = 0, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  const hasSubItems = item.items && item.items.length > 0;

  const handleClick = () => {
    if (hasSubItems) {
      setIsOpen(!isOpen);
    } else {
      item.onClick?.();
      onClose?.();
    }
  };

  return (
    <div className="relative" ref={itemRef}>
      <div
        className={cn(
          'flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer',
          item.disabled && 'opacity-50 cursor-not-allowed',
          depth > 0 && 'pl-8'
        )}
        onClick={item.disabled ? undefined : handleClick}
      >
        {item.icon && <span className="mr-2 h-4 w-4">{item.icon}</span>}
        <span className="flex-grow">{item.label}</span>
        {hasSubItems && (
          <ChevronRightIcon className="h-4 w-4 text-gray-400" />
        )}
      </div>

      {hasSubItems && (
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div className="absolute left-full top-0 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            {item.items?.map((subItem) => (
              <MenuItemComponent
                key={subItem.id}
                item={subItem}
                depth={depth + 1}
                onClose={onClose}
              />
            ))}
          </div>
        </Transition>
      )}
    </div>
  );
};

export const Menu: React.FC<MenuProps> = ({
  trigger,
  items,
  align = 'left',
  className
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div
          className={cn(
            'absolute z-10 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5',
            align === 'right' ? 'right-0' : 'left-0',
            className
          )}
        >
          <div className="py-1">
            {items.map((item) => (
              <MenuItemComponent
                key={item.id}
                item={item}
                onClose={() => setIsOpen(false)}
              />
            ))}
          </div>
        </div>
      </Transition>
    </div>
  );
}; 