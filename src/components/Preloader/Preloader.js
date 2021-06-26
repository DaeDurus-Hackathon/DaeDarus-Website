import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";

import * as location from "../../images/45299-coding-1.json";
import * as success from "../../images/1127-success.json";

const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: location.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: success.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function PreLoader() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setloading(true);

          setTimeout(() => {
            setcompleted(true);
          }, 1000);
        });
    }, 2000);
  }, []);

  return (
    <>
      {!completed ? (
        <>
          {!loading ? (
            <Lottie options={defaultOptions1} height={900} width={600} />
          ) : (
            <Lottie options={defaultOptions2} height={100} width={100} />
          )}
        </>
      ) : (
        <>
          <h1>Your Data</h1>
          <br />
          <h1 style={{ position: "Absolute", right: "5rem", bottom: "0" }}>
            <a
              style={{ color: "white" }}
              href="https://lottiefiles.com/chrisgannon"
            >
              {/* Earth Animation by Chris Gannon on LottieFiles */}
            </a>
            
          </h1>
        </>
      )}
    </>
  );
}

export default PreLoader;