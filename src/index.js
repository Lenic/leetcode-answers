import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

let rendered = false;
const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    if (!rendered) {
      rendered = true;
      return;
    }

    const originalLog = console.log;

    console.log = (...args) => {
      setList((previous) => [...previous, args.map((v) => JSON.stringify(v, null, '  ')).join(', ')]);

      originalLog.apply(console, args);
    };

    import('./code');
    // import('./taptap');
    // import('./brix');
    // import('./toptal');
    // import('./booking');
  }, []);

  return (
    <ul>
      {list.map((v, i) => (
        <li key={i}>{v}</li>
      ))}
    </ul>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
