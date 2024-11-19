import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Кухонный комплект",
          img: "https://images.pexels.com/photos/7166645/pexels-photo-7166645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          desc: "Стильный набор для кухни включающий стол и четыре стула.",
          category: "Citchen",
          price: 199.99,
        },
        {
          id: 2,
          title: "Плед из микрофибры",
          img: "https://images.pexels.com/photos/2247157/pexels-photo-2247157.jpeg?auto=compress&cs=tinysrgb&w=600",
          desc: "Мягкий и теплый плед, идеален для холодных вечеров.",
          category: "Living",
          price: 29.99,
        },
        {
          id: 3,
          title: "Настенные часы",
          img: "https://images.pexels.com/photos/29438770/pexels-photo-29438770.jpeg?auto=compress&cs=tinysrgb&w=600",
          desc: "Элегантные настенные часы с современным дизайном.",
          category: "Decor",
          price: 49.99,
        },
        {
          id: 4,
          title: "Коврик для ванной",
          img: "https://images.pexels.com/photos/5806991/pexels-photo-5806991.jpeg?auto=compress&cs=tinysrgb&w=600",
          desc: "Мягкий коврик, создает комфорт после душа.",
          category: "Decor",
          price: 19.99,
        },
        {
          id: 5,
          title: "Кашпо для цветов",
          img: "https://images.pexels.com/photos/20389578/pexels-photo-20389578.jpeg?auto=compress&cs=tinysrgb&w=600",
          desc: "Красивое кашпо для ваших домашних растений.",
          category: "Decor",
          price: 12.99,
        },
        {
          id: 6,
          title: "Подушки для дивана",
          img: "https://images.pexels.com/photos/18738894/pexels-photo-18738894.jpeg?auto=compress&cs=tinysrgb&w=600",
          desc: "Набор ярких подушек для повышения уюта в вашем доме.",
          category: "Living",
          price: 34.99,
        },
        {
          id: 7,
          title: "Светильник настольный",
          img: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=600",
          desc: "Настольный светильник с мягким светом для чтения.",
          category: "Living",
          price: 59.99,
        },
        {
          id: 8,
          title: "Ковер ручной работы",
          img: "https://images.pexels.com/photos/6114346/pexels-photo-6114346.jpeg?auto=compress&cs=tinysrgb&w=600",
          desc: "Уникальный ковер, добавляющий характер любому помещению.",
          category: "Living",
          price: 299.99,
        },
        {
          id: 9,
          title: "Текстиль для кухни",
          img: "https://images.pexels.com/photos/9009496/pexels-photo-9009496.jpeg?auto=compress&cs=tinysrgb&w=600",
          desc: "Набор текстиля: полотенца, прихватки, скатерть.",
          category: "Citchen",
          price: 39.99,
        },
        {
          id: 10,
          title: "Ароматическая свеча",
          img: "https://images.pexels.com/photos/1832562/pexels-photo-1832562.jpeg?auto=compress&cs=tinysrgb&w=600",
          desc: "Свеча с приятным ароматом, создающая атмосферу уюта.",
          category: "Decor",
          price: 14.99,
        },
        {
          id: 11,
          title: "Теплый плед",
          img: "https://images.pexels.com/photos/4825713/pexels-photo-4825713.jpeg?auto=compress&cs=tinysrgb&w=600",
          desc: "Теплый, уютный плед для комфортного отдыха.",
          category: "Living",
          price: 25.99,
        },
        {
          id: 12,
          title: "Стул-качалка",
          img: "https://images.pexels.com/photos/20778163/pexels-photo-20778163.jpeg?auto=compress&cs=tinysrgb&w=600",
          desc: "Удобный стул-качалка для расслабления и отдыха.",
          category: "Furniture",
          price: 149.99,
        },
        {
          id: 13,
          title: "Картинная галерея",
          img: "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=600",
          desc: "Набор картин для украшения стен вашего дома.",
          category: "Decor",
          price: 99.99,
        },
        {
          id: 14,
          title: "Каминная решетка",
          img: "https://images.pexels.com/photos/6773247/pexels-photo-6773247.jpeg?auto=compress&cs=tinysrgb&w=600",
          desc: "Элегантная решетка для защиты от искр.",
          category: "Decor",
          price: 45.99,
        },
        {
          id: 15,
          title: "Комод из дерева",
          img: "https://images.pexels.com/photos/12715512/pexels-photo-12715512.jpeg?auto=compress&cs=tinysrgb&w=600",
          desc: "Стильный комод для хранения вещей.",
          category: "Furniture",
          price: 279.99,
        },
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />

        {this.state.showFullItem && (
          <ShowFullItem
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
            item={this.state.fullItem}
          />
        )}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({
      orders: this.state.orders.filter((el) => el.id !== id),
    });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });

    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
