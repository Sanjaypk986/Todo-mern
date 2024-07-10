import React from "react";

const About = () => {
  return (
    <main>
      <section className="container mx-auto flex flex-col justify-center items-center ">
        <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold my-2 ">
          About <span>Taskly</span>
        </h1>
        <p className="p-2 home-p leading-normal text-lg sm:text-xl md:text-2xl md:leading-relaxed text-center font-semibold">
          "Our story is your story. You want to do good work. You're motivated
          by mission and purpose. And you want your work to make a difference.
          We want the same thing."
        </p>
        <div className="my-3 about-card sm:my-4 bg-white sm:py-4 px-4 sm:px-6 lg:px-8 rounded-lg shadow-lg flex flex-col justify-center items-center">
          <div className="grid md:grid-cols-2 justify-center items-center p-4 gap-6">
            <div className="md:col-span-1">
              <img
                className="mb-4 w-full rounded-md"
                src="https://img.freepik.com/free-vector/flat-design-business-communication-concept_52683-76243.jpg?t=st=1720371887~exp=1720375487~hmac=80280a25ab9c44ba8e3a55148ba23113341de0eadaec1e69a539a452e4671a48&w=740"
                alt="todo image"
              />
            </div>
            <div className="md:col-span-1 flex flex-col justify-center pb-6">
              <p className="p-1 sm:p-2  leading-relaxed text-base sm:text-lg md:text-xl lg:text-lg text-justify ">
                Welcome to Taskly, your ultimate task management and to-do list
                app designed to simplify your life and boost your productivity.
                Taskly offers a user-friendly interface that helps you
                effortlessly organize your daily tasks and track your progress.
                Whether you are managing personal errands, work projects, or
                team collaborations, Taskly provides the tools you need to stay
                on top of your responsibilities. Enjoy unlimited tasks, basic
                analytics, and seamless access across mobile and web platforms
                with our free plan. With Taskly, you'll never miss a deadline or
                forget an important task again. Join us today and experience the
                power of effective task management with Taskly!
              </p>
            </div>
          </div>
        </div>
        <div className="my-3 about-card sm:my-4 bg-white sm:py-4 px-4 sm:px-6 lg:px-8 rounded-md flex flex-col jusitfy-center items-center">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold my-3">
            Your <span>Mission</span> is our <span>Mission</span>
          </h2>
          <div className="grid md:grid-cols-2 justify-center items-center p-4 gap-6">
            <div className="grid-span-1">
              <img
                className="mb-4 w-full rounded-md "
                src="https://img.freepik.com/free-vector/hand-drawn-gathering-data-business_52683-76246.jpg?t=st=1720371408~exp=1720375008~hmac=65e3de72cb5b8f9935b400af27e53a3bdbd391bca2c5fbde58dc5cd1bea25b85&w=740"
                alt="todo image"
              />
            </div>
            <div className="md:col-span-1 flex flex-col justify-center">
              <p className="p-1 sm:p-2  leading-relaxed text-base sm:text-lg md:text-xl lg:text-lg text-justify">
                While the challenges of modern life can sometimes overshadow our
                progress, history shows remarkable advancements. We've
                significantly reduced global poverty, expanded education access,
                and improved health outcomes worldwide. Taskly envisions a
                future where these trends continue, where productivity tools not
                only streamline daily tasks but also contribute to personal and
                professional growth. We're committed to enabling our users to
                navigate complexities effortlessly, fostering a world where
                productivity fuels progress and success. Join Taskly today and
                embark on a journey towards greater efficiency and achievement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
