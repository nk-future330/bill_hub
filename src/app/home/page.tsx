import GlobalStatsBG from "@/assets/img/bg-global-stats.svg";
import GlobalStatsPic from "@/assets/img/global-stats.svg";
import PlusechaniStatsPic from "@/assets/img/plusechain-stats.svg";
import GlobalLiquidityPic from "@/assets/img/global-liquidity.svg";

import StatModel from "@/types/StatModel";
import StatCard from "@/components/home/StatCard";

const stats: StatModel[] = [
    {
        bgImgURL: GlobalStatsBG, 
        imgURL: GlobalStatsPic,
        alt: 'Global Stats Pic',
        width: 93,
        height: 93,
        title: 'Global Stats',
        price: '$0.00',
        market: '$0.00',
        liquidity: '$0.00',
        circulating: '12,345',
        amount: '1,234' 
    },
    {
        bgImgURL: GlobalStatsBG, 
        imgURL: PlusechaniStatsPic,
        alt: 'Plusechain Stats Pic',
        width: 145.97,
        height: 80,
        title: 'Plusechain Stats',
        price: '$0.00',
        market: '$0.00',
        liquidity: '$0.00',
        circulating: '12,345',
        amount: '1,234' 
    },
    {
        bgImgURL: GlobalStatsBG, 
        imgURL: GlobalLiquidityPic,
        alt: 'Avalanche Stats Pic',
        width: 143,
        height: 80,
        title: 'Avalanche Stats',
        price: '$0.00',
        market: '$0.00',
        liquidity: '$0.00',
        circulating: '12,345',
        amount: '1,234' 
    }
]

export default function Home() {
    return (
        <div className="home-page-container">
            {
                stats.map((stat, idx) => {
                    return (
                        <StatCard key={idx} stat={stat} />
                    )
                })
            }
        </div>
    );
}