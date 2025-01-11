import CodeSnippet from "react-prismjs-component";
import jsIcon from "./assets/js.svg";

function App() {
    const jsCode = `
    function hello() {
      console.log("Hello, World!");
    }
  `;

    const pythonCode = `
    def hello():
        print("Hello, World!")
  `;

    const htmlCode = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Sample Page</title>
        <style>
            .container {
                background: #f0f0f0;
                padding: 20px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Hello World!</h1>
            <p>This is a sample HTML page</p>
        </div>
    </body>
    </html>
  `;

    return (
        <div>
            <CodeSnippet
                code={jsCode}
                language="javascript"
                codeIcon={jsIcon}
            />

            {/* Python example with tomorrow theme */}
            <CodeSnippet
                code={pythonCode}
                language="python"
                codeIcon={jsIcon}
            />

            <CodeSnippet
                code={htmlCode}
                language="markup"
                theme="tomorrow"
                codeIcon={jsIcon}
            />
        </div>
    );
}

export default App;