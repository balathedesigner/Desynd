import React, { useState } from 'react';
import { ComponentDocTemplate, AnimationSpeed, ANIMATION_SPEEDS, getAnimationClass, getAnimationControl } from '@/components/shared/ComponentDocTemplate';
import { Button } from '@/components/ui/Button';
import { Loader2, ChevronRight, Plus, ArrowRight, Info, Check, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ComponentPlayground } from '@/components/shared/ComponentPlayground';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SubsectionHeader } from '@/components/ui/SubsectionHeader';

type ButtonVariant = 'default' | 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link' | 'info' | 'warning' | 'success' | 'icon';
type ButtonState = 'default' | 'hover' | 'pressed' | 'focused' | 'disabled' | 'loading';
type ButtonSize = 'default' | 'sm' | 'lg';

const rightNavItems = {
  items: [
    {
      id: 'getting-started',
      label: 'Getting Started',
      subItems: [
        { id: 'import', label: 'Import' },
        { id: 'core-variants', label: 'Core Variants' }
      ]
    },
    {
      id: 'usage',
      label: 'Usage',
      subItems: [
        { id: 'compositions', label: 'Button Groups & Compositions' },
        { id: 'interactive-states', label: 'Interactive States' },
        { id: 'best-practices', label: 'Best Practices' },
        { id: 'design-tokens', label: 'Design Tokens' },
        { id: 'accessibility', label: 'Accessibility' },
        { id: 'responsive', label: 'Responsive Behavior' }
      ]
    },
    {
      id: 'use-cases',
      label: 'Common Use Cases'
    },
    {
      id: 'playground',
      label: 'Interactive Playground'
    },
    {
      id: 'api',
      label: 'API Reference'
    }
  ]
};

interface PlaygroundProps {
  variant: ButtonVariant;
  state: ButtonState;
  size: ButtonSize;
  iconType: 'none' | 'left' | 'right' | 'both';
  fullWidth: boolean;
  forceFullWidth: boolean;
  customText: string;
  animationSpeed: AnimationSpeed;
  spacing: 'compact' | 'normal' | 'relaxed';
  className?: string;
}

interface PlaygroundControl {
  type: 'select' | 'input' | 'chip';
  label: string;
  value: any;
  options?: { value: string; label: string }[];
  onChange: (value: any) => void;
  disabled?: boolean;
}

interface PlaygroundControlGroup {
  group: string;
  items: PlaygroundControl[];
}

const defaultPlaygroundProps: PlaygroundProps = {
  variant: 'default',
  state: 'default',
  size: 'default',
  iconType: 'none',
  fullWidth: false,
  forceFullWidth: false,
  customText: 'Button',
  animationSpeed: 'normal',
  spacing: 'normal'
};

// Update button configuration
const BUTTON_CONFIG = {
  types: {
    core: ['default', 'primary', 'secondary', 'destructive', 'outline', 'ghost', 'link', 'icon'],
    status: ['info', 'warning', 'success']
  },
  sizes: ['default', 'sm', 'lg'],
  states: ['default', 'hover', 'pressed', 'focused', 'disabled', 'loading']
} as const;

