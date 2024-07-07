import React from 'react'

const About = () => {
  return (
    <main>
      <section className='container mx-auto flex flex-col justify-center items-center '>
        <h1 className='text-3xl sm:text-3xl md:text-4xl font-bold  '>About <span>Taskly</span></h1>
        <div className="bg-white py-6 px-4 sm:px-6 lg:px-8 rounded-md shadow-md flex flex-col jusitfy-center items-center">
          <img className='mb-4' src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_1536/https%3A%2F%2Fdoist.com%2Fstatic%2Fimages%2Fhome-page%2Fhero-section%2Fhome-illustration_w_2069.jpg" alt="todo image" />
          <p className="p-2 home-p leading-normal text-lg sm:text-xl md:text-2xl md:leading-relaxed text-center font-semibold">
          "Our story is your story. You want to do good work. You're motivated by mission and purpose. And you want your work to make a difference. We want the same thing."
  </p>
  <div>
  <p className="p-2 text-gray-700 leading-normaltext-base sm:text-lg md:text-lg md:leading-relaxed text-justify">
    Welcome to Taskly, your ultimate task management and to-do list app designed to simplify your life and boost your productivity. Taskly offers a user-friendly interface that helps you effortlessly organize your daily tasks and track your progress. Whether you are managing personal errands, work projects, or team collaborations, Taskly provides the tools you need to stay on top of your responsibilities. Enjoy unlimited tasks, basic analytics, and seamless access across mobile and web platforms with our free plan. With Taskly, you'll never miss a deadline or forget an important task again. Join us today and experience the power of effective task management with Taskly!
  </p>
  </div>
</div>
<div className="my-3 sm:my-4 bg-white sm:py-4 px-4 sm:px-6 lg:px-8 rounded-md shadow-md flex flex-col jusitfy-center items-center">
          <h2 className='text-xl sm:text-3xl md:text-4xl font-bold my-3'>Your <span>Mission</span> is our <span>Mission</span> </h2>         
  <div className='grid md:grid-cols-2 jusitfy-center items-center'>
    <div className='grid-span-1'>
    <img className='mb-4 ' src="https://img.freepik.com/free-vector/hand-drawn-flat-design-homepage-illustration_23-2149255390.jpg?w=740&t=st=1720352611~exp=1720353211~hmac=af7ff18806ecd8ef6634f1fe9fc7e3b565df0979bef0329be305d8bd087da75f" alt="todo image" />
    </div>
    <div className='grid-span-1'>
    <p className="p-2 text-gray-700 leading-normal text-base sm:text-lg  md:leading-relaxed text-justify">
    While the challenges of modern life can sometimes overshadow our progress, history shows remarkable advancements. We've significantly reduced global poverty, expanded education access, and improved health outcomes worldwide. Taskly envisions a future where these trends continue, where productivity tools not only streamline daily tasks but also contribute to personal and professional growth. We're committed to enabling our users to navigate complexities effortlessly, fostering a world where productivity fuels progress and success. Join Taskly today and embark on a journey towards greater efficiency and achievement.
  </p>
    </div>
  
  </div>
</div>

      </section>
    </main>
  )
}

export default About