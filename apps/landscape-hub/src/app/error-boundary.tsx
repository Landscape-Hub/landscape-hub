import { ErrorInfo, ReactNode, useState } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

export const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const getDerivedStateFromError = () => {
    setHasError(true);
  };

  const componentDidCatch = (error: Error, errorInfo: ErrorInfo) => {
    console.error('Uncaught error:', error, errorInfo);
  };

  if (hasError) {
    return <h1>Something went wrong.</h1>;
  }

  return children;
};

export default ErrorBoundary;
