const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.writeFile(fileName,fileContent)
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	try {
		const data = await fs.readFile(fileName, { encoding: "utf8" });
		console.log(data);
	  } catch (err) {
		console.log(err);
	  }
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.appendFile(fileName,fileContent)
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.unlink(fileName);
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }