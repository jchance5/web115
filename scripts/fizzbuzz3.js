function makeChanges()
			{
				changeGreeting();
				changeLoop();
			}
			
			function changeGreeting()
			{
				var greetingItem = document.getElementById('greeting'); // this is comment
				var firstName = document.getElementById('firstName').value;
				var middleInitial = document.getElementById('middleInitial').value;
				var lastName = document.getElementById('lastName').value;
				var newGreeting = "Welcome";
				newGreeting = newGreeting.concat(" ", firstName);
				if (middleInitial !== "") { newGreeting = newGreeting.concat(" ", middleInitial, "."); }
				newGreeting = newGreeting.concat(" ", lastName, " ","to Fizz Buzz");				
				greetingItem.textContent = newGreeting;
				return false;
			}
			
			function changeLoop()
			{
				var defaultMessage = "One";
				
				var divisorToMessage = {3 : "More", 5 : "Try", 7 : "One more!"}; // default
				
				var loopHeaderItem = document.getElementById('loopHeader');
				var loopSectionItem = document.getElementById('loopSection');
				loopHeaderItem.textContent = defaultMessage;				
				
				var loopLimit = 140;
				
				var uList = document.createElement("ol");			
				
				
				var x = prompt("Enter first number",);
				var y = prompt("Enter second number",);
				var z = prompt("Enter second number",);
				
				divisorToMessage = { [x] : "One", [y] : "More", [z] : "Try!"}; 
				
				for (let i = 1; i <= loopLimit; i++) 				
				{
					var listItem = document.createElement("li");					
					var addition = "";
					for (let [key, value] of Object.entries(divisorToMessage)) {
						 if (checkDivision (i, key)) {
							addition = addition.concat(" ", value);
						}
					}
					if (addition === "") {
						addition = defaultMessage;
					}
					/*if ( checkDivision (i, x) && checkDivision (i, y) ) { addition = message3 + " " + message5; }
					else if ( checkDivision (i, x) ) { addition = message3; } 
					else if ( checkDivision (i, y) ) { addition = message5; } 
					else { addition = message; }*/
					listItem.appendChild(document.createTextNode(addition));

					uList.appendChild(listItem);
				}

				loopSectionItem.appendChild(uList);				
			}
			function checkDivision(x, y)
			{
				return (x % y == 0);
			}
			changeLoop();
	
