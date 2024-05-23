import styled, { css, devices, themeGet } from '@styled'

export const PromoTitle = styled.h3`
    font-size: 30px;
    line-height: 39px;
    margin-bottom: 16px;
    color: ${themeGet('colors.heading')};
    font-weight: ${themeGet('fontWeights.subHeading')};
    text-overflow: ellipsis;
    overflow: hidden;

    ${devices.xs} {
        font-size: 26px;
        line-height: 26px;
    }
`
export const PromoContent = styled.div`
    align-self: center;
    text-overflow: ellipsis;
    overflow: hidden;
`

export const PromoInfo = styled.div`
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    max-height: 100%;
    padding: 40px;
    justify-content: flex-start;
    text-overflow: ellipsis;

    ${devices.xs} {
        padding: 20px;
    }

    ${(props) =>
        props.align === 'right' &&
        css`
            justify-content: flex-end;
        `}

    ${(props) =>
        props.align === 'center' &&
        css`
            justify-content: center;
            text-align: center;
        `}
`

export const PromoItem = styled.a`
    background-color: ${themeGet('colors.white')};
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
    position: relative;
    width: 100%;

    img {
        width: 100%;
        transition: ${themeGet('transition')};
    }
`
