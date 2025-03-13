import React from 'react'

const Logo = ({ w, h }) => {
    return (
        <svg
    width={w}
    height={h}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    
    <rect width="100" height="100" rx="20" fill="#fb923c"/>
    
   
    <path
        d="M30 40H70V75C70 77.5 68 80 65 80H35C32 80 30 77.5 30 75V40Z"
        fill="white"
        stroke="white"
        stroke-width="2"
        stroke-linejoin="round"
    />
    
   
    <path
        d="M40 40V35C40 28 46 22 50 22C54 22 60 28 60 35V40"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
    />

   
    <text
        x="50"
        y="67"
        font-size="28"
        font-family="Arial, sans-serif"
        font-weight="bold"
        text-anchor="middle"
        fill="#fb923c"
    >
        K
    </text>
    
</svg>


    )
}

export default Logo