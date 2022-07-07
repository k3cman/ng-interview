import React from 'react'

import SyntaxHighlighter from 'react-syntax-highlighter';

import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { MEDIOR_CODE } from '../data/medior-code';


const Medior = () => {
  return (
    <div className="w-3/4 mx-auto">
        <p className="font-mono font-bold text-slate-800 mt-10">Template</p>
        <SyntaxHighlighter className="mt-1" showLineNumbers={true} wrapLines={true} wrapLongLines={true} codeTagPros={{fontSize: "14"}} language="typescript" style={atomOneDark}>{ MEDIOR_CODE.template}</SyntaxHighlighter>
        <p className="font-mono font-bold text-slate-800 mt-10">Component</p>
        <SyntaxHighlighter className="mt-1" showLineNumbers={true} wrapLines={true} wrapLongLines={true} codeTagPros={{fontSize: "14"}} language="typescript" style={atomOneDark}>{ MEDIOR_CODE.component}</SyntaxHighlighter>
    </div>
  )
}

export default Medior