import React, { useState } from 'react'

const Client = ({ client }) => {
  const { name, pets } = client
  const [isVaccinated, setIsVaccenated] = useState(false)

  const handleChange = () => {
    setIsVaccenated(!isVaccinated)
  }
  
  return (
    <div className='flex flex-col items-center p-3'>
      <div className='mb-3 font-semibold'>{name}</div>
      <div>
        {pets.map((pet, index) => (
          <div key={index} className='p-1'>
            <div className='flex items-center py-1'>
              <p className='mr-2'>{pet.name}</p>
              <p className='mr-2'>{pet.animal}</p>
              <button className="btn btn-xs btn-success" onClick={handleChange}
              >
                {isVaccinated ? "Vaccinated" : "Not Vaccinated"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


export default Client
