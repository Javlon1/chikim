import React, { useRef, useEffect } from 'react';

const PieChart = ({ total_amount, data }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const width = canvas.width;
        const height = canvas.height;
        const radius = Math.min(width, height) / 2 - 10;
        const lineWidth = 16;

        ctx.clearRect(0, 0, width, height);

        const total = data.reduce((sum, value) => sum + value.total_amount, 0);
        let startAngle = 0;

        data.forEach((value, index) => {
            const percentage = value.total_amount / total;
            const endAngle = startAngle + 2 * Math.PI * percentage;

            ctx.beginPath();
            ctx.arc(width / 2, height / 2, radius, startAngle, endAngle);
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = getRandomColor();
            ctx.stroke();

            startAngle = endAngle;
        });

        // Отображение суммы в центре
        ctx.fillStyle = '#000'; // цвет текста
        ctx.font = '20px Arial'; // стиль шрифта
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(total_amount, width / 2, height / 2);
    }, [data]);

    // Функция для генерации случайного цвета
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    return <canvas ref={canvasRef} width={140} height={140} />;
};

export default PieChart;
