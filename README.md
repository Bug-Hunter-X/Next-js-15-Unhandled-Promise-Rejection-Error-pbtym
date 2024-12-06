# Next.js 15 Unhandled Promise Rejection

This repository demonstrates an uncommon error in Next.js 15 related to unhandled promise rejections.  In Next.js 15, unhandled promise rejections in page components can cause the entire application to crash. This example shows how to reproduce the error and a solution for handling it.

## Reproducing the Error

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to `/about`.

You will see a runtime error in your browser console.

## Solution

The solution involves using error boundaries to gracefully handle errors in your components.  See the `solutionContent` in the JSON file for an example.