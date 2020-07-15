import React from 'react'
import { Container, Col, Row, Nav} from 'react-bootstrap'
import logo from '../assets/logo.png'
const menus = [
    {
        name: '首页',
        href: '/'
    },{
        name: '新闻',
        href: '/news'
    },{
        name: '关于我们',
        href: '/about'
    }
]
export default () => (
    <div style={{backgroundColor: 'rgb(0,108,182)'}}>
        <Container>
            <Row className="align-items-center" style={{height:'64px'}}>
                <Col>
                <img src={logo} alt="" style={{height: '32px'}}/>
                豹发力体育
                </Col>
                <Col>
                    <Nav className="justify-content-end">
                        {menus.map((item,key) => <Nav.Item key={key}><Nav.Link href={item.href}>{item.name}</Nav.Link></Nav.Item>)}
                    </Nav>
                </Col>
            </Row>
        </Container>
    </div>
)