import { useParams } from 'react-router-dom';
import s from './Product.module.css';
import React, { useState } from 'react';
import { OrderFormModal } from './Modalka';

const products = [
    {
        id: 1,
        title: 'Обои 1',
        description: 'Прежде всего, новая модель организационной деятельности говорит о возможностях системы обучения кадров, соответствующей насущным потребностям. Таким образом, реализация намеченных плановых заданий предполагает независимые способы реализации кластеризации усилий. Лишь явные признаки победы институционализации формируют глобальную экономическую сеть и при этом — призваны к ответу. Предварительные выводы неутешительны: синтетическое тестирование требует от нас анализа позиций, занимаемых участниками в отношении поставленных задач. Предварительные выводы неутешительны: высококачественный прототип будущего проекта обеспечивает широкому кругу (специалистов) участие в формировании благоприятных перспектив. Как уже неоднократно упомянуто, непосредственные участники технического прогресса обнародованы.',
        price: 400,
        image: 'https://mondeco.ru/4364-large_default/besshovnye-oboi-zhuravli-art-w010-mondeco.jpg',
        quantity: 0
    },

    {
        id: 2,
        title: 'Обои 2',
        description: 'Прежде всего, новая модель организационной деятельности говорит о возможностях системы обучения кадров, соответствующей насущным потребностям. Таким образом, реализация намеченных плановых заданий предполагает независимые способы реализации кластеризации усилий. Лишь явные признаки победы институционализации формируют глобальную экономическую сеть и при этом — призваны к ответу. Предварительные выводы неутешительны: синтетическое тестирование требует от нас анализа позиций, занимаемых участниками в отношении поставленных задач. Предварительные выводы неутешительны: высококачественный прототип будущего проекта обеспечивает широкому кругу (специалистов) участие в формировании благоприятных перспектив. Как уже неоднократно упомянуто, непосредственные участники технического прогресса обнародованы.',
        price: 600,
        image: 'https://basket-03.wbbasket.ru/vol352/part35259/35259537/images/big/2.web',
        quantity: 7
    },
    {
        id: 3,
        title: 'Обои 3',
        description: 'Прежде всего, новая модель организационной деятельности говорит о возможностях системы обучения кадров, соответствующей насущным потребностям. Таким образом, реализация намеченных плановых заданий предполагает независимые способы реализации кластеризации усилий. Лишь явные признаки победы институционализации формируют глобальную экономическую сеть и при этом — призваны к ответу. Предварительные выводы неутешительны: синтетическое тестирование требует от нас анализа позиций, занимаемых участниками в отношении поставленных задач. Предварительные выводы неутешительны: высококачественный прототип будущего проекта обеспечивает широкому кругу (специалистов) участие в формировании благоприятных перспектив. Как уже неоднократно упомянуто, непосредственные участники технического прогресса обнародованыЯ.',
        price: 700,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPkDh79PsoswMkgE5pndKATHMrGApqUzNz9w&s',
        quantity: 4
    },
    {
        id: 4,
        title: 'Обои 4',
        description: 'Прежде всего, новая модель организационной деятельности говорит о возможностях системы обучения кадров, соответствующей насущным потребностям. Таким образом, реализация намеченных плановых заданий предполагает независимые способы реализации кластеризации усилий. Лишь явные признаки победы институционализации формируют глобальную экономическую сеть и при этом — призваны к ответу. Предварительные выводы неутешительны: синтетическое тестирование требует от нас анализа позиций, занимаемых участниками в отношении поставленных задач. Предварительные выводы неутешительны: высококачественный прототип будущего проекта обеспечивает широкому кругу (специалистов) участие в формировании благоприятных перспектив. Как уже неоднократно упомянуто, непосредственные участники технического прогресса обнародованы.',
        price: 100,
        image: 'https://avatars.mds.yandex.net/i?id=b779379fe26a8ed2e857cb53df82ea8b1c62d474-7669654-images-thumbs&n=13',
        quantity: 0
    },

    {
        id: 5,
        title: 'Обои 5',
        description: 'Прежде всего, новая модель организационной деятельности говорит о возможностях системы обучения кадров, соответствующей насущным потребностям. Таким образом, реализация намеченных плановых заданий предполагает независимые способы реализации кластеризации усилий. Лишь явные признаки победы институционализации формируют глобальную экономическую сеть и при этом — призваны к ответу. Предварительные выводы неутешительны: синтетическое тестирование требует от нас анализа позиций, занимаемых участниками в отношении поставленных задач. Предварительные выводы неутешительны: высококачественный прототип будущего проекта обеспечивает широкому кругу (специалистов) участие в формировании благоприятных перспектив. Как уже неоднократно упомянуто, непосредственные участники технического прогресса обнародованы.',
        price: 600,
        image: 'https://avatars.mds.yandex.net/i?id=19e1100f012b76a65c348d2f413d69e65ec29386-5275655-images-thumbs&n=13',
        quantity: 2
    },
    {
        id: 6,
        title: 'Обои 6',
        description: 'Прежде всего, новая модель организационной деятельности говорит о возможностях системы обучения кадров, соответствующей насущным потребностям. Таким образом, реализация намеченных плановых заданий предполагает независимые способы реализации кластеризации усилий. Лишь явные признаки победы институционализации формируют глобальную экономическую сеть и при этом — призваны к ответу. Предварительные выводы неутешительны: синтетическое тестирование требует от нас анализа позиций, занимаемых участниками в отношении поставленных задач. Предварительные выводы неутешительны: высококачественный прототип будущего проекта обеспечивает широкому кругу (специалистов) участие в формировании благоприятных перспектив. Как уже неоднократно упомянуто, непосредственные участники технического прогресса обнародованы.',
        price: 900,
        image: 'https://ae04.alicdn.com/kf/Uc610dbff0109444ab3a43c304fe07afeX.jpg',
        quantity: 5
    }
    
];

export function Productw() {
    const { id } = useParams();
    const product = products.find((product) => product.id === Number(id));
    
    const [isModalOpen, setModalOpen] = useState(false);

    if (!product) {
        return <h2>Товар не найден</h2>;
    }

    const handleOrderClick = () => {
        setModalOpen(true);
    };

    return (
        <div className={s.Productda}>
            <img className={s.ProductImage} src={product.image} alt={product.title} />
            <div className={s.Producttext}>
                <h1 className={s.ProductTitle}>{product.title}</h1>
                <p className={s.ProductDesc}>{product.description}</p>
                <div className={s.btnopis}>
                    <h3 className={s.ProductTsena}>{product.price}₽</h3>
                    {product.quantity === 0 ? (
                        <button onClick={handleOrderClick} className={s.AddKorzin}>Заказать</button>
                    ) : (
                        <button className={s.AddKorzin}>Добавить в корзину</button>
                    )}
                </div>
            </div>
            <OrderFormModal
                isOpen={isModalOpen} 
                onClose={() => setModalOpen(false)} 
                product={product} 
            />
        </div>
    );
}