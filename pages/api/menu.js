export const Menu = [
    {
        id: 1,
        link: '/',
        nav: 'Umumiy',
    },
    {
        id: 2,
        link: '/month',
        nav: 'Bu oy',

    },
    {
        id: 3,
        link: '/add',
        nav: 'Qo’shish',
    },
    {
        id: 4,
        link: '/categories',
        nav: 'Turkumlar',
    },
    {
        id: 5,
        link: '/setting',
        nav: 'Sozlamalar',
    },
]

export default function handler(req, res) {
    res.status(200).json(Menu)
}



