import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/DashboardComponents/Navbar/Navbar";
import SubBar from "../../components/DashboardComponents/SubBar/SubBar";
import HomeComponent from "../../components/DashboardComponents/HomeComponent/HomeComponent";
import CreateFolder from "../../components/DashboardComponents/CreateFolder/CreateFolder";
import {
  getFiles,
  getFolders,
} from "../../redux/actionCreators/fileFolderActionCreator";
import FolderComponent from "../../components/DashboardComponents/FolderComponent/FolderComponent";
import CreateFile from "../../components/DashboardComponents/CreateFile/CreateFile";
import FileComponent from "../../components/DashboardComponents/FileComponent/FileComponent";
import UploadFile from "../../components/DashboardComponents/UploadFile/UploadFile";

const DashboardPage = () => {
  const [isCreateFolderModalOpen, setIsCreateFolderModalOpen] = useState(false);
  const [isCreateFileModalOpen, setIsCreateFileModalOpen] = useState(false);
  const [isFileUploadModalOpen, setIsFileUploadModalOpen] = useState(false);
  const [showSubBar, setShowSubBar] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const { isLoggedIn, isLoading, userId } = useSelector(
    (state) => ({
      isLoggedIn: state.auth.isAuthenticated,
      isLoading: state.filefolders.isLoading,
      userId: state.auth.user.uid,
    }),
    shallowEqual
  );

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if (isLoading && userId) {
      dispatch(getFolders(userId));
      dispatch(getFiles(userId));
    }
  }, [isLoading, userId, dispatch]);

  useEffect(() => {
    if (pathname.includes("/file/")) {
      setShowSubBar(false);
    }
  }, [pathname]);

  return (
    <>
      {isCreateFolderModalOpen && (
        <CreateFolder setIsCreateFolderModalOpen={setIsCreateFolderModalOpen} />
      )}
      {isCreateFileModalOpen && (
        <CreateFile setIsCreateFileModalOpen={setIsCreateFileModalOpen} />
      )}
      {isFileUploadModalOpen && (
        <UploadFile setIsFileUploadModalOpen={setIsFileUploadModalOpen} />
      )}
      <Navbar />
      {showSubBar && (
        <SubBar
          setIsCreateFolderModalOpen={setIsCreateFolderModalOpen}
          setIsCreateFileModalOpen={setIsCreateFileModalOpen}
          setIsFileUploadModalOpen={setIsFileUploadModalOpen}
        />
      )}

      <Routes>
        <Route path="" element={<HomeComponent />} />
        <Route path="folder/:folderId" element={<FolderComponent />} />
        <Route path="file/:fileId" element={<FileComponent />} />
      </Routes>
    </>
  );
};

export default DashboardPage;
