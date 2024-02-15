import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [displayName, setDisplayName] = useState("");
  const [displayNameInvalid, setUserNameInvalid] = useState(false);
  const navigate = useNavigate();
  const butref = useRef();

  const joinRoom = () => {
    console.log("akjd");
    if (/^[a-zA-Z0-9 ]+$/.test(displayName.trim())) {
      navigate("/chatRoom", {
        state: {
          displayName: displayName,
        },
      });
    } else {
      setUserNameInvalid(true);
      setTimeout(() => {
        setUserNameInvalid(false);
      }, 2000);
    }
  };

  const handleInput = (e) => {
    setDisplayName(e.target.value);
  };

  useEffect(() => {
    console.log(displayName);
  }, [displayName]);

  const checkKey = (e) => {
    if (e.key === "Enter") {
      butref.current.click();
    }
  };

  return (
    <div className="grid grid-cols-1 place-content-center bg-yellow-200 min-h-screen h-full w-full ">
      <h1 className="text-5xl font-bold mx-auto">Welcome </h1>
      <h1 className="text-5xl font-bold mx-auto">to the </h1>
      <h1 className="text-5xl font-bold mx-auto">Chat Room </h1>
      <div className="border-2 border-black p-20 rounded-lg mx-auto bg-yellow-50 my-20">
        <input
          className="m-2 p-2 bg-blue-200 rounded-lg"
          placeholder="Display Name"
          onChange={handleInput}
          onKeyUp={checkKey}
        ></input>
        <button
          className="bg-blue-500 px-5 py-2 border-2 border-blue-700 rounded-lg text-white font-semibold"
          ref={butref}
          onClick={joinRoom}
        >
          Join Room
        </button>

        <div hidden={!displayNameInvalid}>
          <span className="text-sm text-red-500">
            Invalid display name! Only a-z, A-Z, 0-9 and whitespaces allowed.
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
