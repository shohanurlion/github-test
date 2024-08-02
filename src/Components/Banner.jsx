import React from 'react'
import banner from '../assets/banner.png'

const Banner = () => {
  return (
    <>
    <div className="">
        <img className='w-full' src={banner} alt="" />
        <div className="text-yellow-950">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nesciunt ducimus nemo laboriosam optio odio sapiente nam, laborum quos eum!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos impedit temporibus pariatur saepe, vel molestias, illo ipsam, reiciendis ad dolore iusto quo culpa voluptate ipsa ullam labore distinctio esse rerum!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda molestiae accusamus rem, possimus odio commodi eveniet, nobis consequuntur expedita deserunt laboriosam eum itaque sapiente quisquam eaque? Aperiam asperiores odit voluptatum?
        </div>
    </div>
    </>
  )
}

export default Banner