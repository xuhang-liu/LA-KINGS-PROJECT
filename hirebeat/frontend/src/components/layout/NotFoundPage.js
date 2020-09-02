import React from "react";
import { useEffect } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export default function NotFoundPage() {
  return (
    <React.Fragment>
    <ScrollToTopOnMount />
    <div className="container">
      <div
        style={{
          paddingBottom: "20%",
          paddingTop: "20%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          
          <h2>Oops... Page not found.</h2>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}
