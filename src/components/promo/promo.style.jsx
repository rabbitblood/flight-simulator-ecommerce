import styled, { css, devices, themeGet } from '@styled'

export const PromoTitle = styled.h3`
    font-size: 30px;
    line-height: 39px;
    margin-bottom: 16px;
    color: ${themeGet('colors.heading')};
    font-weight: ${themeGet('fontWeights.subHeading')};

    ${devices.xs} {
        font-size: 26px;
        line-height: 26px;
    }
`
export const PromoContent = styled.div`
    align-self: center;
`

export const PromoInfo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    padding: 40px;
    justify-content: flex-start;

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
    //background color black is odd, white is even
    background-color: ${themeGet('colors.white')};
    display: block;
    overflow: hidden;
    position: relative;
    width: 100%;

    img {
        width: 50%;
        transition: ${themeGet('transition')};
    }
`
