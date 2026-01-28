import Dashboard from "./pages/Dashboard"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CoursesPage from "./pages/Courses"
import FacultyPage from "./pages/Faculty"
import RoomPage from "./pages/Rooms"
import TimetablePage from "./pages/Timetable"
import NotificationsPage from "./pages/Notifications"
import LoginPage from "./pages/Login"
import SignupPage from "./pages/Signup"
import { ProtectedRoute } from "./components/ProtectedRoute"

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login/*" element={<LoginPage />} />
        <Route path="/signup/*" element={<SignupPage />} />
        
        {/* Protected Routes */}
        <Route path="/" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/courses" element={
          <ProtectedRoute>
            <CoursesPage />
          </ProtectedRoute>
        } />
        <Route path="/faculty" element={
          <ProtectedRoute>
            <FacultyPage />
          </ProtectedRoute>
        } />
        <Route path="/rooms" element={
          <ProtectedRoute>
            <RoomPage />
          </ProtectedRoute>
        } />
        <Route path="/timetables" element={
          <ProtectedRoute>
            <TimetablePage />
          </ProtectedRoute>
        } />
        <Route path="/notifications" element={
          <ProtectedRoute>
            <NotificationsPage />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  )
}

export default App
