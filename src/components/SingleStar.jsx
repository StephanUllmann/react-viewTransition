/* eslint-disable react/prop-types */
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { flushSync } from 'react-dom';

export default function SingleStar({ star }) {
  let location = useLocation();

  const state = location.state ?? star;
  const { id, url, heading, description, featured } = state;
  const to = location.state ? '/' : `/:${id}`;

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (!document.startViewTransition) {
      return navigate(to, { state: star });
    } else {
      return document.startViewTransition(() => {
        flushSync(() => {
          navigate(to, { state: star });
        });
      });
    }
  };

  return (
    <Link
      to={to}
      // state={star}
      className='star'
      data-feature={featured}
      onClick={handleClick}>
      <img
        src={url}
        alt={heading}
        className='star__img'
        style={{ viewTransitionName: `star--${id}` }}
      />
      <h3
        className='star__heading'
        style={{ viewTransitionName: `star__heading--${id}` }}>
        {heading}
      </h3>
      <p
        className='star__description'
        style={{ viewTransitionName: `star__desc--${id}` }}>
        {description}
      </p>
    </Link>
  );
}