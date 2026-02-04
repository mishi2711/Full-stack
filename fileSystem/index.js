function getData(fileName){
    return new Promise((resolve, reject) => {
        // Simulate file reading with a timeout
        setTimeout(() => {
            if(fileName){
                resolve(`Data from ${fileName}`);
            } else {
                reject('File name not provided');
            }
        }, 1000);
    }
}