function LinkStack(){
	var length = 0;
	var top;
	var Node = function(data){
		this.elem = data;
		this.next= null;
	}
	this.Push = function(data){
		var node = new Node(data); 
		if(!top)
		{
			top = node;
			length++;
		}
		else{
			node.next = top;
			top = node;
			length++;
		}
	}
	this.Pop = function(){
		if(top){
			var cur = top;
			top = top.next;
			length--;
			return cur.elem;
		}else{
			return 'error:no node in stack!';
		}
	}
	this.GetTop = function(){
		if(top){
			return top.elem;
		}
		else{
			return 'error:no node in stack!';
		}
	}
	this.StackSize = function(){
		return length;
	}
	this.StackClear = function(){
		top = null;
		length = 0;
	}
	this.Print=function(){
		var cur = top;
		var cou = length;
		for(cur;cur!=null;cur= cur.next)
		{
			console.log("stack["+(--cou)+"]: "+cur.elem);
		}
	}
}
//test LinkStack
	console.log("----------initial----------")
	var stack = new LinkStack();
	console.log("StackSize: "+stack.StackSize());
	console.log("StackTop: "+stack.GetTop());
	console.log("-------Start pushing-------");
	for(var x=1;x<7;x++)
		stack.Push(x);
	stack.Print();
	console.log("StackSize: "+stack.StackSize());
	console.log("StackTop: "+stack.GetTop());
	console.log("-------Start popping-------")
	for(var x=0;x<3;x++)
		stack.Pop();
	stack.Print();
	console.log("StackSize: "+stack.StackSize());
	console.log("StackTop: "+stack.GetTop());