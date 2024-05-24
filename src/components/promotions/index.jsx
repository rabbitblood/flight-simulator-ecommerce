import Promo from '@components/promo'
import promotions from '@data/promotions'
import { Container, Col, Row } from '@bootstrap'
import { PromotionsWrap } from './promotions.style'

const Promotions = ({ fluid, products }) => {
    const promotionItems = products.filter((product) =>
        product.node.tags.includes('promotion_item')
    )

    return (
        <PromotionsWrap py={[60, 60, 100]}>
            <Container fluid={fluid}>
                <Row className="">
                    {promotionItems.map((promo, key) => (
                        <Col lg={13} key={key}>
                            <Promo
                                slug={'product/' + promo.node.handle}
                                align={'left'}
                                thumb={
                                    promo.node.images.edges[0].node.originalSrc
                                }
                                title={promo.node.title}
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
