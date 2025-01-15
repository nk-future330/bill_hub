import { ConnectButton } from '@rainbow-me/rainbowkit';

import ButtonPic from "@/assets/img/bg-button.svg";

export default function Header() {
    return (
        <div className="header">
            {/* <div className="button-container">
                
            </div> */}
            <ConnectButton />
        </div >
    );
}