import React from 'react';

/**
 * Global Loading Component
 * 
 * Usage Examples:
 * 1. Full screen: <Loading fullScreen />
 * 2. Inline with text: <Loading text="Loading data..." />
 * 3. Small size: <Loading size="sm" />
 * 4. Large size: <Loading size="lg" />
 * 5. Different color: <Loading color="red" />
 * 6. Overlay: <Loading overlay />
 */

const Loading = ({
    fullScreen = false,
    overlay = false,
    text = '',
    size = 'md',
    color = 'green',
    className = ''
}) => {
    // Size configurations
    const sizeClasses = {
        sm: 'w-6 h-6 border-2',
        md: 'w-10 h-10 border-3',
        lg: 'w-16 h-16 border-4',
        xl: 'w-24 h-24 border-4'
    };

    // Color configurations
    const colorClasses = {
        green: 'border-green-600 border-t-transparent',
        red: 'border-red-600 border-t-transparent',
        emerald: 'border-emerald-600 border-t-transparent',
        dark: 'border-gray-800 border-t-transparent',
        white: 'border-white border-t-transparent'
    };

    const textColorClasses = {
        green: 'text-green-600',
        red: 'text-red-600',
        emerald: 'text-emerald-600',
        dark: 'text-gray-800',
        white: 'text-white'
    };

    // Spinner element
    const spinner = (
        <div
            className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-spin ${className}`}
            data-testid="loading-spinner"
        ></div>
    );

    // Loading content
    const loadingContent = (
        <div className="flex flex-col items-center justify-center gap-3" data-testid="loading-content">
            {spinner}
            {text && (
                <p className={`${textColorClasses[color]} font-medium text-sm sm:text-base`}>
                    {text}
                </p>
            )}
        </div>
    );

    // Full screen loading
    if (fullScreen) {
        return (
            <div
                className="fixed inset-0 bg-white flex items-center justify-center z-50"
                data-testid="loading-fullscreen"
            >
                {loadingContent}
            </div>
        );
    }

    // Overlay loading (semi-transparent background)
    if (overlay) {
        return (
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
                data-testid="loading-overlay"
            >
                <div className="bg-white rounded-xl p-8 shadow-2xl">
                    {loadingContent}
                </div>
            </div>
        );
    }

    // Inline loading
    return (
        <div className="flex items-center justify-center py-8" data-testid="loading-inline">
            {loadingContent}
        </div>
    );
};

// Spinner-only component (for inline use)
export const Spinner = ({ size = 'md', color = 'green', className = '' }) => {
    const sizeClasses = {
        xs: 'w-4 h-4 border-2',
        sm: 'w-6 h-6 border-2',
        md: 'w-8 h-8 border-3',
        lg: 'w-12 h-12 border-3'
    };

    const colorClasses = {
        green: 'border-green-600 border-t-transparent',
        red: 'border-red-600 border-t-transparent',
        emerald: 'border-emerald-600 border-t-transparent',
        dark: 'border-gray-800 border-t-transparent',
        white: 'border-white border-t-transparent'
    };

    return (
        <div
            className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-spin ${className}`}
            data-testid="spinner"
        ></div>
    );
};

// Dots loading animation
export const LoadingDots = ({ color = 'green', className = '' }) => {
    const dotColorClasses = {
        green: 'bg-green-600',
        red: 'bg-red-600',
        emerald: 'bg-emerald-600',
        dark: 'bg-gray-800',
        white: 'bg-white'
    };

    return (
        <div className={`flex items-center gap-2 ${className}`} data-testid="loading-dots">
            <div
                className={`w-2 h-2 ${dotColorClasses[color]} rounded-full animate-bounce`}
                style={{ animationDelay: '0ms' }}
            ></div>
            <div
                className={`w-2 h-2 ${dotColorClasses[color]} rounded-full animate-bounce`}
                style={{ animationDelay: '150ms' }}
            ></div>
            <div
                className={`w-2 h-2 ${dotColorClasses[color]} rounded-full animate-bounce`}
                style={{ animationDelay: '300ms' }}
            ></div>
        </div>
    );
};

// Pulse loading (for skeleton screens)
export const LoadingPulse = ({ className = '' }) => {
    return (
        <div
            className={`animate-pulse bg-gray-200 rounded ${className}`}
            data-testid="loading-pulse"
        ></div>
    );
};

// Progress bar loading
export const LoadingBar = ({ progress = 0, color = 'green', showPercentage = false }) => {
    const bgColorClasses = {
        green: 'bg-green-600',
        red: 'bg-red-600',
        emerald: 'bg-emerald-600',
        dark: 'bg-gray-800'
    };

    const textColorClasses = {
        green: 'text-green-600',
        red: 'text-red-600',
        emerald: 'text-emerald-600',
        dark: 'text-gray-800'
    };

    return (
        <div className="w-full" data-testid="loading-bar">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                    className={`${bgColorClasses[color]} h-2.5 rounded-full transition-all duration-300 ease-out`}
                    style={{ width: `${Math.min(progress, 100)}%` }}
                ></div>
            </div>
            {showPercentage && (
                <p className={`text-sm font-medium mt-2 text-center ${textColorClasses[color]}`}>
                    {Math.round(progress)}%
                </p>
            )}
        </div>
    );
};

export default Loading;
