// import { data } from 'autoprefixer'
import React from 'react'
// import githubLogo from "../images/github-logo.png"


const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(105, 105, 105, .1)',
  zIndex: 1000
}

export default function ProjectModal ({skills, data, children, open, onClose}) {
  if (!open) return null
  else{
    return(
      <>
      <div style={OVERLAY_STYLES} onClick={onClose} className="cursor-pointer"/>
        <div style={MODAL_STYLES} className="md:w-3/6 md:h-4/6">
            <div className='font-mono font-bold text-black md:h-4/6'>
              <img src= {data.image}  className="md:m-auto bg-black md:h-4/6" alt="project"/>
                <p className='text-4xl p-5'>{data.title}</p>
                <p className='text-lg pt-2 text-left'>{data.description}</p>
                <div className='flex justify-center pt-8'>
                  <a href={data.github} target="_blank" rel="noreferrer">
                    {/* <img src={githubLogo} className="rounded-full pl-8 pr-8 h-10 hover:bg-slate-400" alt='github' /> */}
                    <button className="bg-stone-600 hover:bg-stone-300 text-white font-bold py-2 px-4 rounded-full font-mono ml-10" target="_blank" rel="noreferrer">Github</button>
                  </a>
                  <a href={data.deployment} target="_blank" rel="noreferrer">
                    <button className="w-[180px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full font-mono ml-10" target="_blank" rel="noreferrer">Deployment Link</button>
                  </a>

                </div>
                 <div className='flex flex-wrap items-baseline pt-16'>
                    {skills.map((skill, i) => {
                      return (                     
                        <div className="ml-3 w-min bg-white text-gray-800 font-semibold py-1 px-2 border border-gray-600 rounded shadow text-sm">
                            <p> {skill} </p> 
                        </div>
                        ) 
                      })}
                </div>
          </div>      
        </div>  
      </>
    )
  }
}