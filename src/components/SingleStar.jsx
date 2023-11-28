/* eslint-disable react/prop-types */

export default function SingleStar({ star }) {
  const { featured, url, heading, description } = star;
  return (
    <a className='star' data-feature={featured}>
      <img src={url} alt={heading} className='star__img' />
      <h3 className='star__heading'>{heading}</h3>
      <p className='star__description'>{description}</p>
    </a>
  );
}
