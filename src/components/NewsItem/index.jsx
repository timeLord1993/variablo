import Card from "../Card";
import NewsHeader from "./NewsHeader";
import NewsTextContent from "./NewsTextContent";
import NewsImageContent from "./NewsImageContent";
// import NewsVideoContent from "./NewsVideoContent";
// import NewsAudioContent from "./NewsAudioContent";
import NewsDescription from "./NewsDescription";
import NewsBottom from "./NewsBottom";
import "./index.scss";

const News = () => {
  return (
    <Card>
      <div className="news-box p-4">
        <NewsHeader />
        <NewsTextContent />
        <NewsImageContent />
        {/*<NewsImageContent />
        <NewsVideoContent />
        <NewsAudioContent />
        
        */}
        <NewsDescription />
        <NewsBottom />
      </div>
    </Card>
  );
};

export default News;
