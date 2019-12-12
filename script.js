"use strict"
function f1()
	{
		var id = document.getElementById('id');
		
		/*if(name.value == "")
		{
			alert("Input Name First");
		}
		*/
		
		if(id.value == "")
		{

			var obj = document.getElementById('msg');
			obj.innerHTML = "Input ID First";
			obj.style.color = "red";
		}
		else if(id.value != "")
		{
			var obj = document.getElementById('msg');
			obj.innerHTML = "Good to go";
			obj.style.color = "green";
		}
		/*else if(name1.value.length<=5)
		{
			var obj = document.getElementById('msg');
			obj.innerHTML = "At least two words";
			obj.style.color = "red";
		}
		else if(name1.value.length>=6)
		{
			var obj = document.getElementById('msg');
			obj.innerHTML = "Correct";
			obj.style.color = "green";
		}*/
	}
//function f2()
	{
		var id = document.getElementById('id').value;
		document.getElementById('msg').innerHTML = id;
	}
	
/*function f3()
	{
		var email = document.getElementById('email');
		
		if(email.value == "")
		{
			alert("Input Email First");
		}
	}
function f5()
	{	
		if(document.getElementById('gender').checked==false)
		{
			alert("Select gender")
		}
	}*/