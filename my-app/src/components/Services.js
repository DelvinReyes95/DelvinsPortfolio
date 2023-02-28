import React from "react";
import { services, requirements } from "../Data";

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
            <div className="opacity-80 mt-4 text-[0.9rem]">
            <p>{service.text}</p>
            <br/>
            <p>{service.text2}</p>
            <br/>
            <p>{service.text3}</p>
            <br/>
            <p>{service.text4}</p>
            <br/>
            <p>{service.text5}</p>
            <br/>
            <p>{service.text6}</p>
            <br/>
            <p>{service.text7}</p>
            </div>
            </div>
          </div>
        )

      })}
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 mt-12 gap-4">
        {requirements.map(requirement => {
          return(
            <div className="text-center border border-solid border-grey p-8 rounded-md" key={requirement.id}>
              <div className="flex justify-center mb-4 text-[1.5rem]">{requirement.icon}</div>
              <div className="mb-4 text-xl font-bold">{requirement.text}</div>
              <div className="">{requirement.amount}</div>
              <div className="">{requirement.tab}</div>

            </div>
          )
        })}

      </div>

      </div>
    )
}

export default Services