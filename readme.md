# hooks
## Hooks是什么
    1.hooks 可以让你不编写类 也能使用state以及 react特性生命周期函数等
    2.react 提倡使用函数组件，但是函数不能操作state 以及没有react特性生命周期函数等
    类组件 = 函数组件 + hooks
    React Api里面 以use开头的 都是Hooks
## 解决的问题
    1.不用学生命周期，hooks 用全新理念管理组件的运作过程
    2.高阶组件不用学，hooks可以解决高阶组件想解决的问题
    3.redux不再是必须品。
## useState
    // 需求：声名一个count的变量 参数是一个类似于state 以及一个修改state的函数
    const [count,setCount] = useState(10)
    setCount()的参数就是count改变的值
## useEfferct
    在函数组件中执行副操作：数据获取，设置/销毁定时器 和componentDidMount差不多
    但是和生命周期函数还是有不同的
    useEffect(cb,deps)参数回调函数和依赖数组
    可以通过依赖数组控制回调次数
    回调执行：
        1.Dom渲染完，执行一次useEffect的回调
        2.每次更新之后也会执行一次useEffect的回调
        3.每次重新渲染，都会生成新的effect，替换掉之前的
        4.effect更像是渲染结果的一部分--每个effect属于一次特定的渲染
    依赖数组：
        可以通过deps依赖项，来控制回调执行的次数
    基本使用
    1.引入useEffect
### 第一个参数是回调函数
    useEffect(()=>{
        console.log('use Effect');  
    })
    dom渲染时候会调用,每次更新count的时候会调用
### 第二个参数deps 控制回调次数
    就是因为每次渲染都会调用useEffect函数,但是当你更新任何一个变量时都会调用,
    所以当你只需要某个变量变化时候才调用useEffect函数的时候,把那个变量加入到degs[]里面,才会产生依赖.
    完整用法
    useEffect(callback,[count])
    作用:可以减少不必要的计算,优化性能.
### Effect定时器问题
    如果在Effect里定义一个定时器 每次渲染都会调用一次Effect 都会开启一个定时器
    如果想让回调只执行一次,依赖数组写为空数组[]
    useEffect(()=>{
        console.log('依赖项数组为空,所以本段只执行一次!');
        setInterval(()=>{
            console.log('定时器执行');
        },1000)
    },[])
    发送请求同理
### 清除定时器 Effect的返回函数
    Effect 函数里面 return可以写一个函数 
    这个函数会在组件被卸载的时候触发 相当于销毁的生命周期函数
    useEffect(()=>{
        let timer = setInterval(()=>{
            console.log('定时器开启');
        },1000)
    return () => {
        console.log('我被卸载了!');
        clearInterval(timer)
    }
    },[])
## 清除副作用操作
    不需要清除副作用操作:发送请求 接收数据
    需要清除的副作用操作:定时器 延时器
    理解:
        每次副作用执行,都会返回新的销毁函数clear
        clear函数执行机制 
            1.会在下一个副作用逻辑之前执行
            2.组件销毁也会执行clear
    问题:在hooks中,是如何清除需要清除的副作用操作?
    返回销毁函数 
    
## Effect总结 相当于 componentDidMount componentDidUpdate componentwillUnmount 三种周期函数  只是相当于不是等于 销毁函数和componentwillUnmount 是完全不一样的两种概念
    1.dom渲染,更新,执行副作用callback
    2.在特定情况下执行副作用,通过依赖数组控制回调次数
    3.组件销毁会执行return里面的函数
    useEffect(callback,[]) ~~ componentDidMount
    useEffect(callback,[count]) ~~ componentDidUpdate
    useEffect(()=>{

        return()=>{
            卸载函数
        }
    })
    ~~ componentwillUnmount

## useRef 绑定DOM 保持可变变量
    概念:useRef返回一个可变的ref对象,返回的ref对象在组件的整个周期内保持不变 
    用途
        1.绑定DOM节点,或者React元素
    const App = () => {
        调用useRef 返回一个ref对象
        const myRef = useRef(null)
        // const myRef = React.useRef<HTMLDivElement>(null);
        return (
            <div>
                <input ref={ myRef } type="text" />
                <button onClick={()=>{console.log(myRef.current.value);}}>
                    拿到当前input值
                </button>
            </div>
        )
    }
        2.保持可变变量(比如高德地图 的map 可以存在useRef里面)
        使用场景:打开作用域 不用在外部全局声名一个量 避免了造成丢失值的问题
        使用myRef = useRef()
        使用myRef.current来存放变量 然后就可以在全局进行操作了
        比如可以在外部的button来清除组件内部的定时器 并且不用定义全局的time 不会发生缺失值的问题
    注意:在ts中不能直接useRef() 但是useRef(null)不会报错 但是没解决问题 用js可以
# ps
    最好渐进式学习hooks
    node_modules ---------- 依赖包文件
    public ---------- 不参与打包、包含项目静态文件
    	index.html ---------- 静态文件入口
    	manifest.json ---------- 配置 PWA
    	robots.txt ---------- 配置爬虫相关，是否可以爬取项目的某些页面
    src ---------- 源代码、参与打包工具打包的文件夹
    	App.tsx ---------- 描述 App 本身
    	index.tsx ---------- 入口文件、做一些准备工作
    	react-app-env.d.ts ---------- 引入预定义的 typescript 类型（可通过 ctrl + 左键访问）
    	reportWebVitals.ts ---------- 做埋点上报功能
    	setupTests.ts ---------- 配置单元测试
    .gitignore ---------- git 提交时忽略哪些文件
    package.json ---------- 前端项目的入口文件，包括项目基本信息、版本号、依赖、启动服务脚本等
    README.md ---------- 对项目的说明文件，以 Markdown 来编写
    tsconfig.json ---------- 配置 typescript
    yarn.lock ---------- 锁定版本号
## import 获取的组件 默认就是export default 的组件 可以起别名 不影响