import React from 'react'

interface ProgressBarProps {
  steps: string[]
  currentStep: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ steps, currentStep }) => {
  return (
    <div className="flex w-full">
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          {index > 0 && <div className="mt-2 h-[1px] flex-grow bg-white" />}
          <div className="flex flex-shrink-0 flex-col items-center">
            <div
              className={`mb-2 h-4 w-4 rounded-full ${
                index <= currentStep ? 'bg-white' : 'bg-gray-600'
              }`}
            >
              {index === currentStep && (
                <div className="m-1 h-2 w-2 rounded-full bg-black" />
              )}
            </div>
            <span
              className={`w-16 break-words text-center text-xs ${index <= currentStep ? 'text-white' : 'text-gray-600'}`}
            >
              {step}
            </span>
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}

export default ProgressBar
