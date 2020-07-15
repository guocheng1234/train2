import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import qrcode from '../assets/qrcode.png'

const infos = [
    {
        icon: 'icon-Group-',
        title: '福州市闽江学院'
    },{
        icon: 'icon-22',
        title: '244122535@qq.com'
    },{
        icon: 'icon-dianhua',
        title: '15880729336'
    }
]
export default (props) => (
    <div style={{ minHeight: '300px',paddingTop: '16px',backgroundColor: 'rgb(0,108,182)' }}>
        <Container>
            <Row>
                {infos.map((item, key) =>
                    <Col xs={6} sm={6} md={3} key={key}>
                        <div className="text-center">
                            <div>
                                <span className={`iconfont ${item.icon}`} style={{ fontSize: '96px' }}></span>
                            </div>
                            <h3>{item.title}</h3>
                        </div>
                    </Col>)}
                    <Col xs={6} sm={6} md={3}>
                        <img src={qrcode} alt="" className="img-fluid" />
                    </Col>
            </Row>
            <hr></hr>
            <div className="text-center">版权所有 &copy; 蔡国城</div>
        </Container>
    </div>
)