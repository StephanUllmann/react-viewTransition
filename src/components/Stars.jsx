// import stars from '../stars.json';
import { useLoaderData } from 'react-router-dom';
import SingleStar from './SingleStar';

export default function Stars() {
  const stars = useLoaderData();
  return (
    <>
      <main className='grid'>
        {stars &&
          stars.length > 0 &&
          stars.map((star) => (
            <SingleStar star={star} key={`star--${star.id}`} />
          ))}
      </main>
      <span
        className='scroll-thingy'
        role='img'
        aria-label='Scroll Thingy Rocket'></span>
    </>
  );
}
