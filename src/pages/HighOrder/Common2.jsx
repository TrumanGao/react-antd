import React from 'react'
// 引入高阶组件
import highOrder from './HighOrder'

const Common2 = highOrder('Truman')(props => {
    // 参数props是高阶组件内定义的所有state
    // 第二个参数是组件，这里是一个视图结构
    return (
        <div>我是Common2{JSON.stringify(props)}</div>
    )
})

export default Common2