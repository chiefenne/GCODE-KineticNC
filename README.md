# GCODE-KineticNC

VS Code language support for KinetiC-NC G-code.

## Features

- Syntax highlighting
- File associations for KinetiC-NC programs
- Foundation for future hover/help support

## Supported file extensions

- `.nc`
- `.cnc`
- `.gcode`

## Optional user token color customizations

If you want additional styling beyond the default syntax grammar, add this to your VS Code user settings (`settings.json`):

```json
"editor.tokenColorCustomizations": {
	"textMateRules": [
		{
			"scope": [
				"comment.block.gcode-kineticnc",
				"comment.line.semicolon.gcode-kineticnc",
				"comment.block.preamble.gcode-kineticnc"
			],
			"settings": {
				"fontStyle": "italic"
			}
		},
		{
			"scope": "keyword.control.gcode-kineticnc",
			"settings": {
				"fontStyle": "bold"
			}
		},
		{
			"scope": "entity.name.label.gcode-kineticnc",
			"settings": {
				"foreground": "#e91b1b",
				"fontStyle": "bold"
			}
		}
	]
}
```
