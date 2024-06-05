import Promo from '@components/promo'
import promotions from '@data/promotions'
import { Container, Col, Row } from '@bootstrap'
import { PromotionsWrap } from './promotions.style'

const Promotions = ({ fluid, products, promoData }) => {
    return (
        <PromotionsWrap py={[60, 60, 100]}>
            <Container fluid={fluid}>
                <Row className="">
                    {promoData &&
                        promoData.map((promo, key) => (
                            <Col lg={13} key={key}>
                                <Promo
                                    slug={promo.slug}
                                    align={promo.align}
                                    thumb={promo.thumb}
                                    title={promo.title}
                                    //content={promo.node.description}
                                    swap={key % 2 === 0}
                                />
                            </Col>
                        ))}
                </Row>
            </Container>
        </PromotionsWrap>
    )
}

export default Promotions
