import { shallowEqual, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ShowItems from "../ShowItems/ShowItems";

const FolderComponent = () => {
  const { folderId } = useParams();
  const { currentFolderData, childFolders, childFiles } = useSelector(
    (state) => ({
      currentFolderData: state.filefolders.userFolders.find(
        (folder) => folder.docId === folderId
      )?.data,
      childFolders: state.filefolders.userFolders.filter(
        (folder) => folder.data.parent === folderId
      ),
      childFiles: state.filefolders.userFiles.filter(
        (file) => file.data.parent === folderId
      ),
    }),
    shallowEqual
  );

  return (
    <div>
      {childFolders.length > 0 ? (
        <>
          {childFolders.length > 0 && (
            <ShowItems
              type={"folder"}
              title="Created Folders"
              items={childFolders}
            />
          )}
          {childFiles.length > 0 && (
            <ShowItems
              type={"file"}
              title="Created Files"
              items={childFiles.filter((file) => file.url == null)}
            />
          )}
        </>
      ) : (
        <p className="text-center my-5 ">Empty Folder</p>
      )}
    </div>
  );
};

export default FolderComponent;
