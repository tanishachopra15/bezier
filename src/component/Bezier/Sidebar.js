import React from 'react'
import style from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <div className={style.sidebar}>
            <div><img src='../../Images/bezierlogo.png' alt=''></img></div>
            <div className={style.sidebarMenu}>
                <div className={style.sidebarMenuItem}><img src='../../Images/dashboard-logo.png' alt=''></img>Dashboard</div>
                <div className={style.sidebarMenuItem}><img src='../../Images/artists-logo.png' alt=''></img>Artists</div>
                <div className={style.sidebarMenuItem}><img src='../../Images/projects-logo.png' alt=''></img>Projects</div>
                <div className={style.sidebarMenuItem}><img src='../../Images/sales-logo.png' alt=''></img>Sales</div>
            </div>
            <div className={style.userControl}>
                <div className={style.userControlItem}><img src= '../../Images/settings-logo.png' alt=''></img>Settings</div>
                <div className={style.userControlItem}><img src='../../Images/logout.png' alt=''></img>Logout</div>
            </div>
        </div>
    )
}

export default Sidebar