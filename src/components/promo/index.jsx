import cn from 'classnames'
import Link from 'next/link'
import PropTypes from 'prop-types'
import parse from 'react-html-parser'
import Image from '@components/ui/image'
import { PromoItem, PromoInfo, PromoContent, PromoTitle } from './promo.style'
import {
    backgroundImage,
    display,
    height,
    maxHeight,
    minHeight,
} from 'styled-system'
import Button from '@components/ui/button'

const Promo = ({ title, content, thumb, slug, className, align, swap }) => {
    return (
        <>
            {swap ? (
                <PromoItem
                    className={cn(className)}
                    style={{
                        backgroundColor: 'black',
                    }}
                >
                    <PromoInfo align={align ? align : 'left'}>
                        <PromoContent
                            style={{
                                color: 'white',
                            }}
                        >
                            <PromoTitle
                                style={{
                                    color: 'white',
                                }}
                            >
                                {parse(title)}
                            </PromoTitle>
                            {content && (
                                <p
                                    style={{
                                        color: 'white',
                                    }}
                                >
                                    {content}
                                </p>
                            )}
                            <Link href={slug} passHref>
                                <Button
                                    tag="button"
                                    color="black"
                                    bg="white"
                                    hvrColor="white"
                                    hvrBg="heading"
                                >
                                    Buy Now
                                </Button>
                            </Link>
                        </PromoContent>
                    </PromoInfo>
                    <figure>
                        <Image
                            src={thumb}
                            alt={title}
                            width={0}
                            height={0}
                            layout="responsive"
                            style={{
                                display: 'block',
                                objectFit: 'cover',
                                height: '100%',
                                minHeight: '100%',
                                maxHeight: '100%',
                            }}
                        />
                    </figure>
                </PromoItem>
            ) : (
                <PromoItem className={cn(className)}>
                    <figure>
                        <Image
                            src={thumb}
                            alt={title}
                            width={0}
                            height={0}
                            layout="responsive"
                            style={{
                                objectFit: 'cover',
                                height: '100%',
                                minHeight: '100%',
                                maxHeight: '100%',
                            }}
                        />
                    </figure>
                    <PromoInfo align={align ? align : 'left'}>
                        <PromoContent>
                            <PromoTitle>{parse(title)}</PromoTitle>
                            {content && <p>{content}</p>}
                            <Link href={slug} passHref>
                                <Button
                                    tag="button"
                                    color="white"
                                    bg="black"
                                    hvrColor="black"
                                    hvrBg="light"
                                >
                                    Buy Now
                                </Button>
                            </Link>
                        </PromoContent>
                    </PromoInfo>
                </PromoItem>
            )}
        </>
    )
}

Promo.propTypes = {
    align: PropTypes.string,
    content: PropTypes.string,
    className: PropTypes.string,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumb: PropTypes.string.isRequired,
}

export default Promo
