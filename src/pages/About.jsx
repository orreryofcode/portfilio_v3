function About() {
  return (
    <div className='about__container'>
      <div className='about__container-flex'>
        {/* <div className='about__img'>
          <img src='./img/jpg/portrait.jpg' alt='Raul Menendez' />
        </div> */}

        <div className='about__bio'>
          <div className='about__heading'>
            <h1>
              Hi, I'm <span className='heading__highlight'>Raul</span>.
            </h1>
          </div>
          <div className='about__body'>
            <p>
              I am a{" "}
              <span className='about__body--highlight'>frontend developer</span>{" "}
              based out of{" "}
              <span className='about__body--highlight'> Los Angeles, CA</span>{" "}
              who enjoys making things for the internet. I enjoy working in{" "}
              <span className='about__body--highlight'>
                technical, analytical and creative
              </span>{" "}
              environments to make something awesome or implement the best
              solution to solve a problem. I specialize in working with
              Javascript but I have been tinkering with other languages and
              tools such as Typescript, Python and NextJS.
            </p>
            <br></br>
            <br></br>
            <p>
              Feel free to check out some of my featured projects or shoot me a
              message if there is something you would like me to help with.
            </p>
          </div>
        </div>
      </div>
      <section className='about__skills'>
        <div className='about__skills--decoration'>
          <span>TOOLS</span>
        </div>
        <img src='./img/svg/html-svgrepo-com.svg' alt='html' />
        <img src='./img/svg/css-svgrepo-com.svg' alt='css' />
        <img src='./img/svg/js-svgrepo-com.svg' alt='javascript' />
        <img src='./img/svg/sass-svgrepo-com.svg' alt='sass' />
        <img src='./img/svg/react-svgrepo-com.svg' alt='react' />
        <img src='./img/svg/node-svgrepo-com.svg' alt='nodejs' />
        <img src='./img/svg/npm-svgrepo-com.svg' alt='npm' />
        <img src='./img/svg/mongo-svgrepo-com.svg' alt='mongodb' />
      </section>
    </div>
  );
}

export default About;
