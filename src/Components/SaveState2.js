import React from 'react'
import './Download.css'
import saveAs from 'file-saver'
import {arr2} from './ButtonClick70x100'

const SaveState2 = () => {
    function downloadStringAsFile(strContent, fileName, mimeType) {
        const blob = new Blob([strContent], { type: mimeType });
        saveAs(blob, fileName);
      }
      const handleDownload = () => {
        var stringToDownload = arr2;
        const fileName = "Pre-operative and POR mappings.txt";
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

export default SaveState2
