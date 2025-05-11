import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import TaskAssignment from './pages/TaskAssignment';
import WorkerManagement from './pages/WorkerManagement';
import TaskOverview from './pages/TaskOverview';
import Profile from './pages/Profile';
import Schedule from './pages/Schedule';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            // <PrivateRoute>
              <Layout />
            // {/* </PrivateRoute> */}
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="tasks" element={<TaskAssignment />} />
          <Route path="workers" element={<WorkerManagement />} />
          <Route path="overview" element={<TaskOverview />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;