export default function ButtonsPage() {
  const [playgroundProps, setPlaygroundProps] = useState<PlaygroundProps>(defaultPlaygroundProps);

  // Base function to render a button with consistent styling
  const renderButton = (props: {
    variant?: ButtonVariant;
    size?: ButtonSize;
    state?: ButtonState;
    iconType?: 'none' | 'left' | 'right' | 'both';
    customText?: string;
    className?: string;
    fullWidth?: boolean;
  }) => {
    const {
      variant = 'default',
      size = 'default',
      state = 'default',
      iconType = 'none',
      customText = 'Button',
      className,
      fullWidth = false
    } = props;

    const buttonProps: any = {
      variant,
      size: variant === 'icon' ? undefined : size,
      disabled: state === 'disabled',
      isLoading: state === 'loading',
      fullWidth: variant === 'icon' ? false : fullWidth,
      className: cn(className)
    };

    // Handle icon-only variant
    if (variant === 'icon') {
      return (
        <Button {...buttonProps}>
          {buttonProps.isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Plus className="h-4 w-4" />
          )}
        </Button>
      );
    }

    // Handle regular buttons with optional icons
    if (iconType === 'left' || iconType === 'both') {
      buttonProps.leftIcon = <ArrowRight className="h-4 w-4" />;
    }
    if (iconType === 'right' || iconType === 'both') {
      buttonProps.rightIcon = <ArrowRight className="h-4 w-4" />;
    }

    return <Button {...buttonProps}>{customText}</Button>;
  };

  const generateCode = () => {
    const props = [];
    
    // Type or Status
    if (['default', 'primary', 'secondary', 'outline', 'ghost', 'link'].includes(playgroundProps.variant)) {
      if (playgroundProps.variant !== 'default') {
        props.push(`variant="${playgroundProps.variant}"`);
      }
    } else if (['destructive', 'success', 'warning', 'info'].includes(playgroundProps.variant)) {
      props.push(`variant="${playgroundProps.variant}"`);
    }
    
    // Size
    if (playgroundProps.size !== 'default') {
      props.push(`size="${playgroundProps.size}"`);
    }

    // States
    if (playgroundProps.state === 'loading') {
      props.push('isLoading={true}');
    }

    if (playgroundProps.state === 'disabled') {
      props.push('disabled={true}');
    }

    if (playgroundProps.fullWidth) {
      props.push('fullWidth={true}');
    }

    // Animation speed only
    if (playgroundProps.animationSpeed !== 'normal') {
      props.push(`className="${ANIMATION_SPEEDS[playgroundProps.animationSpeed]}"`);
    }

    const propsString = props.length > 0 ? ' ' + props.join(' ') : '';
    
    let buttonContent = playgroundProps.customText || 'Button';
    let importIcons = '';
    let iconProps = '';

    if (playgroundProps.iconType === 'left' || playgroundProps.iconType === 'both') {
      importIcons = "import { ArrowRight } from 'lucide-react';\n";
      iconProps = "leftIcon={<ArrowRight className=\"h-4 w-4\" />} ";
    }
    
    if (playgroundProps.iconType === 'right' || playgroundProps.iconType === 'both') {
      importIcons = "import { ArrowRight } from 'lucide-react';\n";
      iconProps += "rightIcon={<ArrowRight className=\"h-4 w-4\" />} ";
    }

    return `import { Button } from '@/components/ui/Button';
${importIcons}
export default function Example() {
  return (
    <Button${propsString} ${iconProps}>${buttonContent}</Button>
  );
}`;
  };

  const renderDocExample = (props: Partial<PlaygroundProps>) => {
    const mergedProps = { ...defaultPlaygroundProps, ...props };
    return renderButton({
      variant: mergedProps.variant,
      size: mergedProps.size,
      state: mergedProps.state,
      iconType: mergedProps.iconType,
      customText: mergedProps.customText,
      fullWidth: mergedProps.fullWidth || mergedProps.forceFullWidth,
      className: mergedProps.className
    });
  };

  const renderCoreVariants = () => {
    return (
      <div className="space-y-8">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-medium">Core Variants</h3>
          <p className="text-sm text-slate-500">
            Our button component comes with several predefined variants to suit different contexts and needs.
          </p>
        </div>
        <div className="grid gap-8">
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Default</Button>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button variant="info">Info</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="success">Success</Button>
          </div>
        </div>
      </div>
    );
  };

  const renderCompositions = () => (
    <div className="space-y-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-medium">Button Groups & Compositions</h3>
        <p className="text-sm text-slate-500">
          Combine buttons in different ways to create meaningful action groups.
        </p>
      </div>
      <div className="grid gap-8">
        <div className="flex flex-wrap gap-4">
          <Button variant="default">Primary Action</Button>
          <Button variant="outline">Secondary Action</Button>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button variant="default" leftIcon={<Plus className="h-4 w-4" />}>With Left Icon</Button>
          <Button variant="default" rightIcon={<ChevronRight className="h-4 w-4" />}>With Right Icon</Button>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button variant="ghost" size="icon"><Plus className="h-4 w-4" /></Button>
          <Button variant="outline" size="icon"><Info className="h-4 w-4" /></Button>
          <Button variant="default" size="icon"><Check className="h-4 w-4" /></Button>
        </div>
      </div>
    </div>
  );

  const renderDesignTokens = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="p-6 space-y-6">
        <h3 className="text-lg font-semibold mb-4">Design Tokens</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-medium mb-3">Colors</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                <span className="text-sm">Primary</span>
                <span className="text-sm font-mono">#3B82F6</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span className="text-sm">Secondary</span>
                <span className="text-sm font-mono">#6B7280</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-3">Spacing</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span className="text-sm">Padding (sm)</span>
                <span className="text-sm font-mono">0.5rem</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span className="text-sm">Padding (md)</span>
                <span className="text-sm font-mono">0.75rem</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAccessibility = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="p-6 space-y-6">
        <h3 className="text-lg font-semibold mb-4">Accessibility Guidelines</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <Check className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <h4 className="text-sm font-medium">Keyboard Navigation</h4>
              <p className="text-sm text-gray-600">Buttons are focusable and can be activated using Enter or Space keys.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <Check className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <h4 className="text-sm font-medium">ARIA Attributes</h4>
              <p className="text-sm text-gray-600">Buttons include proper ARIA roles and states for loading and disabled states.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <Check className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <h4 className="text-sm font-medium">Color Contrast</h4>
              <p className="text-sm text-gray-600">All button variants maintain WCAG 2.1 AA contrast requirements.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderResponsiveBehavior = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="p-6 space-y-6">
        <h3 className="text-lg font-semibold mb-4">Responsive Behavior</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-2">Mobile Touch Targets</h4>
            <p className="text-sm text-gray-600">Buttons maintain a minimum touch target size of 44x44px on mobile devices.</p>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-2">Stack Behavior</h4>
            <p className="text-sm text-gray-600">Button groups stack vertically on mobile screens for better usability.</p>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-2">Full Width</h4>
            <p className="text-sm text-gray-600">Full-width buttons are recommended for primary actions on mobile.</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderInteractiveStates = () => (
    <div className="space-y-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-medium">Interactive States</h3>
        <p className="text-sm text-slate-500">
          Buttons respond to user interaction with different states.
        </p>
      </div>
      <div className="grid gap-8">
        <div className="flex flex-wrap gap-4">
          <Button variant="default">Default State</Button>
          <Button variant="default" className="hover:bg-blue-700">Hover State</Button>
          <Button variant="default" className="active:bg-blue-800">Pressed State</Button>
          <Button variant="default" className="focus:ring-2">Focused State</Button>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button variant="default" disabled>Disabled</Button>
          <Button variant="default" isLoading>Loading</Button>
        </div>
      </div>
    </div>
  );

  const renderPatterns = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-green-600">Do's</h3>
        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-700 mb-2">Use clear, action-oriented labels</p>
            {renderButton({ customText: 'Save Changes' })}
          </div>
          <div>
            <p className="text-sm text-gray-700 mb-2">Use different variants for hierarchy</p>
            <div className="flex gap-2">
              {renderButton({ customText: 'Primary Action' })}
              {renderButton({ variant: 'secondary', customText: 'Secondary' })}
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-700 mb-2">Use icons meaningfully</p>
            {renderButton({ customText: 'Download Report', iconType: 'left' })}
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-red-600">Don'ts</h3>
        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-700 mb-2">Don't use vague labels</p>
            {renderButton({ customText: 'Click Here' })}
          </div>
          <div>
            <p className="text-sm text-gray-700 mb-2">Don't use inconsistent sizes</p>
            <div className="flex items-center gap-2">
              {renderButton({ size: 'sm', customText: 'Small' })}
              {renderButton({ customText: 'Medium' })}
              {renderButton({ size: 'lg', customText: 'Large' })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderApiReference = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="divide-y divide-gray-200">
        <div className="p-6">
          <h3 className="text-sm font-medium mb-4">Core Props</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left">
                  <th className="pb-2">Prop</th>
                  <th className="pb-2">Type</th>
                  <th className="pb-2">Default</th>
                  <th className="pb-2">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-2 font-mono text-xs">variant</td>
                  <td className="py-2 font-mono text-xs">default | primary | secondary | destructive | outline | ghost | link | info | warning | success</td>
                  <td className="py-2 font-mono text-xs">default</td>
                  <td className="py-2">Visual style of the button</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-xs">size</td>
                  <td className="py-2 font-mono text-xs">default | sm | lg | icon</td>
                  <td className="py-2 font-mono text-xs">default</td>
                  <td className="py-2">Size of the button</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-xs">disabled</td>
                  <td className="py-2 font-mono text-xs">boolean</td>
                  <td className="py-2 font-mono text-xs">false</td>
                  <td className="py-2">Whether the button is disabled</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-xs">isLoading</td>
                  <td className="py-2 font-mono text-xs">boolean</td>
                  <td className="py-2 font-mono text-xs">false</td>
                  <td className="py-2">Shows a loading spinner and disables the button</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-xs">fullWidth</td>
                  <td className="py-2 font-mono text-xs">boolean</td>
                  <td className="py-2 font-mono text-xs">false</td>
                  <td className="py-2">Makes the button take full width of its container</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-xs">leftIcon</td>
                  <td className="py-2 font-mono text-xs">ReactNode</td>
                  <td className="py-2 font-mono text-xs">undefined</td>
                  <td className="py-2">Icon element to display before button text</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-xs">rightIcon</td>
                  <td className="py-2 font-mono text-xs">ReactNode</td>
                  <td className="py-2 font-mono text-xs">undefined</td>
                  <td className="py-2">Icon element to display after button text</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-xs">className</td>
                  <td className="py-2 font-mono text-xs">string</td>
                  <td className="py-2 font-mono text-xs">undefined</td>
                  <td className="py-2">Additional CSS classes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const renderUseCases = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="p-6 space-y-8">
        <div id="basic-examples">
          <h3 className="text-sm font-medium mb-4">Basic Examples</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-medium mb-2">Default Buttons</h4>
              <div className="flex flex-wrap gap-4">
                <Button variant="default" size="sm">Small</Button>
                <Button variant="default">Default</Button>
                <Button variant="default" size="lg">Large</Button>
              </div>
              <p className="mt-2 text-sm text-gray-600">Use default buttons for main actions and important CTAs.</p>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Alternative Styles</h4>
              <div className="flex flex-wrap gap-4">
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
              <p className="mt-2 text-sm text-gray-600">Use alternative styles for different levels of emphasis.</p>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">State Variants</h4>
              <div className="flex flex-wrap gap-4">
                <Button variant="destructive">Destructive</Button>
                <Button variant="success">Success</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="info">Info</Button>
              </div>
              <p className="mt-2 text-sm text-gray-600">Use state variants to communicate the nature of the action.</p>
            </div>
          </div>
        </div>
        <div id="with-icons">
          <h3 className="text-sm font-medium mb-4">With Icons</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-medium mb-2">Icon Placement</h4>
              <div className="flex flex-wrap gap-4">
                <Button variant="default" leftIcon={<ArrowRight className="h-4 w-4" />}>Left Icon</Button>
                <Button variant="default" rightIcon={<ArrowRight className="h-4 w-4" />}>Right Icon</Button>
                <Button variant="default" leftIcon={<ArrowRight className="h-4 w-4" />} rightIcon={<ArrowRight className="h-4 w-4" />}>Both Sides</Button>
              </div>
              <p className="mt-2 text-sm text-gray-600">Use icons to enhance clarity and visual appeal of buttons.</p>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Icon Only Buttons</h4>
              <div className="flex flex-wrap gap-4">
                <Button variant="default" size="icon"><Plus className="h-4 w-4" /></Button>
                <Button variant="outline" size="icon"><Info className="h-4 w-4" /></Button>
                <Button variant="ghost" size="icon"><Check className="h-4 w-4" /></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPlayground = () => (
    <div className="space-y-8">
      <ComponentPlayground
        defaultProps={defaultPlaygroundProps}
        controls={[
          {
            group: 'Variant & Style',
            items: [
              {
                type: 'select' as const,
                label: 'Variant',
                value: playgroundProps.variant,
                options: [
                  { value: 'default', label: 'Default' },
                  { value: 'primary', label: 'Primary' },
                  { value: 'secondary', label: 'Secondary' },
                  { value: 'destructive', label: 'Destructive' },
                  { value: 'outline', label: 'Outline' },
                  { value: 'ghost', label: 'Ghost' },
                  { value: 'link', label: 'Link' },
                  { value: 'info', label: 'Info' },
                  { value: 'warning', label: 'Warning' },
                  { value: 'success', label: 'Success' },
                  { value: 'icon', label: 'Icon' }
                ],
                onChange: (value: ButtonVariant) => {
                  if (value === 'icon') {
                    // Reset icon type and text when switching to icon variant
                    setPlaygroundProps(prev => ({ ...prev, variant: value, iconType: 'none', customText: '' }));
                  } else {
                    setPlaygroundProps(prev => ({ ...prev, variant: value }));
                  }
                }
              }
            ]
          },
          {
            group: 'Size & Layout',
            items: [
              {
                type: 'select' as const,
                label: 'Size',
                value: playgroundProps.size,
                disabled: playgroundProps.variant === 'icon',
                options: [
                  { value: 'default', label: 'Default' },
                  { value: 'sm', label: 'Small' },
                  { value: 'lg', label: 'Large' }
                ],
                onChange: (value: ButtonSize) => setPlaygroundProps(prev => ({ ...prev, size: value }))
              },
              {
                type: 'select' as const,
                label: 'Icon',
                value: playgroundProps.iconType,
                disabled: playgroundProps.variant === 'icon',
                options: [
                  { value: 'none', label: 'None' },
                  { value: 'left', label: 'Left Icon' },
                  { value: 'right', label: 'Right Icon' },
                  { value: 'both', label: 'Both Sides' }
                ],
                onChange: (value: PlaygroundProps['iconType']) => setPlaygroundProps(prev => ({ ...prev, iconType: value }))
              },
              {
                type: 'chip' as const,
                label: 'Full Width',
                value: playgroundProps.fullWidth,
                disabled: playgroundProps.variant === 'icon',
                onChange: (value: boolean) => setPlaygroundProps(prev => ({ ...prev, fullWidth: value }))
              }
            ]
          },
          {
            group: 'State & Interaction',
            items: [
              {
                type: 'select' as const,
                label: 'State',
                value: playgroundProps.state,
                options: [
                  { value: 'default', label: 'Default' },
                  { value: 'loading', label: 'Loading' },
                  { value: 'disabled', label: 'Disabled' }
                ],
                onChange: (value: ButtonState) => setPlaygroundProps(prev => ({ ...prev, state: value }))
              },
              {
                type: 'select' as const,
                label: 'Animation Speed',
                value: playgroundProps.animationSpeed,
                options: [
                  { value: 'fast', label: 'Fast' },
                  { value: 'normal', label: 'Normal' },
                  { value: 'slow', label: 'Slow' }
                ],
                onChange: (value: AnimationSpeed) => setPlaygroundProps(prev => ({ ...prev, animationSpeed: value }))
              }
            ]
          },
          {
            group: 'Content',
            items: [
              {
                type: 'input' as const,
                label: 'Button Text',
                value: playgroundProps.customText,
                disabled: playgroundProps.variant === 'icon',
                onChange: (value: string) => setPlaygroundProps(prev => ({ ...prev, customText: value }))
              }
            ]
          }
        ]}
        preview={
          <div className="w-full bg-blue-50/50 rounded-lg p-10 flex items-center justify-center">
            {renderDocExample(playgroundProps)}
          </div>
        }
        code=""
      />
    </div>
  );

  return (
    <ComponentDocTemplate
      title="Button"
      description="Clickable elements that trigger actions or navigation."
      status={{ label: 'Stable', color: 'blue' }}
      importCode="import { Button } from '@/components/ui/Button';"
      rightNavItems={rightNavItems}
      renderPlayground={renderPlayground}
      renderCoreVariants={renderCoreVariants}
      renderCompositions={renderCompositions}
      renderUseCases={renderUseCases}
      renderApiReference={renderApiReference}
      renderDesignTokens={renderDesignTokens}
      renderAccessibility={renderAccessibility}
      renderResponsiveBehavior={renderResponsiveBehavior}
      renderInteractiveStates={renderInteractiveStates}
      renderPatterns={renderPatterns}
      generateCode={generateCode}
    />
  );
}