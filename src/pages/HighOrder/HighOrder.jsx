import React from 'react'

// 高阶组件
// 1. 本身是函数
// 2. 入参是组件
// 3. 返回值是新组件
const highOrder = (name) => (Common) => {
    return class extends React.Component {
        constructor() {
            super()
            this.state = {
                name: `名字是${name}`,
                age: null,
            }
        }
        render() {
            return (
                <>
                    <h3>Common的公共头部</h3>
                    {/* 传入高阶组件定义的所有state */}
                    {name ? <Common {...this.state} ></Common> : <div>没有传入名字</div>
                    }
                </>
            )
        }
    }
}

export default highOrder