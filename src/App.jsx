import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./Layouts/MainLayout"

// roles
import Student from "./roles/Student"
import Teacher from "./roles/Teacher"
import Parent from "./roles/Parent"

// student signup
import StudentRegister from "./register/register/StudentRegister"
import StudentSignup from "./register/signup/StudentSignup/StudentSignup"
// import StudentSignupDatas from "./register/signup/StudentSignup/StudentSignupDatas"
import StudentID from "./register/signup/StudentSignup/StudentID"
import StudentLogin from "./register/login/StudentLogin"

// parent signup
import ParentRegister from "./register/register/ParentRegister"
import ParentSignup from "./register/signup/ParentSignup/ParentSignup"
import ParentID from "./register/signup/ParentSignup/ParentID"
import ParentSignupDatas from "./register/signup/ParentSignup/ParentSignupDatas"
import ParentLogin from "./register/login/ParentLogin"

// teacher signup
import TeacherRegister from "./register/register/TeacherRegister"
import TeacherSignup from "./register/signup/TeacherSignup/TeacherSignup"
import TeacherID from "./register/signup/TeacherSignup/TeacherID"
import TeacherLogin from "./register/login/TeacherLogin"
import TeacherSignupDatas from "./register/signup/TeacherSignup/TeacherSignupDatas"

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
      path: "",
      element: <StudentRegister />,
      children: [
        {
          path: "studentregister",
          element: <StudentSignup />,
        },
        {
          path: "studentLogin",
          element: <StudentLogin />
        }
      ]
    },
    // parent
    {
      path: "",
      element: <ParentRegister />,
      children: [
        {
          path: "parentRegister",
          element: <ParentSignup />,
        },
        {
          path: "parentLogin",
          element: <ParentLogin />
        }
      ]
    },
    // teacher
    {
      path: "",
      element: <TeacherRegister />,
      children: [
        {
          path: "teacherRegister",
          element: <TeacherSignup />,
        },
        {
          path: "teacherLogin",
          element: <TeacherLogin />
        },
      ]
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