import * as React from 'react';
import { useRouter } from 'next/router';
import styles from './SettingPage.module.scss'
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import { Context } from '../../ui/Context/Context';


const SettingPage = () => {
    const router = useRouter();
    const { urlApi, auth_token, setAuth_token } = React.useContext(Context);
    const [errors, setErrors] = React.useState({});
    const [showPicker, setShowPicker] = React.useState(false);
    const [amount, setAmount] = React.useState('');
    const emojis = ['🚕', '🚐', '🚄', '🛩️', "💇", '👕', '👖', '🧦', '👟', '🕶️', '🥩', '🍗', '🍔', '🍞', '🍰', '🍛', '🍱', '🍎', '🍫', '☕', '🍷', '🍹', '🍶', '🧃', '🧸', '🛒', '🏊‍♂️', '🎮', '🎤', '⛸️', '🍿', '🎪', '🏋️', '💍', '🎁', '💳', '📲', '📚', '💊', '🏦', '🍽️', '🦷'];

    React.useEffect(() => {

        if (!auth_token) {
            router.replace('/');
        }
    }, []);

    const [editData, setEditData] = React.useState({
        password: '',
        change: '',
    });

    const [limitData, setLimitData] = React.useState({
        price: ''
    });

    const [selectedEmoji, setSelectedEmoji] = React.useState({
        title: "",
        icon: "",
    });

    const editPassowrd = (e) => {
        setEditData({ ...editData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const handleInputChange = (e) => {
        const inputValue = e.target.value.replace(/\D/g, ''); // Удаляем все нецифровые символы
        const formattedValue = formatCurrency(inputValue);
        setAmount(formattedValue);
    };
 
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-US').format(Number(value));
    };

    const limit = (e) => {
        const amountWithoutCommas = amount.replace(/,/g, '');
        setLimitData({ ...limitData, price: amountWithoutCommas });
    };

    const Emoji = (e) => {
        setSelectedEmoji({ ...selectedEmoji, [e.target.name]: e.target.value });
    };

    const editHandle = async (e) => {
        e.preventDefault();

        const validationErrors = {};

        if (!(editData.password.trim().length >= 8)) {
            validationErrors.password = 'Parol 8 belgidan kam bo\'lmasligi kerak';
        }

        if (!(editData.change.trim().length >= 8)) {
            validationErrors.change = 'Parol 8 belgidan kam bo\'lmasligi kerak';
        }


        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const endpointPost = 'update_password';
        const fullUrl = `${urlApi}/${endpointPost}/`;
        try {
            const response = await fetch(fullUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${auth_token}`,
                },
                body: JSON.stringify({
                    old_password: editData.password,
                    new_password: editData.change,
                }),
            });

            setEditData({
                password: "",
                change: "",
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            } else if (response.ok) {
                router.push('/');
            }

        } catch (error) {
            console.error('Error during POST request:', error);
        }
    };


    const limitHandle = async (e) => {
        e.preventDefault();

        const endpointPost = 'limit';
        const fullUrl = `${urlApi}/${endpointPost}/`;

        try {
            const response = await fetch(fullUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${auth_token}`,
                },
                body: JSON.stringify({
                    limit: limitData.price,
                }),
            });

            setLimitData({
                price: ''
            });

            if (!response.ok) {
                throw new Error(`Сетевой ответ не был успешным. Код состояния: ${response.status}`);
            } else if (response.ok) {
                router.push('/');
            }

        } catch (error) {
            console.error('Error during POST request:', error);
        }
    };


    const togglePicker = () => {
        setShowPicker(!showPicker);
    };

    const handleEmojiClick = (emoji) => {
        setSelectedEmoji({ ...selectedEmoji, icon: emoji });
        togglePicker();
    };

    const iconHandle = async (e) => {
        e.preventDefault();

        const endpointPost = 'category';
        const fullUrl = `${urlApi}/${endpointPost}/`;
        try {
            const response = await fetch(fullUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${auth_token}`,
                },
                body: JSON.stringify({
                    title: selectedEmoji.title,
                    emoji: selectedEmoji.icon,
                }),
            });

            setSelectedEmoji({
                title: "",
                icon: "",
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            } else if (response.ok) {
                router.push('/add');
            }

        } catch (error) {
            console.error('Error during POST request:', error);
        }
    };

    const logOut = async () => {
        const endpointPost = 'logout';
        const fullUrl = `${urlApi}/${endpointPost}/`;

        window.localStorage.removeItem('auth_token');

        setAuth_token("")

        router.push('/');

        try {
            const response = await fetch(fullUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${auth_token}`,
                },
            });
            if (response.ok) {

                window.localStorage.removeItem('auth_token');

                setAuth_token("")

                router.push('/');

            } else if (!response.ok) {
                throw new Error('Network response was not ok');
            }

        } catch (error) {
            console.error('Error during POST request:', error);
        }
    }

    const handleButtonClick = (e) => {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement("span");
        ripples.style.left = x + "px";
        ripples.style.top = y + "px";
        e.target.appendChild(ripples);

        setTimeout(() => {
            ripples.remove();
        }, 1000);

        limit()
    }

    return (
        <section className={styles.settingPage}>
            <MyContainer>
                <div className={styles.settingPage__items}>
                    <div className={styles.settingPage__items__name}>
                        <h1 className={styles.settingPage__items__name__title}>Sozlamalar</h1>
                        <b onClick={logOut} className={styles.settingPage__items__name__add}>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M3 4.25A2.25 2.25 0 0 1 5.25 2h5.5A2.25 2.25 0 0 1 13 4.25v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 0 0 .75-.75v-2a.75.75 0 0 1 1.5 0v2A2.25 2.25 0 0 1 10.75 18h-5.5A2.25 2.25 0 0 1 3 15.75V4.25Z" clipRule="evenodd" />
                                <path fillRule="evenodd" d="M6 10a.75.75 0 0 1 .75-.75h9.546l-1.048-.943a.75.75 0 1 1 1.004-1.114l2.5 2.25a.75.75 0 0 1 0 1.114l-2.5 2.25a.75.75 0 1 1-1.004-1.114l1.048-.943H6.75A.75.75 0 0 1 6 10Z" clipRule="evenodd" />
                            </svg>

                        </b>
                    </div>
                    <h3>Limit belgilash</h3>
                    <form onSubmit={limitHandle} action="#" method="post">
                        <input
                            name="limit"
                            placeholder='Bu oy uchun limitni kiriting'
                            value={amount}
                            onChange={handleInputChange}
                            required
                        />
                        <button onClick={handleButtonClick}>Saqlash</button>
                    </form>
                    <h3>Turkum qo’shish</h3>
                    <form onSubmit={iconHandle} action="#" method="post">
                        <input
                            type="text"
                            name='title'
                            onChange={Emoji}
                            placeholder='Turkum nomi'
                            required
                            value={selectedEmoji ? selectedEmoji.title : ''}
                        />
                        <div className={styles.icon}>
                            <input
                                onClick={togglePicker}
                                type="text"
                                name='icon'
                                onChange={Emoji}
                                placeholder='Icon'
                                readOnly
                                required
                                value={selectedEmoji ? selectedEmoji.icon : ''}
                            />

                            <b onClick={togglePicker}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="40" fill="none" stroke="black" strokeWidth="8" />
                                    <line x1="20" y1="50" x2="80" y2="50" stroke="black" strokeWidth="8" />
                                    <line x1="50" y1="20" x2="50" y2="80" stroke="black" strokeWidth="8" />
                                </svg>
                            </b>
                        </div>
                        {showPicker && (
                            <div className={styles.emoji__picker}>
                                {emojis.map((emoji, index) => (
                                    <b key={index} onClick={() => handleEmojiClick(emoji)}>
                                        {emoji}
                                    </b>
                                ))}
                            </div>
                        )}
                        <button onClick={handleButtonClick}>Saqlash</button>
                    </form>
                    <h3>Kirish kodini o’zgartirish</h3>
                    <form action="#" onSubmit={editHandle} method="post">
                        <input
                            name="password"
                            placeholder='Eski kod'
                            value={editData.password}
                            onChange={editPassowrd}
                            required
                        />
                        {errors.password && <p className={styles.error}>{errors.password}</p>}
                        <input
                            name="change"
                            placeholder='Yangi kod '
                            value={editData.change}
                            onChange={editPassowrd}
                            required
                        />
                        {errors.change && <p className={styles.error}>{errors.change}</p>}
                        <button onClick={handleButtonClick}>Saqlash</button>
                    </form>
                </div>
            </MyContainer>
        </section>
    )
}

export default SettingPage;