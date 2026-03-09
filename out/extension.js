"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = require("vscode");
const hoverData_1 = require("./hoverData");
function activate(context) {
    console.log("GCODE-KineticNC activated");
    const hoverProvider = vscode.languages.registerHoverProvider({ language: "gcode-kineticnc" }, {
        provideHover(document, position) {
            const lineText = document.lineAt(position.line).text;
            const charUnderCursor = lineText[position.character];
            if (charUnderCursor === "%") {
                const doc = hoverData_1.hoverDocs["%"];
                if (!doc) {
                    return undefined;
                }
                const markdown = new vscode.MarkdownString();
                markdown.appendMarkdown(`**${doc.title}**`);
                if (doc.syntax) {
                    markdown.appendMarkdown(`\n\n**Syntax**\n`);
                    markdown.appendCodeblock(doc.syntax, "plaintext");
                }
                if (doc.example) {
                    const examples = Array.isArray(doc.example)
                        ? doc.example
                        : [doc.example];
                    markdown.appendMarkdown(`\n\n**Example${examples.length > 1 ? "s" : ""}**\n`);
                    for (const ex of examples) {
                        markdown.appendCodeblock(ex, "plaintext");
                    }
                }
                markdown.appendMarkdown(`\n${doc.body}`);
                if (doc.notes) {
                    markdown.appendMarkdown(`\n\n**Notes**\n${doc.notes}`);
                }
                const percentRange = new vscode.Range(position.line, position.character, position.line, position.character + 1);
                return new vscode.Hover(markdown, percentRange);
            }
            const range = document.getWordRangeAtPosition(position, /#[A-Za-z0-9]+|[A-Za-z][A-Za-z0-9]*/);
            if (!range) {
                return undefined;
            }
            const rawWord = document.getText(range).toUpperCase();
            const word = normalizeHoverKey(rawWord);
            const doc = hoverData_1.hoverDocs[word];
            if (!doc) {
                return undefined;
            }
            const markdown = new vscode.MarkdownString();
            markdown.appendMarkdown(`**${doc.title}**`);
            if (doc.syntax) {
                markdown.appendMarkdown(`\n\n**Syntax**\n`);
                markdown.appendCodeblock(doc.syntax, "plaintext");
            }
            if (doc.example) {
                const examples = Array.isArray(doc.example)
                    ? doc.example
                    : [doc.example];
                markdown.appendMarkdown(`\n\n**Example${examples.length > 1 ? "s" : ""}**\n`);
                for (const ex of examples) {
                    markdown.appendCodeblock(ex, "plaintext");
                }
            }
            markdown.appendMarkdown(`\n${doc.body}`);
            if (doc.notes) {
                markdown.appendMarkdown(`\n\n**Notes**\n${doc.notes}`);
            }
            return new vscode.Hover(markdown, range);
        },
    });
    context.subscriptions.push(hoverProvider);
}
function deactivate() { }
function normalizeHoverKey(word) {
    if (/^#I\d+$/.test(word)) {
        return "#I";
    }
    if (/^#O\d+$/.test(word)) {
        return "#O";
    }
    if (/^#90[0-9]$/.test(word)) {
        return word;
    }
    if (word === "#0") {
        return "#0";
    }
    if (/^#\d+$/.test(word)) {
        return "#";
    }
    if (/^[FST]\d+(\.\d+)?$/.test(word)) {
        return word.charAt(0);
    }
    return word;
}
//# sourceMappingURL=extension.js.map