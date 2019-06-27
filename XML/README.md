# gulp-etl-recipes #

A test project full of working gulpfiles, the goal here is to demonstrate some of the many uses of the **[gulp-etl](https://gulpetl.com/)** system.

**gulp-etl** plugins process [ndjson](http://ndjson.org/) data streams/files which we call **Message Streams** and which are compliant with the [Singer specification](https://github.com/singer-io/getting-started/blob/master/docs/SPEC.md#output). Message Streams look like this:

```
{"type": "SCHEMA", "stream": "users", "key_properties": ["id"], "schema": {"required": ["id"], "type": "object", "properties": {"id": {"type": "integer"}}}}
{"type": "RECORD", "stream": "users", "record": {"id": 1, "name": "Chris"}}
{"type": "RECORD", "stream": "users", "record": {"id": 2, "name": "Mike"}}
{"type": "SCHEMA", "stream": "locations", "key_properties": ["id"], "schema": {"required": ["id"], "type": "object", "properties": {"id": {"type": "integer"}}}}
{"type": "RECORD", "stream": "locations", "record": {"id": 1, "name": "Philadelphia"}}
{"type": "STATE", "value": {"users": 2, "locations": 1}}
```

##### Sample gulpfile.js
```
let handleLines = require('gulp-etl-handlelines')

const handleLine = (lineObj) => {
    // return null to remove this line
    if (!lineObj.record || !lineObj.record["TestValue"]) {return null}
    
    // optionally make changes to lineObj
    lineObj.record["NewProperty"] = "asdf"

    // return the changed lineObj
    return lineObj
}

exports.default = function() {
    return src('data/*.ndjson')
    // pipe the files through our handlelines plugin
    .pipe(handlelines.handlelines({}, { transformCallback: handleLine }))
    .pipe(dest('output/'));
}
```
**xml2json**
The readme for how to use xml2json plugin in the gulp file can be found below
https://github.com/Mkr1996/gulp-etl-recipes/blob/master/testdata/XML/Readme/XMLReadme.md


Note: This document is written in [Markdown](https://daringfireball.net/projects/markdown/). We like to use [Typora](https://typora.io/) and [Markdown Preview Plus](https://chrome.google.com/webstore/detail/markdown-preview-plus/febilkbfcbhebfnokafefeacimjdckgl?hl=en-US) for our Markdown work..
