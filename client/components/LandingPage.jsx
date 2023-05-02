import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    //entire page div
    <div
      className="h-full flex flex-col justify-center bg-black cursor-[url(/images/rocket.png),_pointer]"
      style={{
        backgroundImage: 'url(/images/sunrise.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* //holds all the stuff */}
      <div className="flex flex-col h-3/4 items-center">
        <h1 className=" flex flex-col text-9xl text-white items-center pt-2 font-sans tracking-wider pb-0 mb-0">
          EXPLORE THE SOLAR SYSTEM
          <p className="text-white text-3xl font-sans py-0 mt-0">
            ITS ALMOST LAUNCH TIME - ARE YOU READY?? 3, 2, 1....
          </p>
        </h1>

        <Link to="/solarsystem">
          <button
            className="flex text-white items-center justify-self-end border border-double border-white p-3 px-6 mt-5 cursor-[url(/images/rocket.png),_pointer] "
            type="button"
          >
            BLAST OFF!!!
          </button>
        </Link>
      </div>
    </div>
  )
}

export default LandingPage
