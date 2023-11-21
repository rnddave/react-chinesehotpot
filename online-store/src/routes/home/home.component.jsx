import Categories from '../../components/categories/categories.component';

const Home = () => {

  // we want an array to hold the categories
  const categories = [
    {
      "id": 1,
      "title": "Cookbooks",
      "imageUrl": "https://i.ibb.co/yRhBbgr/cookbooks.png"
    },
    {
      "id": 2,
      "title": "Food",
      "imageUrl": "https://i.ibb.co/MPTdbMS/Chinese-Ingredients.jpg"
    },
    {
      "id": 3,
      "title": "Drinks",
      "imageUrl": "https://i.ibb.co/h73DPtV/Chinese-Drinks.jpg"
    },
    {
      "id": 4,
      "title": "Cookware",
      "imageUrl": "https://i.ibb.co/ZXmDRrz/Chinese-Cookware.jpg"
    },
    {
      "id": 5,
      "title": "Tableware",
      "imageUrl": "https://i.ibb.co/GR07gnq/Chinese-Tableware.jpg"
    },
  ];

  // we want to call our categories component (which will then call the category items)
  return <Categories categories={categories} />;
};

export default Home;


