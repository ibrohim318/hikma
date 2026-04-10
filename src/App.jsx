import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./Layouts/MainLayout"

// roles
import Student from "./roles/Student"
import Teacher from "./roles/Teacher"
import Parent from "./roles/Parent"

// signup layouts
import StudentSignup from "./register/signup/StudentSugnup"
import TeacherSignup from "./register/signup/TeacherSignup"
import ParentSignup from "./register/signup/ParentSugnup"

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
    {
      path: "studentSignup",
      element: <StudentSignup />
    },
    {
      path: "teacherSignup",
      element: <TeacherSignup />
    },
    {
      path: "parentSignup",
      element: <ParentSignup />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App