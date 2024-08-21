import React, { useEffect, useRef, useState } from "react";

const Addplayer = ({ player, onSubmit }) => {
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

  useEffect(() => {
    if (player) {
      nameRef.current.value = player.name;
      dobRef.current.value = player.dob;
      photoUrlRef.current.value = player.photoUrl;
      birthplaceRef.current.value = player.birthplace;
      careerRef.current.value = player.career;
      matchesRef.current.value = player.matches;
      scoreRef.current.value = player.score;
      fiftiesRef.current.value = player.fifties;
      centuriesRef.current.value = player.centuries;
      wicketsRef.current.value = player.wickets;
      averageRef.current.value = player.average;
    } else {
      nameRef.current.value = "";
      dobRef.current.value = "";
      photoUrlRef.current.value = "";
      birthplaceRef.current.value = "";
      careerRef.current.value = "";
      matchesRef.current.value = "";
      scoreRef.current.value = "";
      fiftiesRef.current.value = "";
      centuriesRef.current.value = "";
      wicketsRef.current.value = "";
      averageRef.current.value = "";
    }
  }, [player]);

  const handleSubmit = async (e) => {
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

    try {
      let response;

      if (player) {
        response = await fetch(
          `http://localhost:3000/api/editplayer/${player.id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log("Player updated successfully:", data);
          onSubmit();
        } else {
          console.error("Error updating player:", response.statusText);
        }
      } else {
        response = await fetch("http://localhost:3000/api/addplayer", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Player added successfully:", data);
          onSubmit();
        } else {
          console.error("Error adding player:", response.statusText);
        }
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      class="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
    >
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">Name:</label>
        <input
          type="text"
          ref={nameRef}
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">
          Date of Birth:
        </label>
        <input
          type="date"
          ref={dobRef}
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">
          Photo URL:
        </label>
        <input
          type="text"
          ref={photoUrlRef}
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">
          Birthplace:
        </label>
        <input
          type="text"
          ref={birthplaceRef}
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">
          Career:
        </label>
        <input
          type="text"
          ref={careerRef}
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">
          Number of Matches:
        </label>
        <input
          type="number"
          ref={matchesRef}
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">Score:</label>
        <input
          type="number"
          ref={scoreRef}
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">
          Fifties:
        </label>
        <input
          type="number"
          ref={fiftiesRef}
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">
          Centuries:
        </label>
        <input
          type="number"
          ref={centuriesRef}
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">
          Wickets:
        </label>
        <input
          type="number"
          ref={wicketsRef}
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">
          Average:
        </label>
        <input
          type="number"
          step="0.01"
          ref={averageRef}
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        {player ? "Update" : " Submit"}
      </button>
    </form>
  );
};

export default Addplayer;
