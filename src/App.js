import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavInshorts from "./components/NavInshorts";
import NewsContent from "./components/NewsContent/NewsContent";


function App() {
  const [categories, setCategories] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [NewsResult, setNewsResult] = useState();
  const [loadmore, setLoadmore] = useState(20)

  const newsApi = async () => {
    try {

      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}&category=${categories}&pageSize=${loadmore}`
      );
      setNewsArray(news.data.articles);
      setNewsResult(news.data.totalResults);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    newsApi(); 
    // eslint-disable-next-line
  }, [NewsResult,categories,loadmore]);

  return (
    <div className="App">
      <NavInshorts setCategory={setCategories} />
      <NewsContent loadmore = {loadmore} setLoadmore ={setLoadmore} newsArray = {newsArray} NewsResult = {NewsResult} />
      <Footer />
    </div>
  );
}

export default App;
