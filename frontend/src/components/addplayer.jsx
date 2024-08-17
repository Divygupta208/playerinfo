import React, { useRef, useState } from "react";

const Addplayer = () => {
  const nameRef = useRef();
  const dobRef = useRef();
  const photoUrlRef = useRef();
  const birthplaceRef = useRef();
  const careerRef = useRef();
  const matchesRef = useRef();
  const scoreRef = useRef();
  const fiftiesRef = useRef();
  const centuriesRef = useRef();
  const wicketsRef = useRef();
  const averageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: nameRef.current.value,
      dob: dobRef.current.value,
      photoUrl: photoUrlRef.current.value,
      birthplace: birthplaceRef.current.value,
      career: careerRef.current.value,
      matches: matchesRef.current.value,
      score: scoreRef.current.value,
      fifties: fiftiesRef.current.value,
      centuries: centuriesRef.current.value,
      wickets: wicketsRef.current.value,
      average: averageRef.current.value,
    };
    console.log("Form Data Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" ref={nameRef} />
      </div>

      <div>
        <label>Date of Birth:</label>
        <input type="date" ref={dobRef} />
      </div>

      <div>
        <label>Photo URL:</label>
        <input type="text" ref={photoUrlRef} />
      </div>

      <div>
        <label>Birthplace:</label>
        <input type="text" ref={birthplaceRef} />
      </div>

      <div>
        <label>Career:</label>
        <input type="text" ref={careerRef} />
      </div>

      <div>
        <label>Number of Matches:</label>
        <input type="number" ref={matchesRef} />
      </div>

      <div>
        <label>Score:</label>
        <input type="number" ref={scoreRef} />
      </div>

      <div>
        <label>Fifties:</label>
        <input type="number" ref={fiftiesRef} />
      </div>

      <div>
        <label>Centuries:</label>
        <input type="number" ref={centuriesRef} />
      </div>

      <div>
        <label>Wickets:</label>
        <input type="number" ref={wicketsRef} />
      </div>

      <div>
        <label>Average:</label>
        <input type="number" step="0.01" ref={averageRef} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Addplayer;
