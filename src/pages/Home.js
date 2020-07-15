import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import banner1 from '../assets/James.jpg'
import banner2 from '../assets/Kobe2.jpg'
import banner3 from '../assets/Wade2.jpg'
import { Container, Row, Col } from 'react-bootstrap'

const banners = [
    banner1,
    banner2,
    banner3
]
const Services = [{
    icon: 'icon-xinxi',
    title: '浏览信息'
}, {
    icon: 'icon-shipin',
    title: '观看视频'
}, {
    icon: 'icon-bisaihuodong',
    title: '查询比赛'
}, {
    icon: 'icon-zixun',
    title: '客服咨询'
}
]
const teams = [
    {
        image: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3484550910,60975915&fm=26&gp=0.jpg',
        member: '蔡国城',
        description: '创始人'
    }, {
        image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1619090066,4019583598&fm=26&gp=0.jpg',
        member: '林允儿',
        description: '美女客服'
    }, {
        image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1442406675,3336806481&fm=26&gp=0.jpg',
        member: '程潇',
        description: '美女客服'
    }, {
        image: 'data:image/jpeg;base64,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',
        member: '詹姆斯',
        description: '超巨代言'
    }
]
export default () => (<div>
    <Carousel showThumbs={false} showStatus={false}>
        {banners.map((url, key) => (<div key={key}>
            <img src={url} alt="" style={{ width: '100%',height: '1080px', objectFit: 'cover'}} />
        </div>))}
    </Carousel>
    <Container>
        <h2 className="text-center">服务范围</h2>
        <Row className="justify-content-between">
            {Services.map((item, key) => <Col key={key} xs={6} sm={3}>
                <div className="bg-primary text-center rounded" style={{ padding: '8px' }}>
                    <span className={`iconfont ${item.icon}`} style={{ fontSize: '96px' }}></span>
                    <h4 className="text-light">{item.title}</h4>
                </div>
            </Col>)}
        </Row>
    </Container>
    <Container>
        <h2 className="text-center">团队介绍</h2>
       <Row style={{ marginTop: '16px', marginBottom: '16px'}}>
        {teams.map((item, key) => <Col xs={6} sm={3} key={key}>
                <div className="bg-dark">
                <img src={item.image} alt="" className="img-fluid" rel="noreferrer nofollow" style={{ width: '100%',height:'300px',paddingTop:'16px',paddingLeft:'16px',paddingRight:'16px' }} />
                <h3 className="text-center text-white">{item.member}</h3>
                <p className="text-center text-white">{item.description}</p>
                <div className="text-center">
                <svg className="icon" aria-hidden="true">
                   <use xlinkHref="#icon-gongzhonghao"></use>
                </svg>
                <span className="text-white">|</span>
                <svg className="icon" aria-hidden="true">
                   <use xlinkHref="#icon-qq"></use>
                </svg>
                <span className="text-white">|</span>
                <svg className="icon" aria-hidden="true">
                   <use xlinkHref="#icon-weibo"></use>
                </svg>
                </div>
                </div>
            </Col>)}
        </Row>
    </Container>
</div>)