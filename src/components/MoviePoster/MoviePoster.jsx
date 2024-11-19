import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import Image from 'next/image'

import posterNotAvailable from '../../assets/images/poster-not-available.jpg';

const MoviePoster = ({ testId, src, alt }) => {
  const [source, setSource] = useState(src);

  return (
    <Image
      data-testid={testId}
      className='img-fluid'
      src={source}
      alt={alt}
      width={250}
      height={500}
      onError={() => { setSource(posterNotAvailable) }}
    />
  )
}

MoviePoster.propTypes = {
  testId: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default MoviePoster;
