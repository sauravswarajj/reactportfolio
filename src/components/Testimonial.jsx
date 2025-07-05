import React from 'react'
import img0 from "../assets/img0.png"

const Testimonial = () => {
  return (
    <div id='testimonial'>
        <h2>Testimonial</h2>
        <section>
            <TestimonialCard name={"Gaurav"} feedback={"Your Teaching skills are so good."}/>
            <TestimonialCard name={"Yashraj"} feedback={"Wow what a portfolio, doesn't expected this is to be on youtube!."}/>
            <TestimonialCard name={"Shushank Shekhar"} feedback={"Amazing seems like you should the Google CEO."}/>
        </section>
    </div>
  )
}

const TestimonialCard = ({name,feedback})=>(
    <article>
        <img src={img0} alt='User' />
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
)
export default Testimonial