import * as React from 'react';
import styles from './SettingPage.module.scss'
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Context } from '../../ui/Context/Context';


const SettingPage = () => {
    const router = useRouter();
    const { urlApi, auth_token } = React.useContext(Context);
    const [errors, setErrors] = React.useState({});
    const [showPicker, setShowPicker] = React.useState(false);
    const emojis = ['🚕', '🚐', '🚄', '👕', '👖', '🧦', '👟', '🕶️', '🍔', '🍞', '🍰', '🍛', '🍎', '🍫', '☕', '🍷', '🍹', '🍶', '🧃', '🎮', '🎤', '⛸️', '🍿', '🎪', '🏋️', '🛌', '🛫', '🎁', '💳', '📲', '📚','💊'];

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

    const limit = (e) => {
        setLimitData({ ...limitData, price: e.target.value });
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
                router.push('/month');
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
        const endpointPost = 'logout';// edit
        const fullUrl = `${urlApi}/${endpointPost}/`;

        try {
            const response = await fetch(fullUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${auth_token}`,
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            } else if (response.ok) {
                window.localStorage.removeItem('auth_token');
                router.push('/');
            }

        } catch (error) {
            console.error('Error during POST request:', error);
        }
    }

    return (
        <section className={styles.settingPage}>
            <MyContainer>
                <div className={styles.settingPage__items}>
                    <div className={styles.settingPage__items__name}>
                        <h1 className={styles.settingPage__items__name__title}>Sozlamalar</h1>
                        <span onClick={logOut} className={styles.settingPage__items__name__add}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
                                <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
                                    <line x1="10" y1="12" x2="20" y2="12" />
                                    <polyline points="15 7 20 12 15 17" />
                                </g>
                            </svg>
                        </span>
                    </div>
                    <h3>Limit belgilash</h3>
                    <form onSubmit={limitHandle} action="#" method="post">
                        <input
                            name="limit"
                            type="number"
                            placeholder='Bu oy uchun limitni kiriting'
                            value={limitData.price}
                            onChange={limit}
                        />
                        <button>Saqlash</button>
                    </form>
                    <h3>Turkum qo’shish</h3>
                    <form onSubmit={iconHandle} action="#" method="post">
                        <input
                            type="text"
                            name='title'
                            onChange={Emoji}
                            placeholder='Turkum nomi'
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
                                value={selectedEmoji ? selectedEmoji.icon : ''}
                            />

                            <span onClick={togglePicker}>
                                <p>+</p>
                            </span>
                        </div>
                        {showPicker && (
                            <div className={styles.emoji__picker}>
                                {emojis.map((emoji, index) => (
                                    <span key={index} onClick={() => handleEmojiClick(emoji)}>
                                        {emoji}
                                    </span>
                                ))}
                            </div>
                        )}

                        <button>Saqlash</button>
                    </form>
                    <h3>Kirish kodini o’zgartirish</h3>
                    <form action="#" onSubmit={editHandle} method="post">
                        <input
                            name="password"
                            type="number"
                            placeholder='Eski kod'
                            value={editData.password}
                            onChange={editPassowrd}
                        />
                        {errors.password && <p className={styles.error}>{errors.password}</p>}
                        <input
                            name="change"
                            type="number"
                            placeholder='Yangi kod '
                            value={editData.change}
                            onChange={editPassowrd}
                        />
                        {errors.change && <p className={styles.error}>{errors.change}</p>}
                        <button>Saqlash</button>
                    </form>
                </div>
            </MyContainer>
        </section>
    )
}

export default SettingPage;