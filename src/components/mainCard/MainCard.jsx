import React from 'react'
import './MainCard.css'
import MainInfoItem from "./mainInfoItem/MainInfoItem";

class MainCard extends React.Component {

    state = {
        itemToShow: {},
        currentIndex: 0,
        archers: {
            generalInfo: {
                name: 'Archers',
                description: 'A pair of lightly armored ranged attackers. They\'ll help you take down ground and air units, but you\'re on your own with hair coloring advice. Troop, Training Camp',
                image: '/images/troops/archer/archers.png',
                rarity: 'Common',
            },
            staticInfo: {
                targets: {
                    name: 'Targets',
                    image: '/images/layout/target.png',
                    value: ' Air & Ground'
                },
                hitSpeed: {
                    name: 'Hit Speed',
                    image: '/images/layout/hit-speed.png',
                    value: 1200
                },
                count: {
                    name: 'Count',
                    image: '/images/layout/count.png',
                    value: 2
                },
                range: {
                    name: 'Range',
                    image: '/images/layout/range.png',
                    value: 5
                },
                speed: {
                    name: 'Speed',
                    image: '/images/layout/speed.png',
                    value: 'medium'
                }
            },
            stats: [
                {
                    cardLvl: {
                        name: 'Level',
                        image: '/images/layout/level.png',
                        value: 1
                    },
                    hitPoints: {
                        name: 'Hit Points',
                        image: '/images/layout/hitpoints.png',
                        value: 119
                    },
                    damage: {
                        name: 'Damage',
                        image: '/images/layout/damage.png',
                        value: 42
                    },
                    damagePerSec: {
                        name: 'Damage per sec',
                        image: '/images/layout/damage-per-sec.png',
                        value: 35
                    }
                },
                {
                    cardLvl: {
                        name: 'Level',
                        image: '/images/layout/level.png',
                        value: 2
                    },
                    hitPoints: {
                        name: 'Hit Points',
                        image: '/images/layout/hitpoints.png',
                        value: 130
                    },
                    damage: {
                        name: 'Damage',
                        image: '/images/layout/damage.png',
                        value: 46
                    },
                    damagePerSec: {
                        name: 'Damage per sec',
                        image: '/images/layout/damage-per-sec.png',
                        value: 38
                    }
                },
                {
                    cardLvl: {
                        name: 'Level',
                        image: '/images/layout/level.png',
                        value: 3
                    },
                    hitPoints: {
                        name: 'Hit Points',
                        image: '/images/layout/hitpoints.png',
                        value: 143
                    },
                    damage: {
                        name: 'Damage',
                        image: '/images/layout/damage.png',
                        value: 50
                    },
                    damagePerSec: {
                        name: 'Damage per sec',
                        image: '/images/layout/damage-per-sec.png',
                        value: 41
                    }
                },
            ]
        }
    }

    getNext = () => {
        /** change index in state*/
        if (this.state.currentIndex < this.state.archers.stats.length - 1) {
            this.setState(prevState => {
                return {currentIndex: prevState.currentIndex + 1}
            })

            this.setState({
                itemToShow: this.state.archers.stats[this.state.currentIndex]
            })
        }


    }

    getPrev = () => {
        if (this.state.currentIndex > 0) {
            this.setState(prevState => {
                return {currentIndex: prevState.currentIndex - 1}
            })
            this.setState({
                itemToShow: this.state.archers.stats[this.state.currentIndex]
            })
        }
    }

    componentDidMount() {
        /**
         * init first item to show
         */
        this.setState({
            itemToShow: this.state.archers.stats[0]
        })
    }

    render() {
        const archerData = this.state.archers;
        const itemToShow = this.state.archers.stats[this.state.currentIndex];
        const staticInfo = Object.values(archerData.staticInfo).map((rd, i) => {
            return <li key={i}>
                <MainInfoItem mainInfo={rd}/>
            </li>
        });

        const statsInfo = Object.values(itemToShow).map((si, i) => {
            return <li key={i}>
                <MainInfoItem mainInfo={si}/>
            </li>
        });
        return (
            <div className={'card-wrapper'}>
                <div className={'card-header'}>
                    <div className={'card-img'}>
                        <img src={process.env.PUBLIC_URL + archerData.generalInfo.image} alt="archers"/>
                    </div>
                    <div className={'card-desc'}>
                        <h3>{archerData.generalInfo.name}</h3>
                        <p>{archerData.generalInfo.description}</p>
                    </div>
                </div>
                <div className={'card-main-info'}>
                    <ul className={'card-list'}>
                        {staticInfo}
                    </ul>
                </div>

                <div className={'stats'}>
                    <h4>Stats:</h4>

                    <div className={'card-stats-info'}>
                        <ul className={'card-list'}>
                            {statsInfo}
                        </ul>
                    </div>

                    <div className={'btn-container'}>
                        <button onClick={this.getPrev}>Prev</button>
                        <button onClick={this.getNext}>Next</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default MainCard

