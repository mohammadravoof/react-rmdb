import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


// Styles
import { Image } from './Thumb.styles';

const Thumb = ({ image, movieId, clickable }) => (

    <div>
        {clickable ? (
        <Link to={`/${movieId}`}>
        <Image src={image} alt='movie-image'/>
        </Link>
        ) : (
        <Image src={image} alt='movie-image'/>
        ) }

    </div>

);

Thumb.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    clickable: PropTypes.bool,
};

export default Thumb;