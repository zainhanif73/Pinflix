import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./MainPage/Main";
import MovieDetail from "./Movie/Main";
import TvDetail from "./Tv/Main";

function App() {
  return (
    <>
      <Routes>
        <Route
          index
          element={
            <Suspense fallback={<div></div>}>
              <Main />
            </Suspense>
          }
        />
        <Route
          path="movie/:id/:id"
          element={
            <Suspense fallback={<div></div>}>
              <MovieDetail />
            </Suspense>
          }
        />
        <Route
          path="movie/:id"
          element={
            <Suspense fallback={<div></div>}>
              <MovieDetail />
            </Suspense>
          }
        />
        <Route
          path="movie"
          element={
            <Suspense fallback={<div></div>}>
              <MovieDetail />
            </Suspense>
          }
        />
        <Route
          path="tv/:id/:id"
          element={
            <Suspense fallback={<div></div>}>
              <TvDetail />
            </Suspense>
          }
        />
        <Route
          path="tv/:id"
          element={
            <Suspense fallback={<div></div>}>
              <TvDetail />
            </Suspense>
          }
        />
        <Route
          path="tv"
          element={
            <Suspense fallback={<div></div>}>
              <TvDetail />
            </Suspense>
          }
        />
      </Routes>
    </>
  )
}

export default App;
