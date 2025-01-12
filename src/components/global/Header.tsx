// import { ConnectButton } from '@rainbow-me/rainbowkit';

import ButtonPic from "@/assets/img/bg-button.svg";

export default function Header() {
    return (
        <div className="header">
            <div className="button-container">  
            </div>
            {/* <ConnectButton.Custom>
                {({
                    account,
                    chain,
                    openAccountModal,
                    openConnectModal,
                    authenticationStatus,
                    mounted,
                }) => {
                    // Note: If your app doesn't use authentication, you
                    // can remove all 'authenticationStatus' checks
                    const ready = mounted && authenticationStatus !== 'loading';
                    const connected =
                        ready &&
                        account &&
                        chain &&
                        (!authenticationStatus ||
                            authenticationStatus === 'authenticated');

                    return (
                        <div
                            {...(!ready && {
                                'aria-hidden': true,
                                'style': {
                                    opacity: 0,
                                    pointerEvents: 'none',
                                    userSelect: 'none',
                                },
                            })}
                        >
                            <button
                                style={{ minWidth: "170px" }}
                                onClick={!connected ? openConnectModal : openAccountModal}
                                type="button"
                            >
                                {!connected
                                    ? "Connect Wallet"
                                    : account.address.slice(0, 6) + "..." + account.address.slice(-5)
                                }
                            </button>
                        </div>
                    );
                }}
            </ConnectButton.Custom> */}
        </div>
    );
}