import React from 'react'
import clients from '@data/testimonials/clients.json'
import { ClientsSection, ClientsWrapper, Client } from './testimonials.style'
import SectionTitle from '@components/ui/section-title'
import { Col, Container, Row } from '@bootstrap-styled/v4'
import Image from 'next/image'

const Clients = () => {
    return (
        <ClientsSection>
            <Container>
                <Row>
                    <Col xs={12}>
                        <SectionTitle
                            mb={42}
                            align="center"
                            title="Featured Clients"
                        />
                    </Col>
                </Row>

                <ClientsWrapper>
                    {clients.map((client, index) => (
                        <Client key={index}>
                            <Image
                                src={client.logo}
                                alt={client.name}
                                width={90}
                                height={90}
                            />
                            <p>{client.name}</p>
                        </Client>
                    ))}
                </ClientsWrapper>
            </Container>
        </ClientsSection>
    )
}

export default Clients
