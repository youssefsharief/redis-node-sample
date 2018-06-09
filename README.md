

# Redis Node.js Smaple App

## How to Start
1. Create free account on redislabs
2. Add needed credentials in config in .env file


## API Examples 

1. POST http://localhost:3000/api/keyVal

>>>{
	"key": "name",
	"val": "aa"
}

2. GET http://localhost:3000/api/keyVal/fd



3. POST http://localhost:3000/api/hashField

>>>{
	"key": "g",
	"field": "name",
	"val": "Ahmed"
}

4. GET http://localhost:3000/api/hash/g/name




5. POST http://localhost:3000/api/hash 
>>>{
	"key": "someRan",
	"obj": {
		"name": "AbdelHady",
		"address": "Nasr City",
		"age": "40"
	}
}

6. GET http://localhost:3000/api/hash/someRan