
export const Month = [
    {
        id: 0,
        month: "Yanvar",
    },
    {
        id: 1,
        month: "Fevral",
    },
    {
        id: 2,
        month: "Mart",
    },
    {
        id: 3,
        month: "Aprel",
    },
    {
        id: 4,
        month: "May",
    },
    {
        id: 5,
        month: "Iyun",
    },
    {
        id: 6,
        month: "Iyul",
    },
    {
        id: 7,
        month: "Avgust",
    },
    {
        id: 8,
        month: "Sentabr",
    },
    {
        id: 9,
        month: "Oktabr",
    },
    {
        id: 10,
        month: "Noyabr",
    },
    {
        id: 11,
        month: "Dekabr",
    },
]


export default function handler(req, res) {
    res.status(200).json(Month)
}