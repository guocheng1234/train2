import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Abouts = [
    {
        description: '勒布朗·詹姆斯（LeBron James），全名：勒布朗·雷蒙·詹姆斯（LeBron Raymone James），1984年12月30日出生于美国俄亥俄州阿克伦，美国职业篮球运动员，司职小前锋，绰号“小皇帝”，效力于NBA洛杉矶湖人队。詹姆斯在2003年NBA选秀中于首轮第1顺位被克利夫兰骑士队选中，在2009年与2010年蝉联NBA常规赛最有价值球员（MVP）。2010年，詹姆斯转会至迈阿密热火队。2012年，詹姆斯得到NBA个人生涯的第3座常规赛MVP，第1个总冠军和总决赛MVP，并代表美国男篮获得了伦敦奥运会金牌，追平了迈克尔·乔丹在1992年所创的纪录。2013年，詹姆斯获得第4个常规赛MVP、第2个NBA总冠军和第2个总决赛MVP，实现两连冠。2014年，詹姆斯回归骑士。2016年，詹姆斯带领骑士逆转战胜卫冕冠军勇士获得队史首个总冠军和个人第3个总决赛MVP。2018年7月10日，詹姆斯正式与湖人签下4年1.53亿美元的合同。',
        icon1: 'icon-Group-',
        icon2: 'icon-22',
        icon3: 'icon-dianhua',
        title1: '福州市闽江学院',
        title2: '244122535@qq.com',
        title3: '15880729336'
    }
]

export default class BikeMap extends React.Component{
    MP(ak) {
        return new Promise(function(resolve, reject) {
        var script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = `http://api.map.baidu.com/api?v=2.0&ak=${ak}&callback=init`;
        document.head.appendChild(script)
        window.init = () => {
            resolve(window.BMap)
        }
        })
    }
 
    componentDidMount(){
        this.MP("PAZGg1jfimrTHCIAsoQc9zfsRbh").then(BMap=>{
            var map = new BMap.Map('allmap');            // 创建Map实例
            map.centerAndZoom("福州",15);                 
            map.enableScrollWheelZoom();                 //启用滚轮放大缩小
        });
    }
        
    render(){
  
        
        //添加地图类型控件
        return(
            <>
    <div className="text-center">
        关于我们
    </div>
    <Container>
    <Row>
        {Abouts.map((item,key) => (<Col sm={12} key={key}>  
        <Row>
            <Col sm={6} style={{height:'500px'}}>
            <div>
            <div id='allmap' style={{width:'100%',height:'450px'}} className="text-center"></div>
            </div>
            </Col>
                            <Col md={6}>
                                    <p>{item.description}</p>
                                <div>
                                    <span className={`iconfont ${item.icon1}`} style={{ fontSize: '24px' }}>{item.title1}</span>
                                </div>
                                <div>
                                    <span className={`iconfont ${item.icon2}`} style={{ fontSize: '24px' }}>{item.title2}</span>
                                </div>
                                <div>
                                    <span className={`iconfont ${item.icon3}`} style={{ fontSize: '24px' }}>{item.title3}</span>
                                </div>
                            </Col>
                            </Row>
                </Col>))}
            </Row>
    </Container>
    </>
        )
    }
}

/* export default () => (
    <>
    <div className="text-center">
        关于我们
    </div>
    <Container>
    <Row>
        {Abouts.map((item,key) => (<Col sm={6} key={key}>
                        <Row className="no-gutters">
                            <Col sm={6}>
                                <img src={item.image} className="img-fluid" alt="" style={{width: '100%',height:'100%',paddingBottom: '16px'}}/>
                            </Col>
                            <Col md={6}>
                                    <p>{item.description}</p>
                                <div>
                                    <span className={`iconfont ${item.icon1}`} style={{ fontSize: '24px' }}>{item.title1}</span>
                                </div>
                                <div>
                                    <span className={`iconfont ${item.icon2}`} style={{ fontSize: '24px' }}>{item.title2}</span>
                                </div>
                                <div>
                                    <span className={`iconfont ${item.icon3}`} style={{ fontSize: '24px' }}>{item.title3}</span>
                                </div>
                            </Col>
                        </Row>
                </Col>))}
            </Row>
    </Container>
    </>
)*/