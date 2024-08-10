// src/PdfViewer.js
import React, { useState } from "react";
import Modal from "react-modal";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

Modal.setAppElement("#root");

const PdfViewer = ({ fileUrl }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [isOpen, setIsOpen] = useState(false);
  const close_icon = process.env.PUBLIC_URL + "/assets/close_button_14.png";
  const search_icon = process.env.PUBLIC_URL + "/assets/search_icon_13.5.png";
  const download_icon =
    process.env.PUBLIC_URL + "/assets/download_icon_13.5.png";

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "240328 가입시알아두실사항_DT.pdf";
    link.click();
  };

  return (
    <div class="flex">
      <div class="flex cursor-pointer items-center" onClick={openModal}>
        <img src={search_icon} class="mr-1 h-[14px] w-[14px]" />
        <button class="mr-2 text-xs font-normal leading-[18px] text-Text-Alternative">
          약관보기
        </button>
      </div>
      <div class="flex cursor-pointer items-center" onClick={downloadFile}>
        <img src={download_icon} class="mr-1 h-[14px] w-[14px]" />
        <button class="text-xs font-normal leading-[18px] text-Text-Alternative">
          다운로드
        </button>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="PDF Preview"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            height: "80%",
          },
        }}
      >
        <div class="mb-2 flex h-5 w-full justify-end">
          <button onClick={closeModal}>
            <img src={close_icon} />
          </button>
        </div>
        <Worker
          workerUrl={`https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js`}
        >
          <div style={{ height: "100%" }}>
            <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />
          </div>
        </Worker>
      </Modal>
    </div>
  );
};

export default PdfViewer;
