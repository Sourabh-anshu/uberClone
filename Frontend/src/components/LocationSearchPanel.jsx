import React from 'react'

const locArray = [
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, tenetur quam? Magnam ut neque pariatur.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, tenetur quam? Magnam ut neque pariatur.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, tenetur quam? Magnam ut neque pariatur.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, tenetur quam? Magnam ut neque pariatur.",
]

const LocationSearchPanel = () => {
    return (
        <div>
            {
                locArray.map((ele) => {
                    return <div className='flex gap-4 p-3  justify-start border-2 border-gray-200 active:border-black rounded-xl items-center px-5 my-2 mx-3'>
                        <h2 className='bg-[#eee] rounded-full p-3 mr-1'>
                            <i className="ri-map-pin-fill text-2xl"></i>
                        </h2>
                        <h4 >{ele}</h4>
                    </div>
                })
            }
        </div>
    )
}

export default LocationSearchPanel
