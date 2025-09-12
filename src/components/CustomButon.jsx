import React from 'react'

const CustomButon = ({text, onClick}) => {
  return (
    <button className="bg-blue-500 text-white font-semibold py-1 px-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={onClick}>
        {text}
  </button>
  )
}

export default CustomButon
