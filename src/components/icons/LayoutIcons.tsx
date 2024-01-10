import { SVGProps } from 'react'

export const HamburgerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        clipRule='evenodd'
        fillRule='evenodd'
        d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
      />
    </svg>
  )
}

export const SignOutIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill='currentColor'
      width='800px'
      height='800px'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z' />
    </svg>
  )
}

export const DocumentsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      enableBackground='new 0 0 512 512'
      {...props}
    >
      <g>
        <g>
          <path d='m460.2,387.1h-327v-335.3h327v335.3zm-81.4,73.1h-327v-358.3h40.5v305.5c0,11.3 9.1,20.4 20.4,20.4h266.1v32.4h-5.68434e-14zm101.8-449.2h-367.9c-11.3,0-20.4,9.1-20.4,20.4v29.7h-60.9c-11.3,7.10543e-15-20.4,9.1-20.4,20.4v399.1c0,11.3 9.1,20.4 20.4,20.4h367.8c11.3,0 20.4-9.1 20.4-20.4v-52.7h60.9c11.3,0 20.4-9.1 20.4-20.4v-376.1c0.1-11.3-9-20.4-20.3-20.4z' />
          <path d='m209.2,153.7h174.9c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4h-174.9c-11.3,0-20.4,9.1-20.4,20.4 2.84217e-14,11.2 9.1,20.4 20.4,20.4z' />
          <path d='m209.2,239.9h174.9c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4h-174.9c-11.3,0-20.4,9.1-20.4,20.4 2.84217e-14,11.2 9.1,20.4 20.4,20.4z' />
          <path d='m209.2,326.1h174.9c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4h-174.9c-11.3,0-20.4,9.1-20.4,20.4 2.84217e-14,11.2 9.1,20.4 20.4,20.4z' />
        </g>
      </g>
    </svg>
  )
}

export const ArrowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      width='800px'
      height='800px'
      viewBox='0 0 52 52'
      enableBackground='new 0 0 52 52'
      xmlSpace='preserve'
      {...props}
    >
      <path d='M8.3,14h35.4c1,0,1.7,1.3,0.9,2.2L27.3,37.4c-0.6,0.8-1.9,0.8-2.5,0L7.3,16.2C6.6,15.3,7.2,14,8.3,14z' />
    </svg>
  )
}
