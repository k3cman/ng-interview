import React from 'react'

import { SENIOR_CODE } from '../data/senior-code';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Senior = () => {
  return (
    <div className="w-3/4 mx-auto">
        <p className="font-mono font-bold text-slate-800 mt-10">Service</p>
        <SyntaxHighlighter className="mt-1" showLineNumbers={true} wrapLines={true} wrapLongLines={true} codeTagPros={{fontSize: "14"}} language="typescript" style={atomOneDark}>{ SENIOR_CODE.service}</SyntaxHighlighter>
        <p className="font-mono font-bold text-slate-800 mt-10">Component</p>
        <SyntaxHighlighter className="mt-1" showLineNumbers={true} wrapLines={true} wrapLongLines={true} codeTagPros={{fontSize: "14"}} language="typescript" style={atomOneDark}>{ SENIOR_CODE.component}</SyntaxHighlighter>
    </div>
  )
}

export default Senior