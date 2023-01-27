export const categories = [
    {
        name: "Nocco Focus",
        desc: "Drycken innehåller koffein och vitaminer. De är kolsyrade och helt fria från socker."
    },
    {
        name: "Nocco Koffeinfri",
        desc: "Drycken innehåller BCAA och är helt fri från koffein. De är icke kolsyrade och fria från socker."
    },
    {
        name: "Nocco PWO",
        desc: "Drycken är berikad med BCAA, koffein, sju vitaminer och är helt utan socker."
    },
    {
        name: "Nocco BCAA",
        desc: "Drycken innehåller BCAA och aminosyror, koffein, vitaminer samt även extrakt av grön te. De är kolsyrade och helt fria från socker."
    }

]

export const noccoCanArray = [
    {
        id: 0,
        category: ["Nocco Focus", "all"],
        img: ["assets/Drinks/RaspberryFocus.png", "assets/Drinks/Cola.png"],
        alt: ["Black Nocco can with raspberry blast flavour", "Black nocco can with Cola flavour"],
        categoryDesc: categories[0].desc,
    },
    {
        id: 1,
        category: ["Koffeinfri", "all"],
        img: ["assets/Drinks/carribien.png", "assets/Drinks/apple.png"],
        alt: ["Green nocco can with carribean/pineapple flavour", "Green nocco can with apple flavour"],
        categoryDesc: categories[1].desc,
    },
    {
        id: 2,
        category: ["PWO", "all"],
        img: ["assets/Drinks/cherry.png","assets/Drinks/blueRaspberry.png"],
        alt: ["Silver nocco can with cherry flavour", "Silver nocco can with blue raspberry flavour"],
        categoryDesc: categories[2].desc,
    },
    {
        name: "Breeze",
        id: 6,
        category: ["BCAA", "all"],
        img: ["assets/Drinks/breez.png","assets/Drinks/tomten.png"],
        alt: ["Lightblue nocco can with juicy breeze flavour","Pink nocco can with a picture of santa and with skumtomte flavour"],
        categoryDesc: categories[3].desc,
    },
]
