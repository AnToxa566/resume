class DownloadFile {
    downloadFile(path, fileName) {
        const link = document.createElement('a');
    
        link.href = path;
        link.download = fileName;
        link.target = '_blank';
    
        link.click();
    };
    
    addClickListenerToDownloadFile(buttons, path, fileName) {
        buttons.forEach(button => button.onclick = event => {
            event.preventDefault();
            this.downloadFile(path, fileName);
        })
    }
}

export default new DownloadFile