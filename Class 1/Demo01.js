const fs= require('fs');

fs.appendFile('app.txt','Adding 2nd line',(err)=>{
        if (err) throw err;
});

