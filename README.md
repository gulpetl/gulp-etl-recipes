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
**Sections**

- [FTP](./FTP/README.md)
- [Watch](./Watch/README.md)
- [XML](./XML/README.md)

**Adding Recipe**

When wanting to add to recipes there are 3 items needed in each folder,
1. gulpfile
2. README specific for the file, with a link to gulpfile
3. launch.json file in the sub folder. 
4. Add yourself to the sections list above

Another thing that should be present in the file is the test files needed for the recipes of the file. 
The best way to create a recipe is to copy the contents of the sample folder whose [readme](./sample/README.md) has a bit of info, and paste into a new folder named with your subject.

Note: This document is written in [Markdown](https://daringfireball.net/projects/markdown/). We like to use [Typora](https://typora.io/) and [Markdown Preview Plus](https://chrome.google.com/webstore/detail/markdown-preview-plus/febilkbfcbhebfnokafefeacimjdckgl?hl=en-US) for our Markdown work..
