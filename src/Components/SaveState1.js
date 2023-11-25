import React from 'react'
import {arr} from './ButtonClick70x43'
import './Download.css'
import saveAs from 'file-saver'

 const SaveState1 = () => {
    function downloadStringAsFile(strContent, fileName, mimeType) {
        const blob = new Blob([strContent], { type: mimeType });
        saveAs(blob, fileName);
      }
      const handleDownload = () => {
        var stringToDownload = arr;
        const fileName = "Pre-operative and OTF mappings.txt";
        const mimeType = "text/plain";
        downloadStringAsFile(stringToDownload, fileName, mimeType);
      };
  return (
    <button className="download"
    onClick={handleDownload}>
      DOWNLOAD
    </button>
  )
}

export default SaveState1

