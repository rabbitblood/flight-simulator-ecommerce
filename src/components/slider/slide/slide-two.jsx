import PropTypes from 'prop-types'
import Button from '@components/ui/button'
import { Col, Container, Row } from '@bootstrap'
import {
    SlideContent,
    SlideItem,
    SlideSubTitle,
    SlideTitle,
    SliderThumb,
} from '@components/slider/slider.style'

const SlideTwo = ({
    subTitle,
    title,
    content,
    thumb,
    buttonText,
    buttonToUrl,
}) => {
    return (
        <SlideItem>
            {thumb && (
                <SliderThumb className="style-2">
                    <img src={thumb} alt={title} />
                </SliderThumb>
            )}

            <Container className="align-self-center">
                <Row className="justify-content-center">
                    <Col md={8} className="m-auto">
                        <SlideContent mode="light" textAlign="center">
                            {subTitle && (
                                <SlideSubTitle>{subTitle}</SlideSubTitle>
                            )}
                            {title && <SlideTitle>{title}</SlideTitle>}
                            {content && <p>{content}</p>}
                            {buttonText && (
                                <Button
                                    tag="a"
                                    href={buttonToUrl ?? '/'}
                                    color="white"
                                    bg="primary"
                                    hvrBg="white"
                                    hvrColor="gray"
                                    className="mt-4 mt-md-5"
                                >
                                    {buttonText}
                                </Button>
                            )}
                        </SlideContent>
                    </Col>
                </Row>
            </Container>
        </SlideItem>
    )
}

SlideTwo.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    thumb: PropTypes.string,
}

export { SlideTwo }
