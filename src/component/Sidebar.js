import Modal from 'react-modal';
import React, {useState} from "react";
import {GrClose} from "react-icons/gr";

function Sidebar() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function toogleModal() {
        setModalIsOpen(!modalIsOpen)
    }


    return (
        <>
            <aside className="sidebar w-80 min-w-80 border-r-[1px] border-solid border-[#ccc] p-6">
                <div className="logo mb-6 flex">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#"><img className="w-10 h-10 mr-5" src="https://brandcolors.net/assets/img/logo.png" alt=""/></a>
                    <a href="#" className="text-3xl	my-auto">Brand<b>Colors</b></a>
                </div>
                <div className="description text-lg	leading-7	text-[#999] mb-6   ">The biggest collection of
                    official brand color codes around. Curated by @brandcolors and friends.
                </div>
                <nav className="">
                    <ul>
                        <li>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a onClick={toogleModal}
                               className="hover:text-[#0099e5] block font-semibold text-[#333] cursor-pointer">About BrandColors</a>
                        </li>
                    </ul>
                </nav>
            </aside>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={toogleModal}
                className="about-modal "
                overlayClassName="about-modal-overlay flex items-center justify-center w-full  fixed top-0 left-0 h-full"

            >

                <button className="modal-close-btn " onClick={toogleModal}><GrClose className="w-[40px] h-[40px] bg-[#ddd] p-2 cursor-pointer"/></button>
              <h3 className="text-2xl mb-6">About BrandColors</h3>
                <p className="modal-aciklama">BrandColors was created by DesignBombs. The goal was to create a helpful reference for the brand color codes that are needed most often.</p>
                <p className="modal-aciklama">It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot, Tuts+, and over 2 million pageviews. There are now over 600 brands with 1600 colors and the collection is always growing.</p>
            </Modal>

        </>
    )
}

export default Sidebar