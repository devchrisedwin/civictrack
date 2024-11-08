import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'

function Rating() {
    const [rating, setRating] = useState(null)
    const [mouseMove, setMouseMove] = useState(null)
  return (
    <div className='flex items-center gap-1 ml-1 cursor-pointer'>
       
        {
          [...Array(5)].map((star, i) => {
            let ratingValue = i + 1
            return(
                <label key={i}>
                    <input type="radio" name='rating' id='rating' value={ratingValue} className='hidden'/>
                    <FaStar size={15} 
                    onClick={() => setRating(ratingValue)}
                    onMouseEnter={() => setMouseMove(ratingValue)}
                    onMouseLeave={() => setMouseMove(null)}
                    className={ratingValue <= (mouseMove || rating) ? 'fill-yellow-500 cursor-pointer' : 'fill-gray-500 cursor-pointer'}/>
                </label>
            )
          })
        }
        <span>{rating ? `(${rating})` : rating}</span>
    </div>
  )
}

export default Rating