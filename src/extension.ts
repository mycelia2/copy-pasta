import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('copy-pasta.copyOpenFiles', async () => {
        let allOpenFilesContent = '';

        for (let doc of vscode.workspace.textDocuments) {
            const filePath = doc.uri.fsPath;
            
            if (doc.isUntitled || filePath.includes('.git')) { // Skip unsaved/untitled documents or files within '.git' directory
                continue;
            }

            try {
                const fileContent = doc.getText();
                const languageId = doc.languageId;
                allOpenFilesContent += `File Path(relative): "${filePath}"\n\n\`\`\`${languageId}\n${fileContent}\n\`\`\`\n\n`;
            } catch (error) {
                console.error(error);
                vscode.window.showErrorMessage(`Failed to copy content from file: ${filePath}`);
                return; // If any error occurs, stop copying and show an error message
            }
        }

        await vscode.env.clipboard.writeText(allOpenFilesContent);
        vscode.window.showInformationMessage('Copied all open files to clipboard!');
    });

    context.subscriptions.push(disposable);
}
