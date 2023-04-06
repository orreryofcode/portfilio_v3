function Works({ title, tags, body, img, vercel, github, count }) {
  return (
    <div className='work__container'>
      <figure className='work'>
        <img src={`./img/jpg/${img}.webp`} alt='' className='work__img' />
      </figure>

      <div className='work__details'>
        <h2 className='work__heading'>{title}</h2>
        <div className='work__tag--wrapper'>
          {tags.map((tag, index) => (
            <div className='work__tag' key={index}>
              <p>{tag}</p>
            </div>
          ))}
        </div>
        <p className='work__body'>{body}</p>

        <div className='work__links'>
          <a
            href={vercel}
            className='work__link'
            target='_blank'
            rel='noopener'>
            View Deployment &#8599;
          </a>
          <a
            href={github}
            className='work__link'
            target='_blank'
            rel='noopener'>
            View Repo &#8599;
          </a>
        </div>
      </div>
      <span className='work__num'>{count}</span>
    </div>
  );
}

export default Works;
