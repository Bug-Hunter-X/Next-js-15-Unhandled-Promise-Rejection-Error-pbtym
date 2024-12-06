```javascript
// pages/about.js
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export default function About() {
  const unhandledPromise = new Promise((resolve, reject) => {
    reject(new Error('Oops! Unhandled promise rejection.'));
  });
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div>
        <h1>About Page</h1>
      </div>
    </ErrorBoundary>
  );
}
```