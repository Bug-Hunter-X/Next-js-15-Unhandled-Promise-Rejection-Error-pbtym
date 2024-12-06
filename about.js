```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause a runtime error in Next.js 15 if you don't handle it.
  const unhandledPromise = new Promise((resolve, reject) => {
    reject(new Error('Oops! Unhandled promise rejection.'));
  });
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}
```