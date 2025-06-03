let fs = require('fs');


//the synchronous method
// let read = fs.readFileSync('./readme.txt','utf8')



// fs.writeFileSync('new.txt', 'written from fs')

//the asynchronous method

fs.readFile('readme.txt', 'utf8', (err,data)=>{
    if(err) throw err
    fs.writeFile('new.txt', data, (err)=>{
        if(err) throw err
        
    })
    console.log(data)
})

