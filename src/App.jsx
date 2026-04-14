import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./Layouts/MainLayout"

// roles
import Student from "./roles/Student"
import Teacher from "./roles/Teacher"
import Parent from "./roles/Parent"

// signup layouts
import StudentRegister from "./register/register/StudentRegister"
import StudentSignup from "./register/signup/StudentSignup"
import StudentLogin from "./register/login/StudentLogin"

import ParentRegister from "./register/register/ParentRegister"
import ParentSignup from "./register/signup/ParentSignup"
import ParentLogin from "./register/login/ParentLogin"

import TeacherSignup from "./register/register/TeacherSignup"

//pages
import Dashboard from "./pages/Dashboard"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Student />
        },
        {
          path: "teacher",
          element: <Teacher />
        },
        {
          path: "parent",
          element: <Parent />
        }
      ],
    },
    // student
    {
      path: "studentregister",
      element: <StudentRegister />,
      children: [
        {
          index: true,
          element: <StudentSignup />
        },
        {
          path: "studentLogin",
          element: <StudentLogin />
        }
      ]
    },
    // parent
    {
      path: "parentRegister",
      element: <ParentRegister />,
      children: [
        {
          index: true,
          element: <ParentSignup />
        },
        {
          path: "parentLogin",
          element: <ParentLogin />
        }
      ]
    },
    {
      path: "teacherSignup",
      element: <TeacherSignup />
    },

    //pages
    {
      path: "dashboard",
      element: <Dashboard />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App