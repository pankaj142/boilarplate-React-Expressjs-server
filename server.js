const express =require("express");
const app  =express();
var port =5000;

app.get("/api/ourResponsibilities", (req,res)=>{
	const ourResponsibilities=[
	{ id:1,
	  item :"Wake up !",
	},
	{ id:2,
	  item :"Drink Coffee !",
	},
	{ id:3,
	  item :"Code !",
	},
	{ id:4,
	  item :"Sleep !",
	}
	  ]

	 res.send(ourResponsibilities) 
});


app.listen(port,()=> console.log(`Server is running on ${port}`))