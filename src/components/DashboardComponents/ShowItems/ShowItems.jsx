import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ShowItems.css";
import { faFile, faFolder } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeFolder } from "../../../redux/actionCreators/fileFolderActionCreator";

const ShowItems = ({ title, items, type }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDoubleClick = (itemId) => {
    if (type === "folder") {
      dispatch(changeFolder(itemId))
      navigate(`/dashboard/folder/${itemId}`);
    } else {
      alert("file clicked");
    }
  };

  return (
    <div className="w-100">
      <h4 className="text-center border-bottom py-2">{title}</h4>
      <div className="row gap-2 p-4 flex-warp">
        {items &&
          items.map((item, i) => {
            return (
              <p
                key={i * 55}
                className="col-md-2 py-3 d-flex flex-column text-center border"
                onDoubleClick={() => handleDoubleClick(item.docId)}
              >
                {type === "folder" ? (
                  <FontAwesomeIcon size="4x" className="mb-3" icon={faFolder} />
                ) : (
                  <FontAwesomeIcon size="4x" className="mb-3" icon={faFile} />
                )}
                {item.data && item.data.name ? item.data.name : "New File"}
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default ShowItems;
