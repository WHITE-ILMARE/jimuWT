var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');
var app = new express();

app.get('/',function(req,res,next){
	superagent.get('http://www.weather.com.cn/weather/101010100.shtml')
		.end(function(err,sres){
			if(err){
				return next(err);
			}
			var $ = cheerio.load(sres.text);
			var weathers = [];
			$('#7d .wea').each(function(idx,element){
				var $element = $(element);
				weathers.push({
					weather:$element.attr('title')
				});
			});
			var date = new Date().getDate();
			var result = "<h2>北京七日天气:<h2><br/>"
				+date+"日: "+weathers[0].weather+"<br />"
				+(date+1)+"日: "+weathers[1].weather+"<br />"
				+(date+2)+"日: "+weathers[2].weather+"<br />"
				+(date+3)+"日: "+weathers[3].weather+"<br />"
				+(date+4)+"日: "+weathers[4].weather+"<br />"
				+(date+5)+"日: "+weathers[5].weather+"<br />"
				+(date+6)+"日: "+weathers[6].weather+"<br />";
			res.send(result);
		});
});

app.listen(3333,function(){
	console.log('app is running ----------');
})
