import React, { useRef } from "react";
import './index.css'
import anime from 'animejs'
const App = () => {
    const myRef = useRef()
    function animate01(){
        anime({
            targets:myRef.current,
            translateX:300,
            backgroundColor:'#ff8822',
            borderRadius:['0','50%'],
            complete:() => {
                console.log('第一个动画完成了！');
                animate02()
            }
        })
    }
    function animate02(){
        anime({
            targets:myRef.current,
            translateX:0,
            backgroundColor:'red',
            borderRadius:['50%','0'],
            complete:() => {
                console.log('第二个动画完成了！');
            }
        })
    }
    function clickHandle(){
        animate01()
    }
    return (
        <div onClick={clickHandle} className='ref_container'>
            <div ref={ myRef } className='ref_el'></div>
        </div>
    )
}
export default App