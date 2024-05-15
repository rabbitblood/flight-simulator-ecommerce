import Link from "next/link";
import cn from "classnames";
import navData from "@/data/nav/index.json";
import PropTypes from "prop-types";
import {IoIosArrowDown} from "react-icons/io";
import {Container, Col, Row} from "@/styled/bootstrap";
import {NavbarWrap, Nav, NavList, SubMenu} from "./desktop-nav.style";

const DesktopNav = ({bg, className}) => {
    return (
        <NavbarWrap bg={bg} className={cn(className)}>
            <Container>
                <Row>
                    <Col>
                        <Nav>
                            <NavList>
                                {navData.map((navItem, index) => (
                                    <li key={index} className={navItem.submenu ? "dropdown" : undefined}>
                                        <Link href={navItem.link}>
                                            <div>
                                                {navItem.text}
                                                {navItem.submenu && <IoIosArrowDown/>}
                                            </div>
                                        </Link>

                                        {navItem.submenu && (
                                            <SubMenu>
                                                {navItem.submenu.map((item) => (
                                                    item.list.map((subItem, index) => (
                                                        <li key={index}>
                                                            <Link href={subItem.link}>{subItem.text}</Link>
                                                        </li>
                                                    ))
                                                ))}
                                            </SubMenu>
                                        )}
                                    </li>
                                ))}
                            </NavList>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </NavbarWrap>
    );
};

DesktopNav.propTypes = {
    bg: PropTypes.string
};


export default DesktopNav;