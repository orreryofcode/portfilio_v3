function Footer() {
  const date = new Date().getFullYear();

  return (
    <div className='footer__container'>
      <p className='footer__text'>
        Designed and Coded by{" "}
        <span className='about__body--highlight'>Raul Menendez</span>. &copy;{" "}
        {date}
      </p>

      <div className='footer__links'>
        <a
          href='https://github.com/orreryofcode'
          target='_blank'
          rel='noopener'>
          <img src='./img/svg/github-svgrepo-com.svg' alt='Github' />
        </a>
        <a href='mailto:orreryofcode@gmail.com'>
          <img src='./img/svg/mail-svgrepo-com.svg' alt='Email' />
        </a>
      </div>
    </div>
  );
}

export default Footer;
