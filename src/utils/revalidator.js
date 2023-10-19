const revalidator = require("revalidator");
const schemaValidator = (schema) => (value) => {
    const results = revalidator.validate(value, schema);
    if(!results.valid) throw new Error(JSON.stringify(results.errors))
}
module.exports = {
    schemaValidator
}