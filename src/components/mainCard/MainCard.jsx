import React from 'react'
import './MainCard.css'

class MainCard extends React.Component {

    state = {
        itemToShow: {},
        archers: {
            name: 'Archers',
            rarity: 'Common',
            targets: 'Air & Ground',
            hitSpeed: 1200,
            count: 2,
            range: 5,
            speed: 'medium',
            stats: [
                {
                    cardLvl: 1,
                    hitPoints: 119,
                    damage: 42,
                    damagePerSec: 35
                },
                {
                    cardLvl: 2,
                    hitPoints: 130,
                    damage: 46,
                    damagePerSec: 38
                },
                {
                    cardLvl: 3,
                    hitPoints: 143,
                    damage: 50,
                    damagePerSec: 41
                }
            ]
        }
    }

    index = 0;

   getNext = () => {
        const maxLength = this.state.archers.stats.length;
        if (this.index <= maxLength) {
            this.index ++
            this.setState({
                itemToShow: this.state.archers.stats[this.index]
            })
        }
        console.log(this.state.itemToShow)
   }

   getPrev() {

   }

    render() {
        const archerData = this.state.archers;
        const itemToShow = this.state.itemToShow;
        //https://statsroyale.com/card/Archers
        return (
            <div className={'card-wrapper'}>
                <div className={'card-header'}>
                    <div className={'card-img'}>
                        <img src={process.env.PUBLIC_URL + '/images/troops/archer/archers.png'} alt="archers"/>
                    </div>
                    <div className={'card-desc'}>
                        <h3>{archerData.name}</h3>
                        <p>A pair of lightly armored ranged attackers. They'll help you take down ground and air units,
                            but
                            you're on your own with hair coloring advice.
                            Troop, Training Camp
                        </p>
                    </div>
                </div>
                <div className={'card-main-info'}>
                    <ul className={'card-list'}>
                        {/*TODO in component*/}
                        <li>
                            <div className={'main-info-item'}>
                                <div className={'icon-container'}>
                                    <div className={'icon-img-container'}>
                                        <img src={process.env.PUBLIC_URL + '/images/layout/target.png'} alt="targets"/>
                                    </div>
                                    <p>Targets</p>
                                </div>

                                <div className={'main-info-value'}>
                                    <span>{archerData.targets}</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={'main-info-item'}>
                                <div className={'icon-container'}>
                                    <div className={'icon-img-container'}>
                                    <img src={process.env.PUBLIC_URL + '/images/layout/hit-speed.png'} alt="hit-speed"/>
                                    </div>
                                    <p>Hit speed</p>
                                </div>

                                <div className={'main-info-value'}>
                                    <span>{archerData.hitSpeed}</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={'main-info-item'}>
                                <div className={'icon-container'}>
                                    <div className={'icon-img-container'}>
                                    <img src={process.env.PUBLIC_URL + '/images/layout/count.png'} alt="count"/>
                                    </div>
                                    <p>Count</p>
                                </div>

                                <div className={'main-info-value'}>
                                    <span>{archerData.count}</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={'main-info-item'}>
                                <div className={'icon-container'}>
                                    <div className={'icon-img-container'}>
                                    <img src={process.env.PUBLIC_URL + '/images/layout/range.png'} alt="range"/>
                                    </div>
                                    <p>Range</p>
                                </div>

                                <div className={'main-info-value'}>
                                    <span>{archerData.range}</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={'main-info-item'}>
                                <div className={'icon-container'}>
                                    <div className={'icon-img-container'}>
                                    <img src={process.env.PUBLIC_URL + '/images/layout/speed.png'} alt="speed"/>
                                    </div>
                                    <p>Speed</p>
                                </div>

                                <div className={'main-info-value'}>
                                    <span>{archerData.speed}</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className={'stats'} >
                    <h4>Stats</h4>
                    <img src={process.env.PUBLIC_URL + '/images/layout/hitpoints.png'} alt="speed"/> <p>{itemToShow.hitPoints}</p>
                    <button onClick={this.getNext}>getNext</button>
                </div>
            </div>
        )
    }
}

export default MainCard

