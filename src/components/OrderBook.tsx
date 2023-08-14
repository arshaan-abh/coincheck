"use client"

import Image from "next/image"
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded"
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded"
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded"
import {useEffect, useState} from "react"

type OrderBook = {
    asks: Array<Array<number | string>>
    bids: Array<Array<number | string>>
}

export default function Home() {

    const [data, setData] = useState<OrderBook | null>(null)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("/order_books")
                const jsonData = await response.json()
                jsonData.asks = jsonData.asks.slice(0, 10)
                jsonData.bids = jsonData.bids.slice(0, 10)
                setData(jsonData)
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        }

        fetchData().then(r => {
        })
    }, [])

    return (
        <main>
            <div className="order-book flex flex-col gap-4">
                <div className="card flex gap-2 flex-row items-center">
                    <ArrowBackIosNewRoundedIcon/>
                    <Image src="/btc.svg" alt="..." width={24} height={24}/>
                    <div className="ml-2">BTC</div>
                    <div className="opacity-50">•</div>
                    <div className="">JPY</div>
                    <ArrowDropDownRoundedIcon className="rounded-full bg-white text-black res-dis"/>
                    <TrendingUpRoundedIcon className="text-aqua res-dis"/>
                    <div className="text-aqua res-dis">1.44%</div>
                </div>
                <div className="flex res-dir gap-4">
                    <div className="card w-full flex flex-col gap-2">
                        {data !== null ? <>
                            <div className="flex flex-row justify-between">
                                <div className="w-min opacity-50">Price BTC</div>
                                <div className="w-min text-right opacity-50">Total JPY</div>
                            </div>
                            {data.asks.map((ask: Array<number | string>, index: number) =>
                                <div key={index} className="flex flex-row justify-between red-gradient"
                                     style={{["--value" as any]: `${100 - index * 10}%`}}>
                                    <div className="text-red">{ask[1]}</div>
                                    <div>{ask[0]}</div>
                                </div>
                            )}
                            <div className="my-4 flex flex-col text-right">
                                <div className="text-aqua text-2xl">{data.asks[9][0]}</div>
                                <div className="opacity-50">≈${data.asks[9][0]}</div>
                            </div>

                            {data.bids.map((bid: Array<number | string>, index: number) =>
                                <div key={index} className="flex flex-row justify-between aqua-gradient"
                                     style={{["--value" as any]: `${(index + 1) * 10}%`}}>
                                    <div className="text-aqua">{bid[1]}</div>
                                    <div>{bid[0]}</div>
                                </div>
                            )}</> : <div className="loading">Loading...</div>}
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
