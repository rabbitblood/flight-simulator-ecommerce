import Promo from '@components/promo'
import promotions from '@data/promotions'
import { Container, Col, Row } from '@bootstrap'
import { PromotionsWrap } from './promotions.style'

const promodata = [
    {
        id: 2,
        title: 'Office Chair  <br> For Best Offer',
        content: 'Great Discounts Here',
        thumb: '/images/banner/2.jpg',
        slug: '/shop',
        align: 'left',
    },
]

const Promotions = ({ fluid, products }) => {
    const top4 = products.slice(0, 4)
    console.log(top4)
    return (
        <PromotionsWrap py={[60, 60, 100]}>
            <Container fluid={fluid}>
                <Row className="">
                    {top4.map((promo, key) => (
                        <Col lg={13} key={key}>
                            <Promo
                                slug={''}
                                align={'left'}
                                thumb={
                                    promo.node.images.edges[0].node.originalSrc
                                }
                                title={promo.node.title}
                                content={''}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </PromotionsWrap>
    )
}

export default Promotions
