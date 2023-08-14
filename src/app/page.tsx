import Image from "next/image"
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded"
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded"
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded"

export default function Home() {
    return (
        <main>
            <div className="order-book flex flex-col gap-4">
                <div className="card flex gap-2 flex-row items-center">
                    <ArrowBackIosNewRoundedIcon/>
                    <Image src="/ethereum.svg" alt="..." width={24} height={24}/>
                    <div className="ml-2">ETH</div>
                    <div className="opacity-50">•</div>
                    <div className="">CAD</div>
                    <ArrowDropDownRoundedIcon className="rounded-full bg-white text-black res-dis"/>
                    <TrendingUpRoundedIcon className="text-aqua res-dis"/>
                    <div className="text-aqua res-dis">1.44%</div>
                </div>
                <div className="flex res-dir gap-4">
                    <div className="card w-full flex flex-col gap-2">
                        <div className="flex flex-row justify-between">
                            <div className="w-min opacity-50">Price CAD</div>
                            <div className="w-min text-right opacity-50">Total ETH</div>
                        </div>
                        <div className="flex flex-row justify-between red-gradient" style={{["--value" as any]: "50%"}}>
                            <div className="text-red">1529.72</div>
                            <div>20.4677553</div>
                        </div>
                        <div className="flex flex-row justify-between red-gradient" style={{["--value" as any]: "50%"}}>
                            <div className="text-red">1529.72</div>
                            <div>20.4677553</div>
                        </div>
                        <div className="flex flex-row justify-between red-gradient" style={{["--value" as any]: "50%"}}>
                            <div className="text-red">1529.72</div>
                            <div>20.4677553</div>
                        </div>
                        <div className="flex flex-row justify-between red-gradient" style={{["--value" as any]: "50%"}}>
                            <div className="text-red">1529.72</div>
                            <div>20.4677553</div>
                        </div>

                        <div className="my-4 flex flex-col text-right">
                            <div className="text-aqua text-2xl">1529.29</div>
                            <div className="opacity-50">≈$1529.29</div>
                        </div>

                        <div className="flex flex-row justify-between aqua-gradient"
                             style={{["--value" as any]: "50%"}}>
                            <div className="text-aqua">1529.72</div>
                            <div>20.4677553</div>
                        </div>
                        <div className="flex flex-row justify-between aqua-gradient"
                             style={{["--value" as any]: "50%"}}>
                            <div className="text-aqua">1529.72</div>
                            <div>20.4677553</div>
                        </div>
                        <div className="flex flex-row justify-between aqua-gradient"
                             style={{["--value" as any]: "50%"}}>
                            <div className="text-aqua">1529.72</div>
                            <div>20.4677553</div>
                        </div>
                        <div className="flex flex-row justify-between aqua-gradient"
                             style={{["--value" as any]: "50%"}}>
                            <div className="text-aqua">1529.72</div>
                            <div>20.4677553</div>
                        </div>
                    </div>
                    <div className="gap-2 w-full flex flex-col res-dis">
                        <div className="card flex gap-2">
                            <div className="grow bg-aqua rounded p-2 text-center">
                                <div className="text-black">BUY</div>
                            </div>
                            <div className="grow rounded p-2 text-center">
                                <div className="opacity-50">SELL</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center grow">
                            <Image src="/under-construction.svg" alt="..." width={128} height={128}/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
