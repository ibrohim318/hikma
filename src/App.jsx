import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import MainLayout from "./Layouts/MainLayout"
import Student from "./roles/Student"
import Teacher from "./roles/Teacher"
import Parent from "./roles/Parent"
import StudentRegister from "./register/register/StudentRegister"
import StudentSignup from "./register/signup/StudentSignup/StudentSignup"
import StudentLogin from "./register/login/StudentLogin"
import ParentRegister from "./register/register/ParentRegister"
import ParentSignup from "./register/signup/ParentSignup/ParentSignup"
import ParentLogin from "./register/login/ParentLogin"
import TeacherRegister from "./register/register/TeacherRegister"
import TeacherSignup from "./register/signup/TeacherSignup/TeacherSignup"
import TeacherLogin from "./register/login/TeacherLogin"
import { ProtectedRoute } from "./ProtectedRoute"  // ← PublicRoute olib tashlandi

// ! studentPage
import StudentDashboard from "./pages/studentPage/studentDashboard"

// ! parentPage
import ParentDashboard from "./pages/parentPage/parentDashboard"

// ! teacherPage
import TeacherDashboard from "./pages/teacherPage/teacherDashbaord"

// App.jsx da router DAN OLDIN qo'shing
const HomeRedirect = () => {
  const token = localStorage.getItem("token");
  if (token) return <Navigate to="/studentDashboard" replace />;
  return <Student />;
};

// ✅ App DAN TASHQARIDA
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomeRedirect />
      },
      { path: "teacher", element: <Teacher /> },
      { path: "parent", element: <Parent /> }
    ],
  },
  //! student register 
  {
    path: "",
    element: <StudentRegister />,
    children: [
      { path: "studentregister", element: <StudentSignup /> },
      { path: "studentLogin", element: <StudentLogin /> }
    ]
  },
  //! parent register
  {
    path: "",
    element: <ParentRegister />,
    children: [
      { path: "parentRegister", element: <ParentSignup /> },
      { path: "parentLogin", element: <ParentLogin /> }
    ]
  },
  //! teacher register
  {
    path: "",
    element: <TeacherRegister />,
    children: [
      { path: "teacherRegister", element: <TeacherSignup /> },
      { path: "teacherLogin", element: <TeacherLogin /> }
    ]
  },
  // ? student pages 
  {
    path: "/studentDashboard",
    element: <ProtectedRoute><StudentDashboard /></ProtectedRoute>
  },
  // ?parent pages
  {
    path: "/parentDashboard",
    element: <ProtectedRoute><ParentDashboard /></ProtectedRoute>
  },
  // ? teacher pages
  {
    path: "/teacherDashboard",
    element: <ProtectedRoute><TeacherDashboard /></ProtectedRoute>
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App