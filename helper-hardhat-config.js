const networkConfig = {
    31337: {
        name: "localhost",
        lpOracle: "0x831753dd7087cac61ab5644b308642cc1c33dc13",
        weth: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
        tokenNames: ["Maker", "Uniswap", "Chainlink", "Aave", "Compound"],
        tokenSymb: ["mkr", "uni", "link", "aave", "comp"],
        tokenAdd: [
            "0x6f7C932e7684666C9fd1d44527765433e01fF61d",
            "0xb33EaAd8d922B1083446DC23f610c2567fB5180f",
            "0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39",
            "0xD6DF932A45C0f255f85145f286eA0b292B21C90B",
            "0x8505b9d2254A7Ae468c0E9dd10Ccea3A837aef5c",
        ],
    },
    137: {
        name: "matic",
        token: "Wrapped Matic",
        symbol: "wMATIC",
        address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
        lpOracle: "0x831753dd7087cac61ab5644b308642cc1c33dc13",
        weth: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
        tokenNames: ["Maker", "Uniswap", "ChainLink Token", "Aave", "Compound"],
        tokenSymb: ["MKR", "UNI", "LINK", "AAVE", "COMP"],
        tokenAdd: [
            "0x6f7C932e7684666C9fd1d44527765433e01fF61d",
            "0xb33EaAd8d922B1083446DC23f610c2567fB5180f",
            "0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39",
            "0xD6DF932A45C0f255f85145f286eA0b292B21C90B",
            "0x8505b9d2254A7Ae468c0E9dd10Ccea3A837aef5c",
        ],
        denorms: [2000, 2000, 2000, 2000, 2000],
        vault: "0x2053B29Bb5B62D498F541fBC13bEfBB36BF52659",
    },
    42220: {
        name: "celo",
        lpOracle: "0x1c8e0f6e5619c50aafc9214cbbcfc5d2fb3bf6c1",
        token: "Wrapped Celo",
        symbol: "wCELO",
        address: "0x3Ad443d769A07f287806874F8E5405cE3Ac902b9",
        weth: "0x122013fd7df1c6f636a5bb8f03108e876548b455",
        tokenNames: [
            "Ubeswap",
            "Celo native asset",
            "SushiToken",
            "Wrapped Bitcoin",
            "USD Coin",
        ],
        tokenSymb: ["UBE", "CELO", "SUSHI", "BTC", "USDC"],
        tokenAdd: [
            "0x00Be915B9dCf56a3CBE739D9B9c202ca692409EC",
            "0x471EcE3750Da237f93B8E339c536989b8978a438",
            "0x29dFce9c22003A4999930382Fd00f9Fd6133Acd1",
            "0xD629eb00dEced2a080B7EC630eF6aC117e614f1b",
            "0xef4229c8c3250C675F21BCefa42f58EfbfF6002a",
        ],
        denorms: [2000, 2000, 2000, 2000, 2000],
        vault: "0x89E2539ADBf0c366f2f076f1B53b06F61266c10E",
    },
    /* 245022926: {
        name: "neonlabs",
        lpOracle:,
        token: "Wrapped Neon",
        symbol: "WNEON",
        address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
        lpOracle: "0x831753dd7087cac61ab5644b308642cc1c33dc13",
        weth: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
        tokenNames: ["Wrapped BTC (Wormhole)", "Balancer (Wormhole)", "Curve DAO Token (Wormhole) Token", "Wrapped Aave", "Wrapped SUSHI (Sollet)"],
        tokenSymb: ["wWBTC", "wBAL", "wCRV", "AAVE", "SUSHI"],
        tokenAdd: [
            "0x6fbf8f06ebce724272813327255937e7d1e72298",
            "0xc60911b5577f10f582914205d61c64622a6924d8",
            "0xd3d383799d3a36b2279e7741b80ec3bdabae4b80",
            "0x9e7c05e787bac79730eca196cfab2b1b53f2ff47",
            "0xb3fd58eda12a6e5577a962aaaa3b15037e756eb4",
        ],
        denorms: [2000, 2000, 2000, 2000, 2000],
        vault: "0x89E2539ADBf0c366f2f076f1B53b06F61266c10E",
    }, */
}

const developmentChains = ["hardhat", "localhost"]

module.exports = {
    networkConfig,
    developmentChains,
}
