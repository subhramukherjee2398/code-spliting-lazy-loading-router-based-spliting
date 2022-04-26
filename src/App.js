import React, { Suspense } from "react";
import "./App.css";
import("./Math").then((result) => {
  console.warn("result = ", result.Add(100, 200));
});

const Home = React.lazy(() => import("./Home"));
const About = React.lazy(() => import("./About"));
function App() {
  return (
    <div className="App" style={{ display: "flex", flexDirection: "row" }}>
      <Suspense
        fallback={
          <div>
            <img
              src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif"
              alt="homeloader"
              width="180px"
              height="100px"
            />
          </div>
        }
      >
        <Home />
      </Suspense>
      <Suspense
        fallback={
          <div>
            <img
              src="https://icon-library.com/images/gif-icon/gif-icon-0.jpg"
              alt="aboutLoader"
              width="180px"
              height="100px"
            />
          </div>
        }
      >
        <About />
      </Suspense>
    </div>
  );
}

export default App;
