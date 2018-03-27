var Nightmare = require('nightmare');      
var nightmare = Nightmare({
    show: false//显示electron窗口
    // waitTimeout : 5000
});

nightmare
	.goto('https://box.jimu.com/Venus/List')
	.inject('js','jquery.min.js')
	.wait(function(){
		window.result=[];
		$('.project').each(function(){
			var st =  $(this).find('.num.status-blue').text();
			if(!st)
				st = $(this).find('.num.status-green').text();
			result.push({
				Name: $(this).find('.title').text(),
				rate : $(this).find('.num.invest-item-profit').text().trim(),
				month:$(this).find('.num.time-limit').text().trim(),
				status : st
			});
		});
		return true;
	})
	.evaluate(()=>{
		return result;
	})
	.end()
	.then(function(res){
		console.log(res);
	})
	.catch(function(err){
		console.error('failed',error);
	})

