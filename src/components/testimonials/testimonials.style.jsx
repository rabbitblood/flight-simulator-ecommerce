import styled from '@styled'

export const ClientsSection = styled.section`
    padding: 3rem 0;
`

export const ClientsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-template-rows: auto auto;
    grid-auto-rows: 0px;
    justify-items: center;
    position: relative;
    overflow: hidden;

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        grid-template-rows: auto auto auto;
    }
`

export const Client = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    width: 180px;
    min-height: 100px;
    background-color: #fff;
    margin: 10px;

    @media (max-width: 768px) {
        width: 120px;
        height: 120px;
        p {
            font-size: 13px;
        }
    }
`

export const TestimonialsSection = styled.section`
    background-color: #dbf4ff;
    padding: 3rem 0;
`

export const ScrollContainer = styled.div`
    overflow-x: scroll;
    display: flex;
    gap: 1rem;
    transition: transform 0.5s;
    scroll-snap-type: x mandatory;
    &::-webkit-scrollbar {
        display: none;
    }
`

export const TestimonialCardStyles = styled.div`
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    scroll-snap-align: start;
    width: 300px;
    background-color: #fff;
    border-radius: 0.5rem;
    padding: 1.25rem 1rem;

    & h3 {
        font-size: 1.25rem;
        margin: 0.5rem 0;
    }

    & p:first-of-type {
        color: #333;
    }

    & .author {
        align-self: flex-end;
        margin-top: 1rem;
    }

    & .author::before {
        content: '-';
        margin-right: 0.5rem;
    }
`
