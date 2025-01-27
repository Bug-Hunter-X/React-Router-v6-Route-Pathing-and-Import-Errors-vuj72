```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }
function NotFound() { return <h1>404 Not Found</h1>; }

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
This corrected version ensures correct imports and a properly structured route configuration.  The `/*` path in the `NotFound` route correctly catches all unmatched routes.  Consider using more specific paths for better route handling in larger applications.