import React, { useState } from 'react';
import s from './catalogtovarov.module.css'
import { Cardw } from './card';

const products = [
    {
        id: 1,
        title: 'Обои 1',
        price: 100,
        image: 'https://mondeco.ru/4364-large_default/besshovnye-oboi-zhuravli-art-w010-mondeco.jpg',
        quantity: 0,
        category: 'Плотный'
    },

    {
        id: 2,
        title: 'Обои 2',
        price: 200,
        image: 'https://basket-03.wbbasket.ru/vol352/part35259/35259537/images/big/2.webp',
        quantity: 7,
        category: 'Тонкий'
    },
    {
        id: 3,
        title: 'Обои 3',
        price: 300,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPkDh79PsoswMkgE5pndKATHMrGApqUzNz9w&s',
        quantity: 6,
        category: 'Плотный'
    },
    {
        id: 4,
        title: 'Обои 4',
        price: 400,
        image: 'https://shop.obrai.ru/wp-content/uploads/2023/01/%D0%9E%D0%B1%D0%BE%D0%B8-%D0%B4%D0%BB%D1%8F-%D1%81%D1%82%D0%B5%D0%BD-Paint-%D0%9F%D0%BE%D0%B8%D0%BD%D1%82-%D0%B0%D1%80%D1%82-9164-00-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%8C%D0%B5%D1%80.jpg',
        quantity: 9,
        category: 'Плотный'
    },

    {
        id: 5,
        title: 'Обои 5',
        price: 500,
        image: 'https://mondeco.ru/4331-large_default/besshovnye-oboi-zhuravli-art-w010-mondeco.jpg',
        quantity: 1,
        category: 'Тонкий'
    },
    {
        id: 6,
        title: 'Обои 6',
        price: 600,
        image: 'https://ae04.alicdn.com/kf/Uc610dbff0109444ab3a43c304fe07afeX.jpg',
        quantity: 8,
        category: 'Тонкий'
    }
    
];

export function Catalogw(){
    const [searchTerm, setSearchTerm] = useState('');
    const [sortCriteria, setSortCriteria] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(''); 

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const sortProducts = (products) => {
        if (sortCriteria === 'priceAsc') {
            return products.sort((a, b) => a.price - b.price);
        } else if (sortCriteria === 'priceDesc') {
            return products.sort((a, b) => b.price - a.price);
        } else if (sortCriteria === 'quantityAsc') {
            return products.sort((a, b) => a.quantity - b.quantity);
        } else if (sortCriteria === 'quantityDesc') {
            return products.sort((a, b) => b.quantity - a.quantity);
        }
        return products;
    };

    const filterProducts = (products) => {
        if (selectedCategory) {
            return products.filter(product => product.category === selectedCategory);
        }
        return products; 
    };

    const filteredProducts = filterProducts(products).filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedProducts = sortProducts(filteredProducts);

    return(
        <div className={s.catalogszag}>
        <h1 className={s.Zagolovktov}>Каталог товаров</h1>
        <div className={s.PoiskFiltr}>
            <input className={s.Pole}
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Поиск товаров..."
            />
            <select value={selectedCategory} onChange={handleCategoryChange}>
                <option value="">Все категории</option>
                <option value="Плотный">Плотный</option>
                <option value="Тонкий">Тонкий</option>
                
            </select>
            <select value={sortCriteria} onChange={(e) => setSortCriteria(e.target.value)}>
                <option value="">Без сортировки</option>
                <option value="priceAsc">Цена: по возрастанию</option>
                <option value="priceDesc">Цена: по убыванию</option>
                <option value="quantityAsc">Количество: по возрастанию</option>
                <option value="quantityDesc">Количество: по убыванию</option>
            </select>
        </div>
    
    
    <div className={s.da}>
        {sortedProducts.map((product) => (
                <Cardw
                    key={product.id}
                    id={product.id}
                    title={product.title} 
                    price={product.price} 
                    image={product.image} 
                    quantity={product.quantity} 
                    category={product.category}
                />
        ))}
    </div>
    </div>
    );
}