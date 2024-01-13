import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './AddPage.module.scss';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer';
import { Context } from '../../ui/Context/Context';

const AddPage = () => {
    const router = useRouter();
    const { urlApi, auth_token } = React.useContext(Context);
    const [data, setdata] = React.useState([]);

    React.useEffect(() => {

        if (!auth_token) {
            router.replace('/');
        }
    }, []);
    
    const [formData, setFormData] = React.useState({
        сhiqim: '',
        text1: '',
        text2: '',
    });

    const [errors, setErrors] = React.useState({});
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsOpen(false);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const endpointGet = 'category';
    const fullUrl = `${urlApi}/${endpointGet}/`;

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(fullUrl, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Token ${auth_token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`Ошибка: ${response.status}`);
                }

                const data = await response.json();

                if (!data) {
                    throw new Error('Неверный формат данных');
                }

                setdata(data);

            } catch (error) {
                console.error('Ошибка при запросе данных:', error.message);
            }
        };

        fetchData();
    }, [fullUrl]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = {};

        if (!selectedItem) {
            validationErrors.сhiqim = 'Chiqim turkumini tanlang';
        }

        if (!(formData.text1.trim())) {
            validationErrors.text1 = 'Chiqim Summasi kiriting';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const endpointPost = 'expense';
        const postUrl = `${urlApi}/${endpointPost}/`;

        try {
            const response = await fetch(postUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${auth_token}`,
                },
                body: JSON.stringify({
                    category_id: selectedItem.id,
                    amount: formData.text1,
                    description: formData.text2,
                }),
            });

            setSelectedItem(null)
            setFormData({
                сhiqim: '',
                text1: '',
                text2: '',
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            } else {
                router.push('/month');
            }

        } catch (error) {
            console.error('Error during POST request:', error);
        }
    };


    return (
        <section className={styles.addPage}>
            <MyContainer>
                <div className={styles.addPage__items}>
                    <div className={styles.addPage__items__name}>
                        <h1 className={styles.addPage__items__name__title}>Chiqim qo’shish</h1>
                        <span className={styles.addPage__items__name__add}>
                            <Link href={`/add`}>+</Link>
                        </span>
                    </div>
                    <h3>Chiqim qo’shish</h3>
                    <form onSubmit={handleSubmit} action="#" method="post">
                        <div className={styles.dropdown}>
                            <p onClick={toggleDropdown}>
                                <span>{selectedItem ? `${selectedItem.emoji} ${selectedItem.title}` : 'Chiqim turkumi'}</span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.51 15.2001L15.48 13.2301L18.69 10.0201C19.36 9.34005 18.88 8.18005 17.92 8.18005L11.69 8.18005L6.07995 8.18005C5.11995 8.18005 4.63995 9.34005 5.31995 10.0201L10.5 15.2001C11.32 16.0301 12.68 16.0301 13.51 15.2001Z"
                                        fill="#292D32"
                                    />
                                </svg>
                            </p>
                            {
                                isOpen && (
                                    <ul>
                                        {
                                            data.length > 0 ? (

                                                data.map((item, index) => (
                                                    <li key={index} onClick={() => handleItemClick(item)}>
                                                        <span>{item.emoji}</span>
                                                        <span>{item.title}</span>
                                                    </li>
                                                ))

                                            ) : (
                                                <li className={styles.skeleton}></li>
                                            )
                                        }
                                    </ul>
                                )
                            }
                        </div>
                        {errors.сhiqim && <p className={styles.сhiqim}>{errors.сhiqim}</p>}

                        <input
                            name="text1"
                            type="number"
                            placeholder='Summasi'
                            value={formData.text1}
                            onChange={handleChange}
                        />
                        {errors.text1 && <p className={styles.text1}>{errors.text1}</p>}

                        <textarea
                            name="text2"
                            type="text"
                            placeholder='Izoh (to’ldirish shart emas)'
                            value={formData.text2}
                            onChange={handleChange}
                        />
                        <button>Qo’shish</button>
                    </form>
                </div>
            </MyContainer>
        </section>
    );
};

export default AddPage;
