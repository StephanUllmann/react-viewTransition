/* eslint-disable react/prop-types */
import { Suspense } from 'react';
import { Await } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import SingleStar from './SingleStar';

export default function SuspendedStar() {
  // console.log(location);
  const externalState = useLoaderData();

  return (
    <Suspense fallback={<h2 className='loading-message'>Loading...</h2>}>
      <Await
        resolve={externalState.data}
        errorElement={
          <h2 className='loading-message'>Error loading Stellar Object</h2>
        }>
        {(data) => {
          return <SingleStar star={data} />;
        }}
      </Await>
    </Suspense>
  );
}
