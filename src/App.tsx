import { BrowserRouter as Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import routes from 'routes'

const App = () => (
  <Router>
    {renderRoutes(routes)}
  </Router>
)

export default App;
