import React from "react";
import { services } from "../Data";
import { times } from "../Data"

 const Services = () => {
    return(
        <div className="section" id="services">
      <div className="mb-8">
        <h2 className="text-[1.5rem] font-bold ">Requirements</h2>
        <div className="w-14 h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-sm"></div>
      </div>
      <div className="grid sm:grid-cols-2 gap-8">{services.map(service => {
        return(
          <div key={service.id} className="flex gap-4 p-4 hover:bg-slate-300 rounded-lg">
            <div className="text-[#4d7c0f] text-[2rem]">{service.icon}</div>
            <div>
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="opacity-80 mt-4 text-[0.9rem]">
              TEST
            </p>
            </div>
            
          </div>
        )
      })}
      </div>
      <div className="flex">
        <div className="grid sm:grid-cols-2 gap-8">{times.map(time => {
        return(
          <div key={time.id} className="flex gap-4 p-4 hover:bg-slate-300 rounded-lg">
            <div className="text-[#4d7c0f] text-[2rem]">{time.icon}</div>
            <div>
            <h3 className="text-xl font-bold">{time.title}</h3>
            <p className="opacity-80 mt-4 text-[0.9rem]">
              TEST2
            </p>
            </div>
            
          </div>
        )
      })}
      </div>
      

      </div>

      </div>
    )
}

export default Services