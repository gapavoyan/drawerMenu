import { useState } from "react"

function Drawer() {
    const [showNavigation, setNavigation] = useState(false)
    const [openSetting, setOpenSetting] = useState(false)
    const [openBin, setOpenBin] = useState(false)
    function openNav() {
        setNavigation(!showNavigation)
    }
    function showSetting() {
        setOpenSetting(!openSetting)
    }
    function showBin() {
        setOpenBin(!openBin)
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
                            <a href="#" onClick={showBin}><i class="fa-regular fa-trash-can icon"></i> Bin
                                {
                                    openBin && (
                                        <div>
                                            <a href="#">Clear Cache</a>
                                        </div>
                                    )
                                }
                            </a>
                            <a href="#"><i class="fa-regular fa-bell icon" ></i>Notification</a>
                            <a href="#" onClick={showSetting}><i class="fa-solid fa-gear icon"></i>Settings
                                {
                                    openSetting && (
                                        <div>
                                            <a href="#">Notification settings</a>
                                            <a href="#">Choose theme</a>
                                        </div>

                                    )
                                }
                            </a>
                            <a href="#"><i class="fa-regular fa-circle-question icon"></i>Help & feedback</a>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default Drawer