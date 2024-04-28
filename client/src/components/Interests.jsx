import React from 'react';

export default function InterestSelector({ setToggle, setInterests, interests }) {
  const academicInterests = [
    "Artificial Intelligence (AI)",
    "Machine Learning (ML)",
    "Data Science",
    "Web Development",
    "Cybersecurity",
    "Blockchain Technology",
    "Mobile App Development",
    "Game Development",
    "UI-UX Design",
    "Digital Marketing"
  ];

  const handleClick = (interest) => {
    if (interests.includes(interest)) {
      // If interest is already selected, remove it
      setInterests(interests.filter(item => item !== interest));
    } else {
      // If interest is not selected, add it
      setInterests([...interests, interest]);
    }
  };

  return (
    <div>
      <ul className='grid grid-cols-2 text-black gap-4 rounded-sm'>
        {academicInterests.map((interest, index) => (
          <li
            key={index}
            className={`p-4 flex text-black gap-3 cursor-pointer border border-gray-200 rounded-md ${interests.includes(interest) ? "bg-green-500 text-white" : "bg-white "}`}
            onClick={() => handleClick(interest)}
          >
            {interest}
          </li>
        ))}
      </ul>
      <button onClick={() => setToggle(true)} className='mt-8'>Previous</button>
    </div>
  );
}