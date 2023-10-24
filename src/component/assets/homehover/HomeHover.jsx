import   './HomeHover.css'
import imgW1 from './../../../images//women/Shoes-Women-BU-1.png'
import imgW2 from './../../../images/women/Shoes-Women-R-1.png'
import imgM1 from './../../../images/men/shoesMen-W-1.png'
import imgM2 from './../../../images/men/shoesMen-W-2.png'
import imgK1 from './../../../images/kids/Shoes-Kids-BU-1.png'
import imgK2 from './../../../images/kids/Shoes-Kids-R-1.png'
import imgP1 from './../../../images/phone/huawei1.jpg'
import imgP2 from './../../../images/phone/iphone1.jpg'

const HomeHover = () => {
  return (
    <div className='HomeHover-Container'>
        <h1>Featured Products</h1>
        <div className='HomeHover-Content'>
            <a href='/men'>
            <div className='HomeHover-Info'>
                <span className='New'>-20%</span>
                <span className='New1'>new</span>
                <div className='HomeHover-Img'>
                    <img className='Img1' src={imgM1}  />
                    <img className='Img2' src={imgM2}  />
                </div>
                <span>Nike </span>
                <span>$199</span>
            </div>
            </a>
            <a href='/women'>
            <div className='HomeHover-Info'>
                <span className='New'>-17%</span>
                <span className='New1'>new</span>
                <div className='HomeHover-Img'>
                        <img className='Img1' src={imgW1}  />
                        <img className='Img2' src={imgW2}  />
                </div>
                <span>Zara </span>
                <span>$209</span>
            </div>
            </a>
            <a href='/kids'>
            <div className='HomeHover-Info'>
                <span className='New'>-8%</span>
                <span className='New1'>new</span>
                <div className='HomeHover-Img'>
                    <img className='Img1' src={imgK1}  />
                    <img className='Img2' src={imgK2}  />
                </div>
                <span>Adidas</span>
                <span>$139</span>
            </div>
            </a>
            <a href='/phone'>
            <div className='HomeHover-Info'>
                <span className='New'>-12%</span>
                <span className='New1'>new</span>
                <div className='HomeHover-Img'>
                    <img className='Img1' src={imgP1}  />
                    <img className='Img2' src={imgP2}  />
                </div>
                <span>Sumsung</span>
                <span>$1799</span>
            </div>
            </a>
        </div>
    </div>
  )
}

export default HomeHover