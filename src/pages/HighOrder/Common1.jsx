import React from 'react'
// 引入高阶组件
import highOrder from './HighOrder'

const Common1 = highOrder()(props => {
    return (
        <div>我是Common1</div>
    )
})

export default Common1