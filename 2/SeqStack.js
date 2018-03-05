//顺序栈
function Stack(){
	var MaxSize =10;
	var top = 0;
	var elem = new Array(MaxSize);
	this.Push = function(argu){
		if(top>=MaxSize)
		{
			MaxSize *= 2;
			var elem2 = new Array(MaxSize);
			for(var x=0;x<top;x++)
			{
				elem2[x]=elem[x];
			}	
			telem = elem2;
			elem[top++] = argu;
		}
		else{
			elem[top++]=argu;
		}
	}
	this.Pop =function(){
		if(top==0) return 0;//fail
		else{
			top--;
			return 1;//success
		}
	}
	this.GetTop=function(){
		if(top==0) return 'error:no element in stack!';
		else{
			return elem[top-1];
		}
	}
	this.StackSize=function(){
		return top;
	}
	this.StackClear=function(){
		elem=[];
		return 1;
	}
	this.Print=function(){
		for(var x=0;x<top;x++)
		{
			console.log("stack["+x+"]: "+elem[x]);
		}
	}
	this.GetMaxSize=function()
	{
		return MaxSize;
	}
}
//test顺序栈:
	console.log("----------initial----------")
	var stack = new Stack();
	console.log("stacksize: "+stack.StackSize());
	console.log("MaxSize: "+stack.GetMaxSize());
	console.log("StackTop: "+stack.GetTop());
	console.log("-------Start pushing-------");
	for(var x=0;x<15;x++)
		stack.Push(x);
	stack.Print();
	console.log("stacksize: "+stack.StackSize());
	console.log("MaxSize: "+stack.GetMaxSize());
	console.log("StackTop: "+stack.GetTop());
	console.log("-------Start popping-------")
	for(var x=0;x<7;x++)
		stack.Pop();
	stack.Print();
	console.log("stacksize: "+stack.StackSize());
	console.log("MaxSize: "+stack.GetMaxSize());
	console.log("StackTop: "+stack.GetTop());
	
	