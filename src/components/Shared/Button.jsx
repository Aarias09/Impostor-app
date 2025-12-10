import React from 'react'

export default function Button({ children, onClick, className = '', ...props }){
  return (
    <button onClick={onClick} className={`px-4 sm:px-6 py-2 text-sm sm:text-base rounded-xl sm:rounded-2xl shadow-sm transition transform active:scale-95 font-medium ${className}`} {...props}>
      {children}
    </button>
  )
}
