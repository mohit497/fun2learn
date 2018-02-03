const csv = require('csvtojson');
const path =require('path')
const filepath = path.join(__dirname+'/customer-data.csv');
const fs = require('fs');
let filename=null;

function convert()
{
    csv().fromFile(filepath).on('json',(jsonObject)=>{

      //  console.log(jsonObject);
        fs.appendFile(filename+'.json',JSON.stringify(jsonObject),(err)=>{
            if(err)
            {
                console.log(err);
            }
        })
    
    })
    .on('done',(error)=>{
    
        if(error)
        {
            console.log("error ocurred details :"+error)
            return false;
        }
        console.log('file converted suuccessfully');
        return true;
    })
    
}


function entryPoint(){
    filename= process.argv[2]; // receive name of the file from command line argument
    convert();
}
entryPoint();