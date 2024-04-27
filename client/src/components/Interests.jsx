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
}
