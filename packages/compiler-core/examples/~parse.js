const { parse, ParserOptions, TextModes } = require('../js/compiler-core/src/parse')
const { ErrorCodes } = require('../js/compiler-core/src/errors')
const { 
  CommentNode,
  ElementNode,
  ElementTypes,
  Namespaces,
  NodeTypes,
  Position,
  TextNode,
  AttributeNode,
  InterpolationNode
 } = require('../js/compiler-core/src/ast')


/**
 * @param { Number 001 }
 * @function parse 
 * 方法入参：
 * 方法出参：
 * 方法总结：
 *    1、
 */
const ast001 = parse('some text')
const output001 = ast001.children[0]
const result001 = { 
  type: 2,
  content: 'some text',
  loc: { 
    start: { column: 1, line: 1, offset: 0 },
    end: { column: 10, line: 1, offset: 9 },
    source: 'some text' 
  } 
}



/**
 * @param { Number 002 }
 * @function parse
 * @function Interpolation 
 * 方法入参：
 * 方法出参：
 * 方法总结：
 *    1、
 */
const ast002 = parse('{{message}}')
const output002 = ast002.children[0]
const result002 = { 
  type: 5,
  content: { 
    type: 4,
    isStatic: false,
    isConstant: false,
    content: 'message',
    loc: { 
      start: [Object], 
      end: [Object], 
      source: 'message' 
    } 
  },
  loc: { 
    start: { column: 1, line: 1, offset: 0 },
    end: { column: 12, line: 1, offset: 11 },
    source: '{{message}}' 
  } 
}



/**
 * @param { Number 003 }
 * @function parse
 * @function Comment 
 * 方法入参：
 * 方法出参：
 * 方法总结：
 *    1、
 */
const ast003 = parse('<!--abc-->')
const output003 = ast003.children[0]
console.log(output003)
const result003 = { 
  type: 3,
  content: 'abc',
  loc: { 
    start: { column: 1, line: 1, offset: 0 },
    end: { column: 11, line: 1, offset: 10 },
    source: '<!--abc-->' 
  } 
}

/**
 * @param { Number 004 }
 * @function parse
 * @function Comment 
 * 方法入参：
 * 方法出参：
 * 方法总结：
 *    1、
 */
const ast004 = parse('<div>hello</div>')
const output004 = ast004.children[0]
const result004 = { 
  type: 1,
  ns: 0,
  tag: 'div',
  tagType: 0,
  props: [],
  isSelfClosing: false,
  children: [{ 
    type: 2, 
    content: 'hello', 
    loc: [Object] 
  }],
  loc: { 
    start: { column: 1, line: 1, offset: 0 },
    end: { column: 17, line: 1, offset: 16 },
    source: '<div>hello</div>' 
  },
  codegenNode: undefined 
}