import Image from "next/image"
import React from "react";

import StatModel from "@/types/StatModel"

interface StatCardProps {
    stat: StatModel;
}

// const contentItems: string[] = [
//     'Price',
//     'Market Cap',
//     'Liquidity',
//     'Circulating Supply',
//     'Amount Burned'
// ];

const StatCard: React.FC<StatCardProps> = (props) => {
    const { stat } = props;

    return (
        <div className="stat-card-container">
            <div className="stat-logo-container">
                <Image
                    src={stat.imgURL}
                    alt={stat.alt}
                    width={stat.width}
                    height={stat.height}
                />
            </div>
            <div className="state-title-container">
                {stat.title}
            </div>
            <div className="stat-content-container">
                <div className="stat-item-container">
                    <div>Price</div>
                    <div>{stat.price}</div>
                </div>
                <hr />
                <div className="stat-item-container">
                    <div>Market Cap</div>
                    <div>{stat.market}</div>
                </div>
                <hr />
                <div className="stat-item-container">
                    <div>Liquidity</div>
                    <div>{stat.liquidity}</div>
                </div>
                <hr />
                <div className="stat-item-container">
                    <div>Circulating Supply</div>
                    <div>{stat.circulating}</div>
                </div>
                <hr />
                <div className="stat-item-container">
                    <div>Amount Burned</div>
                    <div>{stat.amount}</div>
                </div>
            </div>
        </div>
    );
}

export default StatCard;