import "../screen/mainComponent.scss";
import placeholder from "../images/placeholder.jpg";
import { LoadingOutlined } from "@ant-design/icons";

const CardComponent = ({ postList, dataLoader }) => {
  return (
    <>
      {dataLoader ? (
        <div className="loader">
        <LoadingOutlined spin style={{fontSize: "40px", color: "#b69b8f"}} />
        <div>Loading...</div>
        </div>
      ) : (
        <div className="cards-wrapper">
          {postList.length > 0 &&
            postList.map((item, index) => {
              return (
                <div key={index} className="card">
                  <img
                    className="card_img"
                    src={item.urlToImage ? item.urlToImage : placeholder}
                  />
                  <div className="card_title ellipse two-lines">
                    {item.title}
                  </div>
                  <div className="card_desc ellipse four-lines">
                    {item.description}
                  </div>
                  <div className="card_footer">
                    <div className="card_author">{item.author}</div>
                    <div className="card_publishedAt">
                      <span>{item.publishedAt}</span>
                      <span style={{ cursor: "pointer" }}>more...</span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};

export default CardComponent;
