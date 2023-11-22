import stars from '../stars.json';
import SingleStar from './SingleStar';

export default function Stars() {
  return (
    <main className='grid'>
      {stars &&
        stars.length > 0 &&
        stars.map((star) => (
          <SingleStar star={star} key={`star--${star.id}`} />
        ))}
    </main>
  );
}

{
  /* <div className='star'>
        <img
          src='https://stsci-opo.org/STScI-01HBBMDW8B4A90QZ64RGQJHRV1.png'
          alt='Crab Nebula'
          className='star__img'
        />
        <h3 className='star__heading'>Crab Nebula</h3>
        <p className='star__description'>
          NASA’s James Webb Space Telescope has gazed at the Crab Nebula in the
          search for answers about the supernova remnant’s origins. Webb’s
          NIRCam (Near-Infrared Camera) and MIRI (Mid-Infrared Instrument) have
          revealed new details in infrared light.
        </p>
      </div>
      <div className='star'>
        <img
          src='https://stsci-opo.org/STScI-01H9NWHWKBM3DM6PQQPZDSVY7Y.png'
          alt='HH 211'
          className='star__img'
        />
        <h3 className='star__heading'>HH 211</h3>
        <p className='star__description'>
          Molecules excited by the turbulent conditions, including molecular
          hydrogen, carbon monoxide and silicon monoxide, emit infrared light,
          collected by Webb, that map out the structure of the outflows.
        </p>
      </div>
      <div className='star'>
        <img
          src='https://stsci-opo.org/STScI-01HBVHYACKXBP5Y9R50MAEQYKR.png'
          alt='NGC 346'
          className='star__img'
        />
        <h3 className='star__heading'>NGC 346</h3>
        <p className='star__description'>
          Bright patches and filaments mark areas with abundant numbers of
          protostars. This image includes 7.7-micron light shown in blue, 10
          microns in cyan, 11.3 microns in green, 15 microns in yellow, and 21
          microns in red.
        </p>
      </div>
      <div className='star'>
        <img
          src='https://stsci-opo.org/STScI-01H82G1P61JMNCENZ6S3D6AGHQ.png'
          alt='Ring Nebula'
          className='star__img'
        />
        <h3 className='star__heading'>Ring Nebula</h3>
        <p className='star__description'>
          There are some 20,000 dense globules in the nebula, which are rich in
          molecular hydrogen. In contrast, the inner region shows very hot gas.
          The main shell contains a thin ring of enhanced emission from
          carbon-based molecules.
        </p>
      </div>
      <a href='./pillars.html' className='star' data-feature>
        <img
          src='https://stsci-opo.org/STScI-01GFRYX6CJ1ZTKW4PHAE55BY8P.png'
          alt='Pillars of Creation'
          className='star__img'
        />
        <h3 className='star__heading'>Pillars of Creation</h3>
        <p className='star__description'>
          Many stars are actively forming in these dense blue-gray pillars. When
          knots of gas and dust with sufficient mass form in these regions, they
          begin to collapse under their own gravitational attraction, slowly
          heat up – and eventually form new stars.
        </p>
      </a>
      <div className='star'>
        <img
          src='https://stsci-opo.org/STScI-01GGWCY2S6MMY594JESZYYSVZ2.png'
          alt='L1527 and Protostar'
          className='star__img'
        />
        <h3 className='star__heading'>L1527 and Protostar</h3>
        <p className='star__description'>
          The protostar within the dark cloud within a cloud of material feeding
          its growth. Ejections from the star have cleared out cavities above
          and below it, whose boundaries glow orange and blue in this infrared
          view.
        </p>
      </div>
      <div className='star'>
        <img
          src='https://stsci-opo.org/STScI-01GCVNBND6RJ9360JKJ1G86Q0V.png'
          alt='Neptune Close Up'
          className='star__img'
        />
        <h3 className='star__heading'>Neptune Close Up</h3>
        <p className='star__description'>
          The most prominent features of Neptune’s atmosphere in this image are
          a series of bright patches in the planet’s southern hemisphere that
          represent high-altitude methane-ice clouds.
        </p>
      </div>
      <a
        href='./jupiter.html'
        className='star'
        style={{ viewTransitionName: 'jupiter' }}>
        <img
          src='https://stsci-opo.org/STScI-01HCX10DQPZNBJMBR90A2M8CHY.png'
          alt='Jupiter'
          className='star__img'
        />
        <h3 className='star__heading'>Jupiter</h3>
        <p className='star__description'>
          The numerous bright white "spots" and "streaks" are likely very
          high-altitude cloud tops of condensed convective storms. Auroras,
          appearing in red in this image, extend to higher altitudes above both
          the northern and southern poles of the planet.
        </p>
      </a> */
}
