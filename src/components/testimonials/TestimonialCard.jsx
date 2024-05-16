import React from 'react'
import Image from 'next/image'
import stars from './assets/stars.svg'
import { TestimonialCardStyles } from './testimonials.style'

const TestimonialCard = ({ testimonial, cardWidth }) => {
    return (
        <TestimonialCardStyles style={{ width: `${cardWidth}px` }}>
            <Image src={stars} alt="five star" />
            <h3>{testimonial.review_title}</h3>
            <p>{testimonial.review}</p>
            <p className="author">{testimonial.name}</p>
        </TestimonialCardStyles>
    )
}

export default TestimonialCard
