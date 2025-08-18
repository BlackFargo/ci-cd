const express = require('express')
const app = express()
const PORT = 4000

app.get('/', (req, res) => {
	res.send('🚀 Hello from Docker + Node.js server!')
})

app.listen(PORT, () => {
	console.log(`✅ Server running on http://localhost:${PORT}`)
})
