import "./NewsTextContent.scss";

const NewsTextContent = () => {
  return (
    <div
      className="news-text mb-4"
      dangerouslySetInnerHTML={{
        __html:
          "<p>今晚更新暫停一次</p><p>今晚更新暫停一次</p><p>今晚更新暫停一次</p><p>今晚更新暫停一次</p><p>今晚更新暫停一次</p><p>今晚更新暫停一次</p>",
      }}
    ></div>
  );
};

export default NewsTextContent;
