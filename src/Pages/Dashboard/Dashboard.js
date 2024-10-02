import React from 'react'
import Sidebar from '../../component/Bezier/Sidebar'
import styles from './Dashboard.module.css'
// import upArrow from '../../Images/arrow-up.png'
// import downArrow from '../../Images/arrow-down.png'
// import penny from '../../Images/pennywise.png'

const Dashboard = () => {
    const artists = [{
        image: '../../Images/bluenose.png',
        name: 'Bluenose',
        status: 'Verified',
        ratings: '40% ↑ 4%',
        projectsSold: '400',
        highestSale: '$400,000',
    }, {
        image: '../../Images/pennywise.png',
        name: 'Pennywise',
        status: 'Pending',
        ratings: '57%  8%',
        projectsSold: '200',
        highestSale: '$400,000',
    },
    {
        image: '../../Images/flotsam.png',
        name: 'Flotsam',
        status: 'Verified',
        ratings: '89% ↑19%',
        projectsSold: '400',
        highestSale: '$1,400,000',
    },
    {
        image: '../../Images/Gregautsch.png',
        name: 'Gregautsch',
        status: 'Unverified',
        ratings: 'No ratings available',
        projectsSold: '0',
        highestSale: '$0',
    },
    {
        image: '../../Images/ElPistolero.png',
        name: 'ElPistolero',
        status: 'Verified',
        ratings: '50% 6%',
        projectsSold: '30',
        highestSale: '$25,000',
    },
    {
        image: '../../Images/siuuuu.png',
        name: 'Siuuuuu',
        status: 'Pending',
        ratings: '64% ↑7%',
        projectsSold: '400',
        highestSale: '$400,000',
    },

    ]

    const sellingArtists = [{
        image: '../../Images/flotsam.png',
        name: 'Flotsam',
        sale: '40k+ sales',
        revenue: '$1.4m revenue'
    },
    {
        image: '../../Images/siuuuu.png',
        name: 'Siuuuuu',
        sale: '40k+ sales',
        revenue: '$1.4m revenue'
    },
    {
        image: '../../Images/bluenose.png',
        name: 'Bluenose',
        sale: '40k+ sales',
        revenue: '$1.4m revenue'
    },
    ]
    const sellingProjects = [{
        image: '../../Images/flotsam-project.png',
        name: 'Flotsam',
        sale: '40k+ sales',
        revenue: '$1.4m revenue'
    },
    {
        image: '../../Images/astrom-project.png',
        name: 'Astrom',
        sale: '40k+ sales',
        revenue: '$1.4m revenue'
    },
    {
        image: '../../Images/moon-project.png',
        name: '$Moon',
        sale: '40k+ sales',
        revenue: '$1.4m revenue'
    },
    ]
    return (
        <div className={styles.dashboard}>
            <div><Sidebar /></div>
            <div className={styles.dashboardSection}>
                <div className={styles.dashboardSectionHead}>
                    <div className={styles.searchInput}>
                        <img src='../../Images/search-logo.png' alt='' />
                        <input type='text' placeholder='Search artists , project' />
                    </div>
                    <div className={styles.profile}>
                        <div className={styles.profileWrapper}>
                            <img src='../../Images/Ellipse 1.png' alt=''></img>
                            <div>
                                <div className={styles.profileDetails}>Karim Benzema</div>
                                <div className={styles.profileDetails}>Admin</div>
                            </div>
                        </div>
                        <img src='../../Images/bell-icon.png' alt='' />
                    </div>
                </div>
                <div className={styles.dashboardContent}>
                    <div>
                        <div className={styles.records}>
                            <div>In the last 30 days,</div>
                            <div className={styles.imageBackground}>
                                <div className={styles.pastStats}>
                                    <div className={styles.pastStatsTextBox} >
                                        <span className={styles.imageText}>
                                            30, 0000
                                        </span>
                                        <span className={styles.imageText}>
                                            Art sales
                                        </span>
                                    </div>
                                    <div>
                                        <img className={styles.pastBackgroundImage} src='../../Images/past-backgroud.png' alt='Past background' />
                                    </div>
                                </div>
                                <div className={styles.pastStats}>
                                    <div className={styles.pastStatsTextBox} >
                                        <span className={styles.imageText}>
                                            250
                                        </span>
                                        <span className={styles.imageText}>
                                            New artists
                                        </span>
                                    </div>
                                    <div>
                                        <img className={styles.pastBackgroundImage} src='../../Images/past-backgroud.png' alt='Past background' />
                                    </div>
                                </div>
                                <div className={styles.pastStats}>
                                    <div className={styles.pastStatsTextBox} >
                                        <span className={styles.imageText}>
                                            $400,000
                                        </span>
                                        <span className={styles.imageText}>
                                            Revenue generated
                                        </span>
                                    </div>
                                    <div>
                                        <img className={styles.pastBackgroundImage} src='../../Images/past-backgroud.png' alt='Past background' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.allArtists}>
                            <div className={styles.allArtistsText}>
                                <div className={styles.allArtistsText}>All artists</div>
                                <div className={styles.allArtistsText}>Monitor artist sales, reviews, etc.</div>
                            </div>
                            <div className={styles.artistsSearch}>
                                <div className={styles.userInput}>
                                    <img src='../../Images/search-logo.png' alt='' className={styles.searchIcon} />
                                    <input type='text' placeholder='Search artist' />
                                </div>
                                <button className={styles.filterBtn}><img src='../../Images/filter-search.png' alt='' />Filter</button>
                            </div>
                        </div>
                        <div className={styles.allArtistsTable}>
                            <div className={styles.allArtistsTableContent}>
                                <div className={styles.tableHeading}>
                                    <div>Artist</div>
                                    <div>Status</div>
                                    <div>Ratings</div>
                                    <div>Projects sold</div>
                                    <div>Highest sale</div>
                                </div>
                                <div className={styles.tableDetails}>
                                    {
                                        artists.map((item, index) => {
                                            return (
                                                <div key={index} className={styles.tableContentWrapper}>
                                                    <div className={styles.tableContent}>
                                                        <div className={styles.allArtistsProfile}>
                                                            <img src={item.image} alt='' />
                                                            <div>
                                                                {item.name}
                                                            </div>
                                                        </div>
                                                        <div className={styles.allArtistsStatus}>
                                                            {item.status}
                                                        </div>
                                                        <div className={styles.allArtistsRatings}>
                                                            {item.ratings}
                                                        </div>
                                                        <div className={styles.allArtistsProject}>
                                                            {item.projectsSold}
                                                        </div>
                                                        <div className={styles.allArtistsSale}>
                                                            {item.highestSale}
                                                        </div>
                                                    </div>
                                                    <div className={styles.allArtistsBorder}></div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className={styles.pageTravel}>
                                    <div className={styles.previousPage}>Previous page</div>
                                    <div className={styles.pageTravelNo}>
                                        <div className={styles.pageNo}>1</div>
                                        <div className={styles.pageNo}>2</div>
                                        <div className={styles.pageNo}>3</div>
                                        <div className={styles.pageNo}>4</div>
                                        <div className={styles.pageNo}>5</div>
                                        <div className={styles.pageNo}>6</div>
                                        <div className={styles.pageNo}>7</div>
                                    </div>
                                    <div className={styles.nextPage}>Next page</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bestSellingStats}>
                        <div className={styles.bestSellingContainer}>
                            <div className={styles.bestSellingItemsHeading}>
                                Best-Selling artists
                            </div>
                            <div className={styles.bestSellingItems}>
                                {sellingArtists.map((item, index) => {
                                    return (
                                        <div key={index} className={styles.bestSellingDetails}>
                                            <div className={styles.bestSellingProfile}>
                                                <img src={item.image} alt='' />
                                                <div >{item.name}</div>
                                            </div>
                                            <div className={styles.sellingDetails}>{item.sale}</div>
                                            <div className={styles.sellingDetails}>{item.revenue}</div>
                                        </div>
                                    )
                                })}
                                <button className={styles.viewBtn}>View all artists</button>
                            </div>
                        </div>
                        <div className={styles.bestSellingContainer}>
                            <div className={styles.bestSellingItemsHeading}>
                                Best-Selling projects
                            </div>
                            <div className={styles.bestSellingItems}>

                                {sellingProjects.map((item, index) => {
                                    return (
                                        <div key={index} className={styles.bestSellingDetails}>
                                            <div className={styles.bestSellingProfile}>
                                                <img src={item.image} alt='' />
                                                <div >{item.name}</div>
                                            </div>
                                            <div className={styles.sellingDetails}>{item.sale}</div>
                                            <div className={styles.sellingDetails}>{item.revenue}</div>
                                        </div>
                                    )
                                })}
                            </div>
                            <button className={styles.viewBtn}>View all projects</button>
                        </div>
                        <div className={styles.dateTime}>
                            <div className={styles.time}>
                                <button>10</button>:<button>34</button>
                                <button>PM</button>
                            </div>
                            <div className={styles.date}>
                                11/05/2022
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard