import React from 'react';
import { cn } from '@/lib/utils';
import { Check, X } from 'lucide-react';

export interface StepperProps {
  steps: string[];
  currentStep: number;
  orientation?: 'horizontal' | 'vertical';
  variant?: 'default' | 'alternativeLabel';
  type?: 'linear' | 'nonLinear';
  completedSteps?: number[];
  errorSteps?: number[];
  className?: string;
}

export function Stepper({
  steps,
  currentStep,
  orientation = 'horizontal',
  variant = 'default',
  type = 'linear',
  completedSteps = [],
  errorSteps = [],
  className,
}: StepperProps) {
  const isVertical = orientation === 'vertical';
  const isAlternativeLabel = variant === 'alternativeLabel';

  const getStepStatus = (index: number) => {
    if (errorSteps.includes(index)) return 'error';
    if (completedSteps.includes(index)) return 'completed';
    if (index === currentStep) return 'current';
    return 'pending';
  };

  const renderStepIcon = (index: number) => {
    const status = getStepStatus(index);
    if (status === 'completed') {
      return <Check className="h-4 w-4 text-white" />;
    }
    if (status === 'error') {
      return <X className="h-4 w-4 text-white" />;
    }
    return <span className="h-2 w-2 rounded-full bg-current" />;
  };

  return (
    <div
      className={cn(
        'w-full',
        isVertical ? 'flex-col space-y-4' : 'flex items-center space-x-4',
        className
      )}
    >
      {steps.map((step, index) => {
        const status = getStepStatus(index);
        const isLast = index === steps.length - 1;

        return (
          <div
            key={index}
            className={cn(
              'flex',
              isVertical ? 'flex-col space-y-2' : isAlternativeLabel ? 'flex-col items-center space-y-2' : 'items-center space-x-2',
              !isLast && 'flex-1'
            )}
          >
            <div className="flex items-center">
              <div
                className={cn(
                  'flex h-8 w-8 items-center justify-center rounded-full border-2',
                  status === 'completed' && 'border-blue-500 bg-blue-500',
                  status === 'current' && 'border-blue-500',
                  status === 'error' && 'border-red-500 bg-red-500',
                  status === 'pending' && 'border-gray-300'
                )}
              >
                {renderStepIcon(index)}
              </div>
              {!isLast && (
                <div
                  className={cn(
                    'h-0.5 flex-1',
                    isVertical ? 'h-full w-0.5 ml-4' : 'mx-4',
                    (status === 'completed' || (type === 'nonLinear' && completedSteps.includes(index))) ? 'bg-blue-500' : 'bg-gray-200'
                  )}
                />
              )}
            </div>
            <span
              className={cn(
                'text-sm font-medium',
                status === 'completed' && 'text-blue-500',
                status === 'current' && 'text-blue-500',
                status === 'error' && 'text-red-500',
                status === 'pending' && 'text-gray-500'
              )}
            >
              {step}
            </span>
          </div>
        );
      })}
    </div>
  );
} 