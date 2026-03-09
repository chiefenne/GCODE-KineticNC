# GCODE-KineticNC

VS Code language support for the [KinetiC-NC](https://www.cnc-step.de/cnc-software/kinetic-nc-netzwerk-steuerungssoftware/) software specific CNC G-code. KinetiC-NC is a CNC controller software from the company [CNC-Step](<https://www.cnc-step.de>).

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

## Install from VSIX

Download the packaged `.vsix` file. You can install it directly in VS Code.

### Option 1: VS Code UI

1. Open VS Code.
2. Go to Extensions (`Cmd+Shift+X` on macOS).
3. Click the `...` menu in the Extensions view.
4. Select `Install from VSIX...`.
5. Choose the provided `.vsix` file.

### Option 2: Command line

```bash
code --install-extension path/to/gcode-kineticnc-<version>.vsix
```

To upgrade, run the same command again with the newer `.vsix` file.

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
