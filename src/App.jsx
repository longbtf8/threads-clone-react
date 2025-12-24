import { BrowserRouter as Router, Route, Routes } from "react-router";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/HomePage";
import Activity from "./pages/ActivityPage";
import Profile from "./pages/ProfilePage";
import Search from "./pages/SearchPage";
import PostDetail from "./pages/PostDetailPage";

function App() {
  return (
    <>
      <Router basename={"/threads-clone-react/"}>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/users/:id" element={<Profile />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
