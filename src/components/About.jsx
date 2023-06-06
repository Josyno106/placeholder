import React, { useEffect, useState } from "react";
import { Blocks } from "react-loader-spinner";
import { BiError } from "react-icons/bi";

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setLoading(false);
    }, 7000);
  }, []);

  return (
    <div>
      {loading ? (
        <h2>Redirecting to http://kssfkenya.org/ ...</h2>
      ) : (
        <h2>Redirection to http://kssfkenya.org/ failed!</h2>
      )}
      {loading ? "" : <BiError style={{ color: "red", fontSize: "4rem" }} />}

      {loading ? (
        <Blocks
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
        />
      ) : (
        <h3>501 Internal Server Error - info@kssfkenya.com</h3>
      )}
    </div>
  );
};

export default About;
