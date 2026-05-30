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
import { ProtectedRoute } from "./ProtectedRoute"

// ! studentPage
import StudentPage from "./pages/studentPage/studentPage"
import StudentDashboard from "./pages/studentPage/StudentDashboard"
import StudentThought from "./pages/studentPage/studentThought"
import StudentThinking from "./pages/studentPage/StudentThinking"

// ? Student thought tools
import LogicalThinking from "./pages/studentPage/thoughtParts/LogicalThinking"
import CreativeThinking from "./pages/studentPage/thoughtParts/CreativeThinking"
import ReasonThinking from "./pages/studentPage/thoughtParts/ReasonThinking"
import AskQuestion from "./pages/studentPage/thoughtParts/AskQuestion"
import Conclusion from "./pages/studentPage/thoughtParts/Conclusion"

// ? studentPage Thinking tools
import StudentFiveWhy from "./pages/studentPage/Thinking Tools/StudentFiveWhy"
import StudentPDSA from "./pages/studentPage/Thinking Tools/StudentPDSA"
import StudentSWOT from "./pages/studentPage/Thinking Tools/StudentSWOT"
import StudentPareto from "./pages/studentPage/Thinking Tools/StudentPareto"

// ! parentPage
import ParentDashboard from "./pages/parentPage/parentDashboard"

// ! teacherPage
import TeacherDashboard from "./pages/teacherPage/teacherDashbaord"

// App.jsx da router DAN OLDIN qo'shing
const HomeRedirect = () => {
  const token = localStorage.getItem("token");
  if (token) return <Navigate to="/studentPage" replace />;
  return <Student />;
};


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
    path: "/studentPage",
    element: <ProtectedRoute />,
    children: [
      {
        element: <StudentPage />,
        children: [
          { index: true, element: <StudentDashboard /> },
          {
            path: "studentThought", element: <StudentThought />,
            children: [
              { index: true, element: <StudentSWOT /> },
              { path: "studentFiveWhy", element: <StudentFiveWhy /> },
              { path: "studentPareto", element: <StudentPareto /> },
              { path: "studentPDSA", element: <StudentPDSA /> },
            ]
          },
          {
            path: "StudentThinking", element: <StudentThinking />,
            children: [
              { index: true, element: <LogicalThinking /> },
              { path: "creativeThinking", element: <CreativeThinking /> },
              { path: "reasonThinking", element: <ReasonThinking /> },
              { path: "askQuestion", element: <AskQuestion /> },
              { path: "conclusion", element: <Conclusion /> }
            ]
          },

        ]
      }
    ]
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