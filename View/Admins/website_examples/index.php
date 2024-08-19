<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Code Executor</title>
    <script src="TS/app.js" defer></script>
</head>
<body>
    <h1>Code Executor</h1>
    <form id="codeForm">
        <textarea id="code" placeholder="Enter your code here" rows="10" cols="50"></textarea><br>
        <select id="language">
            <option value="php">PHP</option>
            <!-- Add more languages as needed -->
        </select><br>
        <button type="submit">Save Code</button>
    </form>

    <h2>Execute Code</h2>
    <input type="number" id="snippetId" placeholder="Enter snippet ID">
    <button onclick="executeCode()">Execute</button>

    <pre id="output"></pre>

    <script>
        document.getElementById('codeForm').addEventListener('submit', async (event) => {
            event.preventDefault();
            const code = document.getElementById('code').value;
            const language = document.getElementById('language').value;
            await saveCode(code, language);
        });

        async function executeCode() {
            const snippetId = document.getElementById('snippetId').value;
            const output = await executeCode(Number(snippetId));
            document.getElementById('output').textContent = output;
        }
    </script>
</body>
</html>
