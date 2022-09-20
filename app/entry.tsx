// This is the entry point to your app.

// It's a good place to execute one-time side effects, such as initializing the React root,
// because it will never get fast-refreshed in development mode.

// react and react-dom are installed by default, so we can just import them.
import * as react from 'react'
import * as reactDom from 'react-dom/client'
import { Root } from '/root.js'

export const init = () => {
  const root = document.getElementById('root')
  if (!root) {
    throw new Error('missing root element')
  }
  reactDom
    .createRoot(root)
    .render(
      <react.StrictMode>
        <Root />
      </react.StrictMode>
    )
}