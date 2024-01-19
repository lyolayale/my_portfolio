export default function About() {
  return (
    <section
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white px-4"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <section className="pb-10">
          <p className="text-5xl font-bold inline border-b-4 border-gray-500 p-2">
            About
          </p>
        </section>
        <p className="text-xl mt-20 leading-9">
          Hello! I'm Eric McKee, a passionate and driven web developer. What
          drives and moves me is creating visually awesome and logically sound
          applications and user friendly web sites. I have extensive experience
          in web development technologies such as JavaScript, HTML, CSS, React,
          Ruby, Rails, and PostgreSQL. And, I also practice pair programming,
          mob programming, agile methodologies, and follow best practices in
          regards to version control workflow.
        </p>
        <br />
        <p className="text-xl leading-9">
          A cool fact about me ... being a developer is not only my career, but
          it's my passion and my hobby! So, my idea of "relaxing" is checking
          out a new technology to play with or, doing some pair programming, or
          just playing around and creating a new and interesting project.
          Sometimes, I just enjoy doing some freestyle programming and reviewing
          some data structures and algorithms. Another words, I love just being
          on the computer and doing something!
        </p>
      </div>
    </section>
  );
}
