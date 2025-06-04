let fs = require('fs');


//the synchronous method
// let read = fs.readFileSync('./readme.txt','utf8')



// fs.writeFileSync('new.txt', 'written from fs')

//the asynchronous method

fs.readFile('readme.txt', 'utf8', (err,data)=>{
    if(err) throw err
    fs.writeFile('new.txt', 'glen Quagmire', (err)=>{
        if(err) throw err

    })
    console.log(data)
})

// the difference between the synchronous and asynchronous methods is that the synchronous method blocks the execution of the code until the file is read or written, while the asynchronous method does not block the execution of the code and allows other code to run while the file is being read or written. This is why we use callbacks in the asynchronous method to handle the result of the operation once it is complete.
// In the asynchronous method, we pass a callback function as the third argument to the `readFile` and `writeFile` methods. This callback function is called once the file has been read or written, and it receives an error (if there was an error) and the data (if the operation was successful).

//unlink
//the unlink method is used to delete a file. It takes the file path as the first argument and a callback function as the second argument. The callback function is called once the file has been deleted, and it receives an error (if there was an error) as its first argument.

// fs.unlink('new.txt', (err) => {
//     if (err) throw err;
//     console.log('File deleted successfully');
// }
// );
// The `unlink` method is an asynchronous method, so it does not block the execution of the code. It allows other code to run while the file is being deleted. Once the file has been deleted, the callback function is called, and we can handle any errors that may have occurred during the deletion process.

//create a directory

fs.mkdir('directory1',(err) => {
    if (err) throw err;
    console.log('Directory created successfully');
}
);

// The `mkdir` method is used to create a directory. It takes the directory name as the first argument and a callback function as the second argument. The callback function is called once the directory has been created, and it receives an error (if there was an error) as its first argument.

//however, if the directory already exists, the `mkdir` method will throw an error. To avoid this, we can use the `fs.existsSync` method to check if the directory already exists before creating it:...

// to remove a directory, we use the `rmdir` method. It takes the directory name as the first argument and a callback function as the second argument. The callback function is called once the directory has been removed, and it receives an error (if there was an error) as its first argument.

//note... if the directory is not empty, the `rmdir` method will throw an error.