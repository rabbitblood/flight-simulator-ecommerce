import React from 'react'
import testimonials from '@data/testimonials/testimonials.json'
import { TestimonialsSection, ScrollContainer } from './testimonials.style'
import { Col, Container, Row } from '@bootstrap-styled/v4'
import SectionTitle from '@components/ui/section-title'
import { useState, useRef } from 'react'
import { useElementWidth } from '@hooks'
import TestimonialCard from './TestimonialCard'

const breakpoint1 = 550
const breakpoint2 = 800

const Testimonials = () => {
    const scrollContainerRef = useRef(null)
    const elementWidth = useElementWidth(scrollContainerRef)

    const cardCount =
        elementWidth < breakpoint1 ? 1 : elementWidth < breakpoint2 ? 2 : 3

    const cardWidth =
        cardCount === 1
            ? elementWidth
            : cardCount === 2
            ? (elementWidth - 16) / 2
            : (elementWidth - 32) / 3

    const [testimonialIndex, setTestimonialIndex] = useState(0)

    const scrollTo = (index) => {
        scrollContainerRef.current.children[index].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start',
        })
    }

    const scrollToNext = () => {
        const nthLast = testimonials.length - testimonialIndex
        if (nthLast <= cardCount) {
            return
        }
        if (nthLast - cardCount == 1 || elementWidth < breakpoint1) {
            scrollTo(testimonialIndex + 1)
            return
        }
        if (nthLast - cardCount == 2 || elementWidth < breakpoint2) {
            scrollTo(testimonialIndex + 2)
            return
        }
        scrollTo(testimonialIndex + 3)
    }

    const scrollToPrevious = () => {
        if (testimonialIndex == 0) {
            return
        }
        if (testimonialIndex == 1 || elementWidth < breakpoint1) {
            scrollTo(testimonialIndex - 1)
            return
        }
        if (testimonialIndex == 2 || elementWidth < breakpoint2) {
            scrollTo(testimonialIndex - 2)
            return
        }
        scrollTo(testimonialIndex - 3)
    }

    return (
        <TestimonialsSection>
            <Container>
                <Row>
                    <Col xs={12}>
                        <SectionTitle
                            mb={42}
                            align="center"
                            title="Testimonials"
                        />
                    </Col>
                </Row>

                <Row style={{ margin: '0 1rem', position: 'relative' }}>
                    <button
                        className={`scroll-button previous ${
                            testimonialIndex == 0 ? 'disabled' : ''
                        }`}
                        onClick={scrollToPrevious}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                        >
                            <path
                                d="M10 12L6 8L10 4"
                                stroke="#9B9B9B"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </button>
                    <ScrollContainer
                        ref={scrollContainerRef}
                        onScroll={(e) => {
                            const index = Math.round(
                                e.target.scrollLeft / cardWidth
                            )
                            setTestimonialIndex(index)
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard
                                key={index}
                                testimonial={testimonial}
                                cardWidth={cardWidth}
                            />
                        ))}
                    </ScrollContainer>
                    <button
                        className={`scroll-button next ${
                            testimonials.length - testimonialIndex <= cardCount
                                ? 'disabled'
                                : ''
                        }`}
                        onClick={scrollToNext}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                        >
                            <path
                                d="M6 12L10 8L6 4"
                                stroke="#9B9B9B"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </button>
                </Row>
            </Container>
        </TestimonialsSection>
    )
}

export default Testimonials
