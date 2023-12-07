import DirectoryItem from '../directory-item/directory-item.component';
import { DirectoryContainer } from './directory.styles';

// we want an array to hold the categories
const categories = [
  {
    "id": 1,
    "title": "Cookbooks",
    "imageUrl": "https://i.ibb.co/yRhBbgr/cookbooks.png",
    route: 'shop/books'
  },
  {
    "id": 2,
    "title": "Food",
    "imageUrl": "https://i.ibb.co/MPTdbMS/Chinese-Ingredients.jpg",
    route: 'shop/food'
  },
  {
    "id": 3,
    "title": "Drinks",
    "imageUrl": "https://i.ibb.co/h73DPtV/Chinese-Drinks.jpg",
    route: 'shop/drinks'
  },
  {
    "id": 4,
    "title": "Cookware",
    "imageUrl": "https://i.ibb.co/ZXmDRrz/Chinese-Cookware.jpg",
    route: 'shop/cookware'
  },
  {
    "id": 5,
    "title": "Tableware",
    "imageUrl": "https://i.ibb.co/GR07gnq/Chinese-Tableware.jpg",
    route: 'shop/tableware'
  },
];

const Directory = () => {

  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;