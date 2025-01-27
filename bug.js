```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
This code uses React Router v6.  A common error is to forget to import the correct components or use incorrect paths.  Another common error is improperly nesting routes, or not using the `Routes` component correctly to wrap the `Route` components.