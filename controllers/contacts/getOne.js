// const { json } = require("express")
// const contacts = require("../../model/contacts.json")

// const getOne = (req, res) => {
// 	const { id, name } = req.params
// 	const contact = contacts.find((item) => item.id === id)
// 	if (!contact) {
// 		res.status(404).json({
// 			status: "error",
// 			code: 404,
// 			message: "Not found",
// 		})
// 		return
// 	}
// 	res.json({
// 		status: "success",
// 		code: 200,
// 		data: {
// 			result: contact,
// 		},
// 	})
// }

// module.exports = getOne
