import React from 'react';
import galleryImgs from '../../shared/galleryImgs';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import './masonryImagesGallery.css';

export default function MasonryImagesGallery() {
    return (
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }} >
            <Masonry gutter='1rem'>
                {
                    galleryImgs.map((item, index) => (
                        <img className='masonry-img' src={item} key={index} alt='gallery-img' />
                    ))
                }
            </Masonry>
        </ ResponsiveMasonry>
    )
}
