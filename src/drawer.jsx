import { useState } from "react"

function Drawer() {
    const [showNavigation, setNavigation] = useState(false)
    function openNav() {
        setNavigation(!showNavigation)
    }
    return (
        <div>
            <div className="container">
                <span className="span" onClick={openNav}>&#9776;</span>
                {
                    showNavigation && (

                        <div className="sidenav">
                            <a href="#"><i class="fa-regular fa-clock icon"></i>Recent</a>
                            <a href="#"><i class="fa-regular fa-star icon"></i>Starred</a>
                            <a href="#"><i class="fa-regular fa-trash-can icon"></i> Bin</a>
                            <a href="#"><i class="fa-regular fa-bell icon" ></i>Notification</a>
                            <a href="#"><i class="fa-solid fa-gear icon"></i>Settings</a>
                            <a href="#"><i class="fa-regular fa-circle-question icon"></i>Help & feedback</a>
                        </div>

                    )
                }
            </div>
        </div>
    )
}
export default Drawer