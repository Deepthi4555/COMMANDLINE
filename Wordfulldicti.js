var request=require('request-promise');
var readline = require('readline');
var log = console.log;
let word;
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let i=0;
var recursiveAsyncReadLine = async function () {
     i++;
     if(i==4){
        return  rl.close();
     }
    rl.question('Enter the word: ', async function (word) {
        var options = { method : 'GET',
     url: `https://fourtytwowords.herokuapp.com/word/${word}/definitions?api_key=b972c7ca44dda72a5b482052b1f5e13470e01477f3fb97c85d5313b3c112627073481104fec2fb1a0cc9d84c2212474c0cbe7d8e59d7b95c7cb32a1133f778abd1857bf934ba06647fda4f59e878d164`
    }
let result = await request(options, function (error, response, body) {
    if (error) {
    throw new Error(error);
    }
    
  }).then((res)=>{
    console.log(res)
    return res

  }).catch((err)=>{
      console.log("request error:")
  })
    var options = { method : 'GET',
 url: `https://fourtytwowords.herokuapp.com/word/${word}/relatedWords?api_key=b972c7ca44dda72a5b482052b1f5e13470e01477f3fb97c85d5313b3c112627073481104fec2fb1a0cc9d84c2212474c0cbe7d8e59d7b95c7cb32a1133f778abd1857bf934ba06647fda4f59e878d164`
}
let results = await request(options, function (error, response, body) {
    if (error) {
    throw new Error(error);
    }
    
  }).then((res)=>{
    console.log(res)
    return res 
}).catch((err)=>{
    console.log("request error:")
})
var options = { method : 'GET',
 url: `https://fourtytwowords.herokuapp.com/word/${word}/examples?api_key=b972c7ca44dda72a5b482052b1f5e13470e01477f3fb97c85d5313b3c112627073481104fec2fb1a0cc9d84c2212474c0cbe7d8e59d7b95c7cb32a1133f778abd1857bf934ba06647fda4f59e878d164`
}
let results1 = await request(options, function (error, response, body) {
    if (error) {
    throw new Error(error);
    }
    
  }).then((res)=>{
    console.log(res)
    return res 
}).catch((err)=>{
    console.log("request error:")
})
  if(result){
      return rl.close()
  }
    
        recursiveAsyncReadLine();  
    });
};
    recursiveAsyncReadLine();
    