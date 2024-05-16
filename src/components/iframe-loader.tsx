'use client'

import { useState } from 'react'

function IframeLoader() {
  const [loading, setLoading] = useState(true)

  return (
    <div>
      {loading && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-70 p-4 rounded-lg flex items-center space-x-2">
          <svg
            className="animate-spin h-6 w-6 text-yellow-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.002 8.002 0 0112 4.472v3.236A4.001 4.001 0 008 12H6v5.291z"
            ></path>
          </svg>
          <p className="text-2xl">Carregando...</p>
        </div>
      )}
      <iframe
        src="https://pt.surveymonkey.com/r/JPQRSND"
        title="Votação Abravidro"
        style={{ height: 'calc(100vh + 80px)', width: '100%' }}
        className=" mt-28 md:mt-28 overflow-hidden"
        height="100vh"
        width="100%"
        onLoad={() => setLoading(false)}
      />
    </div>
  )
}

export default IframeLoader
