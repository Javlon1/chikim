
export const Month = [
    {
        id: 1,
        month: "Yanvar",
    },
    {
        id: 2,
        month: "Fevral",
    },
    {
        id: 3,
        month: "Mart",
    },
    {
        id: 4,
        month: "Aprel",
    },
    {
        id: 5,
        month: "May",
    },
    {
        id: 6,
        month: "Iyun",
    },
    {
        id: 7,
        month: "Iyul",
    },
    {
        id: 8,
        month: "Avgust",
    },
    {
        id: 9,
        month: "Sentabr",
    },
    {
        id: 10,
        month: "Oktabr",
    },
    {
        id: 11,
        month: "Noyabr",
    },
    {
        id: 12,
        month: "Dekabr",
    },
]


export default function handler(req, res) {
    res.status(200).json(Month)
}