import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavInshorts from "./components/NavInshorts";
import NewsContent from "./components/NewsContent/NewsContent";
import apiKey from "./Data/config";

function App() {
  const [categories, setCategories] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [NewsResult, setNewsResult] = useState();
  const [loadmore, setLoadmore] = useState(20)

  const newsApi = async () => {
    try {

      const proxyUrl = "https://cors-anywhere.herokuapp.com/";

      const news = await axios.get(
        `https://${proxyUrl}newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${categories}&pageSize=${loadmore}`
      );
      setNewsArray(news.data.articles);
      setNewsResult(news.data.totalResults);
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log(newsArray);
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
