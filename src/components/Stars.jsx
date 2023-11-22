import stars from '../stars.json';
import SingleStar from './SingleStar';

export default function Stars() {
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
