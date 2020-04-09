import React from "react";
import Head from "next/head";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { Browser, Terminal, MacTerminal } from "../src";

class App extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>react-window-ui 🖼✨</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <style>{`
            html {
                min-height: 100%;
                background-image: linear-gradient(-225deg, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%);
            }
            a {
                color: #000;
            }
            a:hover {
                    background:#fc929e;
                }
            h1 {
                font-size: 2.5em;
            }
            h2 {
                border-bottom: 3px solid #000;
            }
            code {
                font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
                background:rgba(255,255,255,0.7);
                color: black;
            }
            ::-moz-selection { background: #fc929e; color: #000;}
            ::selection { background: #fc929e; color: #000; }
            ul li, ol li {
              line-height:140%; 
            }
            table {
              border-collapse: collapse;
              background:rgba(255,255,255,0.7);
          }

          th,
          td {
              border: 1px solid #000;
              padding: 0.75rem;
              text-align: left;
          }

          th {
              font-weight: bold;
              white-space: nowrap;
              background: #000;
              color: #fff;
          }

          tr:first-of-type th:not(:last-child) {
              border-right-color: transparent;
          }

          tr:first-child th:first-child,
          tr:not(:first-child):not(:last-child) th {
              border-bottom-color: transparent !important;
          }
    `}</style>

        <div
          style={{
            fontFamily:
              "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "900px",
            padding: "1em",
          }}
        >
          <h1>react-window-ui 🖼✨</h1>
          <p>
            <a
              style={{ borderBottom: "none" }}
              target="_blank"
              href="https://travis-ci.org/coston/react-window-ui"
            >
              <img
                src="https://img.shields.io/travis/coston/react-window-ui.svg"
                alt="Travis"
              />
            </a>
            &nbsp;
            <a
              style={{ borderBottom: "none" }}
              target="_blank"
              href="https://www.npmjs.com/package/react-window-ui"
            >
              <img
                src="https://badge.fury.io/js/react-window-ui.svg"
                alt="npm version"
              />
            </a>
            &nbsp;
            <a
              style={{ borderBottom: "none" }}
              target="_blank"
              href="https://www.npmjs.com/package/react-window-ui"
            >
              <img
                src="https://img.shields.io/npm/dm/react-window-ui.svg"
                alt="npm"
              />
            </a>
            &nbsp;
          </p>
          <LiveProvider
            code={headerCode}
            scope={{
              Browser,
              Terminal,
              MacTerminal,
            }}
          >
            <div
              style={{
                height: "auto",
                minWidth: "100%",
                marginBottom: "2em",
              }}
            >
              <div>
                <h2>Try Me</h2>
                <div>
                  <LivePreview />
                </div>
              </div>
            </div>
            <h2>Live Code</h2>
            <Terminal boxShadow="none">
              <LiveEditor
                aria-describedby="Live Code Editor"
                theme={theme}
                style={{
                  background: "black",
                  overflow: "scroll",
                }}
              />
              <LiveError />
            </Terminal>
          </LiveProvider>

          <h2 id="usage">Install</h2>

          <p>
            <code>npm install react-window-ui --save</code>
          </p>

          <h2>Documentation</h2>
          <p>
            <a href="https://github.com/coston/react-window-ui">
              View documentation on GitHub
            </a>
          </p>
          <div className="hint" />
        </div>
      </div>
    );
  }
}

export default App;

const theme /*: PrismTheme */ = {
  plain: {
    color: "#fc929e",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
      style: {
        color: "#fc929e",
      },
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ["tag", "operator", "number"],
      style: {
        color: "#fff",
      },
    },
    {
      types: ["property", "function"],
      style: {
        color: "#9a86fd",
      },
    },
    {
      types: ["tag-id", "selector", "atrule-id"],
      style: {
        color: "#fff",
      },
    },
    {
      types: ["attr-name"],
      style: {
        color: "#fff",
      },
    },
    {
      types: [
        "boolean",
        "string",
        "entity",
        "url",
        "attr-value",
        "keyword",
        "control",
        "directive",
        "unit",
        "statement",
        "regex",
        "at-rule",
        "placeholder",
        "variable",
      ],
      style: {
        color: "#fc929e",
      },
    },
    {
      types: ["deleted"],
      style: {
        textDecorationLine: "line-through",
      },
    },
    {
      types: ["inserted"],
      style: {
        textDecorationLine: "underline",
      },
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic",
      },
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold",
      },
    },
    {
      types: ["important"],
      style: {
        color: "#6c6783",
      },
    },
  ],
};

const headerCode = `
<div>
  <Browser resize height="22em">
    <h3>Browser</h3>
    <p>Use {'<Browser/>'} to frame browser content!</p>
  </Browser>
  <br/>
  <Terminal resize height="22em">
    <h3>Terminal</h3>
    <p>Use {'<Terminal/>'} to frame terminal content!</p>
  </Terminal>
  <br/>
    <MacTerminal>
    <h3>MacTerminal</h3>
    <p>Use {'<MacTerminal/>'} to frame terminal content!</p>
  </MacTerminal>
</div>
`.trim();
