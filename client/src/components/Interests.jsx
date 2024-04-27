import React from 'react'

export default function () {
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
        <div className='grid grid-cols-5 text-black'>
            {
                academicInterests.map((interest, index) => {
                    <div className='p-4 flex' >
                        {interest}
                    </div>
                })
            }
        </div>
    )
}
