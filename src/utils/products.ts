export type Type = "Portachiavi" | "Borsa" | "Borsa per cosmetici"
export type Model = "Papavero" | "Ornamento ucraino" | "Lovely" | "Basic" |"Tenderness" | "Original" | "Tablet" | "Coquette"

export type Product = {
    id: number
    image: string
    title: string
    description: string
    price: number
    color: string
    type: Type
    model: Model
}

export const productsArray: Product[] = [
    {
        id: 1,
        image: "/images/products/portachiavi/portachiavi_ornament_rosso.webp",
        title: "Portachiavi Ornamento ucraino",
        description: "Tessuto: tessuto resistente, interno in similpelle nel colore della stampa, moschettoni in metallo per chiavi - 6 pz.",
        price: 20,
        type: "Portachiavi",
        model: "Ornamento ucraino",
        color: "Rosso"
    },
    {
        id: 2,
        image: "/images/products/portachiavi/portachiavi_papavero_rosso.webp",
        title: "Portachiavi Papavero",
        description: "Tessuto: tessuto resistente, interno in similpelle nel colore della stampa, moschettoni in metallo per chiavi - 6 pz.",
        price: 20,
        type: "Portachiavi",
        model: "Papavero",
        color: "Rosso"
    },
    {
        id: 3,
        image: "/images/products/cosmetici/lovely_papavero.webp",
        title: "Borsa per cosmetici Lovely Papavero",
        description: "Tessuto: juta decorativa e similpelle (con fodera).",
        price: 40,
        type: "Borsa per cosmetici",
        model: "Lovely",
        color: "Nero"
    },
    {
        id: 4,
        image: "/images/products/cosmetici/basic_ornament.webp",
        title: "Borsa per cosmetici Basic Ornamento ucraino",
        description: "Tessuto: juta decorativa e similpelle (con fodera).",
        price: 40,
        type: "Borsa per cosmetici",
        model: "Basic",
        color: "Rosso"
    },
    {
        id: 5,
        image: "/images/products/borse/borsa_tenderness_papavero.webp",
        title: "Borsa da donna in tessuto Papaveri rossi",
        description: "Tessuto: tessuto denso della borsa (con fodera). ",
        price: 60,
        type: "Borsa",
        model: "Tenderness",
        color: "Rosso"
    },
    {
        id: 6,
        image: "/images/products/borse/borsa_tablet.webp",
        title: "Borsa rotonda Tablet Ragazza con capelli rossi",
        description: "Tessuto: similpelle e tessuto in velluto (con fodera).",
        price: 60,
        type: "Borsa",
        model: "Tablet",
        color: "Blue"
    },
]


export const getProductsObject = (array:Product[]) => array.reduce((object, product)=>({
    ...object,
    [product.id]: product,
}),{})