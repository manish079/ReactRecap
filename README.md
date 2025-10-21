# Parcel (Why react is faster)

- Dev build
- Local Server
- HMR = Hot module replacement
- File Watching algorithm - written in c++
- Caching - Faster Build
- Image optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code splitting
- Differentiate bundling - Support older browser
- HTTPs
- Tree Shaking - remove unused code
- Different build for dev and prod bundles

# Whenever the state is updated, React efficiently re-renders the component. It does this in a highly optimized way using the Virtual DOM, which makes UI updates extremely fast and seamless.

# Diff Algorithm (Reconciliation algo / react fiber) -> Under the hood of react working

- “React re-renders a component when its state or props change. However, it skips re-rendering if the state value is the same as before. React also batches multiple state updates for performance optimization.”

# Virtual dom

- virtual dom is representation of actual DOM and its lightweight copy of actual DOM, faster

- React keeps a virtual version of your UI in memory.

- When something changes (like state), React:
  Creates a new Virtual DOM.

- Compares it with the old Virtual DOM (this is called diffing).

- React finds exactly what changed (e.g., one text value).

- React updates only that part of the Real DOM, not the entire page.
