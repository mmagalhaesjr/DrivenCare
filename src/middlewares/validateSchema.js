export function validateSchema(schema) {
    return (req, res, next) => {
        const user = req.body
        const validation = schema.validate(req.body, { abroutEarly: false })
        try {

            if (validation.error) {
                const errorMsg = validation.error.details.map(err => err.message)
                console.log(validation.error.details)
                return res.status(422).send(errorMsg)
            }
            next()

        } catch (error) {

            res.status(500).send(error.message)
        }

    }
}