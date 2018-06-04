// console.info(__filename);
// console.info(__dirname);
// console.info(process.env);
/**
 * 正则匹配写法有两种.replace(/^.*\.png$/i)/和.replace('^.*\.png$i')
 * 区别就是
 * 如果写了//那就不用''
 *
 * ^是匹配开始
 * .*代表匹配任意正整数的任意字符
 * \.转义.
 * $是匹配结束
 * i是不分大小写
 *
 * */


var fs = require("fs");

// console.info();
var path = __dirname+'\\image';

fs.readdir(path,function(err,files){//读文档目录，可以拿到第二个参数files多个文件
    if(err){
        return console.error(err);
    }
    var n = 0;
    files.forEach(function(file){//遍历文件
        n++;
        if(file.replace('^.*\.(jpg|gif|png|bmp)$i')){//正则匹配
            var oldfilePath = path+`\\${file}`;
            var newFilePath = path+'\\图片'+n+'.png';
            fs.rename(oldfilePath,newFilePath,function(error){//更改目录路径，其实就是直接改名
                if(error){
                    console.error(error);
                }
            })
        }
    });

})