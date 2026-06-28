import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { TooltipProvider } from '@radix-ui/react-tooltip'
import { Toaster } from 'sonner'
import { routeTree } from './routeTree.gen'
import './styles.css'

// 1. Create the Query Client (The Database Brain)
const queryClient = new QueryClient()

// 2. Create the Router (The Navigation Brain)
const router = createRouter({ 
  routeTree,
  context: {
    queryClient,
  },
  defaultPreload: 'intent',
  // Since we're wrapping in QueryClientProvider below, we don't strictly need to pass it here 
  // for simple apps, but it's good practice for TanStack Router integration.
})

// Register the router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// 3. Render the Full Stack
const rootElement = document.getElementById('root')
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <RouterProvider router={router} />
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>,
  )
}
