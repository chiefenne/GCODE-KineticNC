# GCODE-KineticNC

VS Code language support for KinetiC-NC G-code.

## Features

- Syntax highlighting of G-code and KinetiC-NC specific commands

## VS Code Highlighting Preview

![KinetiC-NC syntax highlighting in VS Code](assets/kineticnc-highlighting.png)

Optional: add an animated preview to show hover/tooltips or scrolling:

![KinetiC-NC syntax highlighting demo](assets/kineticnc-highlighting.gif)

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
