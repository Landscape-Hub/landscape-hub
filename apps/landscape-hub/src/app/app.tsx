import { routes } from '@landscape/routing';

import { Route, Routes } from 'react-router-dom';
import { Toaster} from '@landscape/shadcn';


export function App() {

  return (
    <>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          >
            {route.children?.map((childRoute, childIndex) => (
              <Route
                key={childIndex}
                path={childRoute.path}
                element={childRoute.element}
              />
            ))}
          </Route>
        ))}
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
