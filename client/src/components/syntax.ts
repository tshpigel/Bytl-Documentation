export const syntaxB: { [k: string]: string } = {
    "(\"[^\"]*\"|'[^']*')":"str", // ovd
    "(\\/)(?!span>)":"oper",
    "(?<!<span class)(=)": "oper",
    "\\b(source|glob)\\b": "var",
    "(?<=[^a-zA-Z0-9][bremcup]+\\{\\s*)(.*)(?=\\s*\\})": "isblock",
    "(?<![a-zA-Z0-9])([bremcup]+)(?=\\{)":"sblock",
    "\\b(num|int|dec|sc|char|arr|vect|coll|uni|bool|val|assoc|res|in|stream|exc|proc|alg|fnc|json|ambg|localize|complex|anonm|cmacro|(?:[dfgrs]type|context|rel)(?!\\n*=))\\b":"decl",
    "\\b(math|rnd|time)\\b": "rel",
    "\\b(if|while|for|efor|rn|else|eif|welse|switch|def|sysc|elw|cycle|cont|br|skip|case|regress|next)\\b":"keyword",
    "\\b(Set|Event|When|Mute|Dtype|Ktype|Args|Nilq|Enable|Ship|Infer|Strict|That|Apply|Alias|Expunge|Soc|Crt|Adj|Serialize|Augment|Coerce)\\b":"meth",
    "(?<=:\\s*)([a-zA-Z0-9]+)":"rel",
    "(?<=#\\s*)([a-zA-Z0-9]+)":"const",
    "(?<=_\\s*)([a-zA-Z0-9]+)":"meth",
    "\\b(tru(?:e|thy)|fals(?:e|y)|lack|nil)\\b":"spec",
    "(?<![a-zA-Z])(-?\\d+(?:\\.\\d+)?)\\b":"num",
    "(&gt;&gt;)":"specKey", // ovd
    "([\\[\\](){}]|&(?:(?<!\\\\)[lg])t;)":"brac",
    "(\\^\\^.*|`(?:[^`]|\\n)*`)":"comm", // ovd,
    "(?<=\\.)([a-z]+)":"ktype",
    "([@!#%$_^*:,~?\\-+]|&amp;|\\.\\.)":"oper",
    "(\\\\)":"delim"
};

export const syntaxT: { [k: string]: string } = {
    "(\"[^\"]*\"|'[^']*')":"str", // ovd
    // "(\\/)(?!span>)":"oper",
    "(?<!<span class)(=+)": "oper",
    "\\b(let|const|type|interface)\\b":"decl",
    "\\b(unknown|any|number|string|boolean|JSON|RegExp|void)\\b": "rel",
    "\\b(if|while|for|return|else|switch|continue|break|case|as|function)\\b":"keyword",
    // "\\b(Set|Event|When|Mute|rn|Dtype|Ktype|Args|Nilq|Enable|Ship|Infer|Strict|That|Apply|Alias|Expunge|Soc|Crt|Adj|Serialize|Augment|Coerce)\\b":"meth",
    "(?<=\\.\\s*)([a-zA-Z0-9]+)(?!\\w*\\()":"const",
    "([a-zA-Z0-9]+(?=\\())": "meth",
    "\\b(true|false|null)\\b":"spec",
    "(?<![a-zA-Z])(-?\\d+(?:\\.\\d+)?)\\b":"num",
    // "(&gt;&gt;)":"specKey", // ovd
    "(//.*)":"comm", // ovd
    "([@!#%$^*~?:\\-+]|&amp;&amp;|\\.\\.)":"oper",
    "([\\[\\](){}]|(?<!=)&(?:(?<!\\\\)[lg])t;)":"brac",
    "(=&gt;)": "aoper",
    "\\b(Deno|glob)\\b": "var",
    // "(?<=\\.)([a-z]+)":"ktype",
}