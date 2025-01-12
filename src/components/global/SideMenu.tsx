"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

import LogoPic from "@/assets/img/logo.svg";
import LogoTitlePic from "@/assets/img/logo-title.svg";
import HomePic from "@/assets/img/home.svg";
import EarnPic from "@/assets/img/earn.svg";
import NFTPic from "@/assets/img/nft.svg";
import SwapPic from "@/assets/img/swap.svg";
import BridgePic from "@/assets/img/bridge.svg";

import MenuModel from "@/types/MenuModel";
import { log } from "console";

const menuItems: MenuModel[] = [
    {
        title: 'Home',
        imgURL: HomePic,
        alt: 'Home Pic',
        width: 25,
        height: 25,
        id: 0,
        url: '/'
    },
    {
        title: 'Earn',
        imgURL: EarnPic,
        alt: 'Earn Pic',
        width: 30,
        height: 30,
        id: 1,
        url: '/earn'
    },
    {
        title: 'NFTs',
        imgURL: NFTPic,
        alt: 'NFT Pic',
        width: 26,
        height: 28,
        id: 2,
        url: '/nft'
    },
    {
        title: 'Swap',
        imgURL: SwapPic,
        alt: 'Swap Pic',
        width: 27,
        height: 24,
        id: 3,
        url: '/swap'
    },
    {
        title: 'Bridge',
        imgURL: BridgePic,
        alt: 'Bridge Pic',
        width: 30,
        height: 16,
        id: 4,
        url: '/bridge'
    }
];

export default function SideMenu() {
    const [selectedId, setSelectedId] = useState(0);
    const router = useRouter();

    const handleClick = (id: number, url: string) => {
        setSelectedId(id);
        router.push(url);

        console.log(url);
    } 

    return (
        <div className="side-menu-container">
            <div className="side-menu-logo-container">
                <div className="logo-pic">
                    <Image
                        src={LogoPic}
                        alt="Logo Pic"
                        width={70.12}
                        height={68}
                    />
                </div>
                <div className="logo-title">
                    <Image
                        src={LogoTitlePic}
                        alt="Logo Title Pic"
                        width={155.12}
                        height={27.62}
                    />
                </div>
            </div>
            <div className="side-menu-items-container">
                {
                    menuItems.map((item, idx) => {
                        return (
                            <div
                                key={idx}
                                className={`item-home-container ${selectedId === idx ? 'clicked' : ''}`}
                                onClick={() => handleClick(idx, item.url)}
                            >
                                <div className="item-home-pic">
                                    <Image
                                        src={item.imgURL}
                                        alt={item.alt}
                                        width={18}
                                        height={18}
                                    />
                                </div>
                                <div className="item-home-title">
                                    {item.title}
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

