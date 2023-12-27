import general from "../../public/image/Overview.svg";
import month from "../../public/image/calendar.svg";
import add from "../../public/image/add-circle.svg";
import offers from "../../public/image/Offers.svg";
import setting from "../../public/image/Setting.svg";



export const Menu = [
    {
        id: 1,
        link: '/',
        nav: 'Umumiy',
        svg: general,
    },
    {
        id: 2,
        link: '/month',
        nav: 'Bu oy',
        svg: month,

    },
    {
        id: 3,
        link: '/add',
        nav: 'Qo’shish',
        svg: add
    },
    {
        id: 4,
        link: '/categories',
        nav: 'Turkumlar',
        svg: offers,
    },
    {
        id: 5,
        link: '/setting',
        nav: 'Sozlamalar',
        svg: setting
    },
]

export default function handler(req, res) {
    res.status(200).json(Menu)
}



