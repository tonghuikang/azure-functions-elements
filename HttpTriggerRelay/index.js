var parser = require("azure-func-multipart-parser");
var localImports = require("../modules/local-imports.js")
const FormData = require("form-data");

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    var {files, fields} = parser.parse(req);
    context.log(fields);

    let formData = new FormData();
    for (var key in fields) {
        formData.append(key, fields[key]);
    }

    for (var key in files) {
        console.log(files);
        formData.append(key, Buffer.from(files[key]["content"]),{
            filename: files[key]["filename"],
            contentType: files[key]["type"],
        });
    }

    let result = localImports.postFormData(formData, "https://enve4l0vhcsxf.x.pipedream.net/")

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: fields
    };
};