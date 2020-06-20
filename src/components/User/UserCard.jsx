import React from 'react'
import './UserCard.css'

export default class UserCard extends React.Component {
    render() {
        // const userInfo = this.props.userInfo

        return (
            <div className="user-card">
                <div className="user-name">{this.props.userInfo.name}</div>
                <div className="user-birth-year">{this.props.userInfo.birthYear}</div>
            </div>
        )
    }
}