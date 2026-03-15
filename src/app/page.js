// src/app/page.js
'use client';

import { useEffect, useState } from "react";
import SubjectCard from "@/components/SubjectCard";

export default function Home() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await fetch("/data/questions.json");
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setSubjects(data.subjects || []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSubjects();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">MY FIRST CONTRIBUTION</h1>
      <p className="text-lg text-gray-700 mb-8">
        Select a subject to get started and test your knowledge!
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-screen-lg">
        {subjects.length > 0 ? (
          subjects.map((subject) => (
            <SubjectCard key={subject.name} subject={subject} />
          ))
        ) : (
          <p className="text-lg text-center text-gray-500 animate-pulse">
            Loading subjects...
          </p>
        )}
      </div>

      {/* Click Me Button */}
      <button
        onClick={() => alert("Hello, welcome to the Quiz App!")}
        className="mt-8 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
      >
        Click Me!
      </button>
    </div>
  );
}