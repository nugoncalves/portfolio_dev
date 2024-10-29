import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeSniplet() {
	const codeString = `function transform( { oldBookSeller } ) {
  oldBookSeller.learnTools();
  oldBookSeller.developSelfSolution();
  oldBookSeller.learnMoreTools();
  oldBookSeller.digDeaper();

  passionateCoder = oldBookSeller

  return passionateCoder
}

newNuno = transform( { oldBookSeller: Nuno } );`;
	return (
		<div className="border border-teal-800/0 bg-black rounded-xl">
			<SyntaxHighlighter
				language="jsx"
				style={gruvboxDark}
				showLineNumbers
			>
				{codeString}
			</SyntaxHighlighter>
		</div>
	);
}
