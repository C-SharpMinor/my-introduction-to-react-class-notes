import { Routes, Route, Navigate } from "react-router";
import NavigationMenu from "./components/NavigationMenu";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardHome from "./dashboard-pages/DashboardHome";
import Profile from "./dashboard-pages/Profile";
import Settings from "./dashboard-pages/Settings";
import Registration from "./registration-pages/Registration";
import RegistrationSuccess from "./registration-pages/RegistrationSuccess";


function App() {

  return (
    <>
     <NavigationMenu />
      <main>
          <Routes>
              <Route path="/" element={<Home /> } />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/all-courses" element={<Navigate to="/courses" replace />} />
              <Route path="/courses/:courseId" element={<CourseDetails />} />

          {/* Dashboard layout nesting */}
          <Route path="/dashboard" element={<DashboardLayout />} >
              <Route index element={<DashboardHome />} />
              <Route path="/dashboard/profile" element={<Profile />} />
              <Route path="/dashboard/settings" element={<Settings />} />
          </Route>

          {/* registration */}
          <Route path="/registration" element={<Registration  />}  />
          <Route path="/registration/success" element={<RegistrationSuccess />}  />

          </Routes>
      </main>
    </>
  )
}

export default App
