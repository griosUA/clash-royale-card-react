import React from "react"
import './MainInfoItem.css'

const MainInfoItem = (props) => {
    return (
        <div className={'main-info-item'}>
            <div className={'icon-container'}>
                <div className={'icon-img-container'}>
                    <img src={process.env.PUBLIC_URL + props.mainInfo.image} alt="targets"/>
                </div>
                <p>{props.mainInfo.name}</p>
            </div>

            <div className={'main-info-value'}>
                <span>{props.mainInfo.value}</span>
            </div>
        </div>
    )
}

export default MainInfoItem
