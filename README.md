# Описание проекта

Это интернет-магазин, разработанный с использованием **React**. Он позволяет пользователям просматривать товары, добавлять их в корзину и оформлять заказы. Проект включает в себя компоненты для отображения категорий товаров, товаров, корзины и заказов.

## Функциональные возможности

- Просмотр и фильтрация товаров по категориям
- Добавление товаров в корзину
- Просмотр содержимого корзины
- Удаление товаров из корзины
- Отображение общей суммы покупок

## Установка и настройка

### Требования

- **Node.js** (версия 12 или выше)
- **npm** (версия 5.6 или выше)

### Установка проекта

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/ваше_имя/имя_проекта.git
   ```

2. Перейдите в директорию проекта:

   ```bash
   cd имя_проекта
   ```

3. Установите зависимости:

   ```bash
   npm install
   ```

### Запуск проекта

Для запуска проекта в режиме разработки выполните:

```bash
npm start
```

Проект будет доступен по адресу [http://localhost:3000](http://localhost:3000).

## Используемые технологии

- **React** (библиотека для построения пользовательских интерфейсов)
- **React Icons** (для иконок)
- **CSS** для стилизации компонентов

## Компоненты

- **Categories**  
  Компонент для отображения категорий товаров. При клике на категорию вызывается функция `chooseCategory`, передавая ключ категории.

- **Header**  
  Компонент заголовка, который включает в себя логотип, навигацию и корзину. Корзина открывается по клику на иконку и отображает заказы или сообщение о том, что корзина пуста.

- **Item**  
  Компонент для отображения одиночного товара, который включает изображение, название, описание и цену. При нажатии на "+" товар добавляется в корзину.

- **Items**  
  Компонент, отображающий список товаров. Для каждого товара используется компонент `Item`.

- **Order**  
  Компонент для отображения заказа в корзине. Позволяет удалить товар из корзины по клику на значок корзины.

## Заключение

Этот интернет-магазин на **React** демонстрирует основные принципы разработки современных приложений с использованием компонентного подхода и управления состоянием. Вы можете расширить его функциональность, добавляя новые возможности, такие как авторизация пользователей, интеграция с платёжными системами и другие функции. 
