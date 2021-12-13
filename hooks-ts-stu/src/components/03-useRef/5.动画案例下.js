import React, { useRef,useState,useEffect } from "react";
import './index.css'
import anime from 'animejs'
const App = () => {
    // 床架ref对象
    const myRef = useRef()
    // 声名变量 开关动画
    const [isAnimate1,setAnimate1] = useState(false)
    const [isAnimate2,setAnimate2] = useState(false)
    // 副作用执行动画1
    useEffect(()=>{
        // 根据状态 是否调用动画1
        isAnimate1 && animate01()
    },[isAnimate1])
     // 副作用执行动画2
    useEffect(()=>{
        isAnimate2 && animate02()
    },[isAnimate2])

    function animate01(){
        anime({
            targets:myRef.current,
            translateX:300,
            backgroundColor:'#ff8822',
            borderRadius:['0','50%'],
            complete:() => {
                console.log('第一个动画完成了！');
                // 结束第一个动画
                setAnimate1(false)
                // 开启第二个动画
                setAnimate2(true)
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
                setAnimate2(false)
            }
        })
    }
    function clickHandle(){
        setAnimate1(true)
    }
    return (
        <div onClick={clickHandle} className='ref_container'>
            <div ref={ myRef } className='ref_el'></div>
        </div>
    )
}
export default App