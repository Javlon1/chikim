import * as React from 'react';
import Link from 'next/link';
import styles from './AddPage.module.scss';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer';

const AddPage = () => {
    const [data, setdata] = React.useState([
        { emoji: '👕', title: 'Kiyim kechak', price: 250 },
        { emoji: '🚕', title: 'Taxi', price: 100 },
        { emoji: '🍰', title: 'Ovqat uchun', price: 70 },
    ]);
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

    const handleSubmit = (e) => {
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

        console.log({ ...formData, сhiqim: selectedItem, text1: formData.text1, text2: formData.text2 });
    };

    return (
        <section className={styles.addPage}>
            <MyContainer>
                <div className={styles.addPage__items}>
                    <div className={styles.addPage__items__name}>
                        <h2 className={styles.addPage__items__name__title}>Chiqim qo’shish</h2>
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
                            {isOpen && (
                                <ul>
                                    {data.map((item, index) => (
                                        <li key={index} onClick={() => handleItemClick(item)}>
                                            <span>{item.emoji}</span>
                                            <span>{item.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
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
