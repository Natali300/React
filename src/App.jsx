import BookCard from "./components/BookCard";
import coverImage from './assets/маленькая женщина.webp';
import coverImage1 from './assets/приключение .jpg';
function App(){
  return(
    <div>
    <h1>Книги</h1>
    <BookCard
    name="Маленькие женщины"
    avtor="Луиза Мэй Олкотт"
    cover={coverImage}
 />
 <BookCard
    name="Приключение Макса и его верных друзей"
    avtor="Марина Голомидова"
    cover={coverImage1}
 />
    </div>
  );
}
export default App;