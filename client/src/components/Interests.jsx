<<<<<<< HEAD
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
    "UX/UI Design",
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
      <ul className='grid grid-cols-5 text-black gap-4 rounded-sm'>
        {academicInterests.map((interest, index) => (
          <li
            key={index}
            className={`p-4 flex text-white gap-3 cursor-pointer ${interests.includes(interest) ? "bg-green-500" : "bg-black"}`}
            onClick={() => handleClick(interest)}
          >
            {interest}
          </li>
        ))}
      </ul>
      <button onClick={() => setToggle(true)}>Previous</button>
    </div>
  );
=======
import React , {useState} from 'react'

export default function ({setToggle , setInterests , interests}) {
    //const [preferences , setPreferences] = useState([]) ; 
    const academicInterests = [
        "Artificial Intelligence (AI)",
        "Machine Learning (ML)",
        "Data Science",
        "Web Development",
        "Cybersecurity",
        "Blockchain Technology",
        "Mobile App Development",
        "Game Development",
        "UX/UI Design",
        "Digital Marketing"
      ];
      
    //   console.log(academicInterests);
      
    return (
        <div className="">
        <ul className='grid grid-cols-5 text-black gap-4 rounded-sm'>
            {
                academicInterests.map((interest, index) => (
                    <li 
                    value={interest}
                    onClick={(e) => setInterests([...interests , interest])}
                    key={interest} className={`p-4 flex  text-white gap-3 cursor-pointer ${interests.includes(interest)? "bg-green-500":"bg-black"}`} >
                        {interest}
                        {/* {console.log('Interest ',interest)} */}
                    </li>
                ))
            }
        </ul>

        <button onClick={() => setToggle(true)}>Previous</button>
        </div>
    )
>>>>>>> 70317377ce0d207ccd70805a80269e1b2c0034cf
}
