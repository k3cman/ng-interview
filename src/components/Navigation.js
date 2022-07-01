import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div class="flex justify-center mt-10">
        <ul class="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
            <li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg"><Link to="/">Home</Link></li>
            <li class="px-6 py-2 border-b border-gray-200 w-full"><Link to="/s">Senior</Link></li>
            <li class="px-6 py-2 w-full rounded-b-lg"><Link to="/m">Medior</Link></li>
        </ul>
    </div>
  )
}

export default Navigation