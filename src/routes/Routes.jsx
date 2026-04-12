import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/homepage/Home";
import Book from "../pages/bookPage/Book";
import ErrorPage from "../pages/errorPages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/books",
        Component: Book
      }
    ],
    errorElement: <ErrorPage />
  }
])