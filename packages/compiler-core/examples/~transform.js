const { parse } = require('../js/compiler-core/src/parse')
const { transform, NodeTransform } = require('../js/compiler-core/src/transform')
const { ElementNode, NodeTypes, DirectiveNode, ExpressionNode } = require('../js/compiler-core/src/ast')
const { transformIf } = require('../js/compiler-core/src/transforms/vIf')
const { transformFor } = require('../js/compiler-core/src/transforms/vFor')
const { transformElement } = require('../js/compiler-core/src/transforms/transformElement')
const { transformSlotOutlet } = require('../js/compiler-core/src/transforms/transformSlotOutlet')

/**
 * @param { Number 001 }
 * @function parse 
 * 方法入参：
 * 方法出参：
 * 方法总结：
 *    1、
 */
const ast001 = parse(`<div v-for="i in list">hello world</div>`)


// console.log(JSON.stringify(ast001))

const calls001 = []
const plugin001 = (node, context) => {
  calls001.push([node, Object.assign({}, context)])
}

console.log(JSON.stringify(ast001))

transform(ast001, {
  nodeTransforms: [plugin001]
})
const div001 = ast001.children[0] 
// console.log(JSON.stringify(ast001))



/**
 * 这里我们关注的结果有两个
 * 1、calls001
 * 2、div001
 */



/**
 * @param { parse(`<div>hello {{ world }}</div>`) 返回的结果 }
 * @param { ast } 
 * 有点长
 */
const ast001_res = {
  "type":1,
  "ns":0,
  "tag":"div",
  "tagType":0,
  "props":[],
  "isSelfClosing":false,
  "children":[
    {
      "type":2,
      "content":"hello ",
      "loc":{
        "source":"hello "
      }
    },
    {
      "type":5,
      "content":{
        "type":4,
        "isStatic":false,
        "isConstant":false,
        "content":"world",
        "loc":{
          "source":"world"
        }
      },
      "loc":{
        "source":"{{ world }}"
      }
    }
  ],
  "loc":{
    "source":"<div>hello {{ world }}</div>"
  }
} 


const TEMPLATE_CHILDREN = {
  "type":1,
  "tag":"div",
  "children": [
    { 
      "type":2, 
      "content":"hello ",  
    },
    { 
      "type":5, 
      "content":{ 
        "type":4, 
        "isStatic":false, 
        "isConstant":false, 
        "content":"world" 
      } 
    }
  ]
}

const TEMPLATE_SCOPES = {
  "vFor":0,
  "vSlot":0,
  "vPre":0,
  "vOnce":0
}


/**
 * @param { 来看看calls里面是什么样子 }
 * @param { 这是一个长度为4的数组 } 为什么是4?
 */

/**
 * @param { NodeTypes }
 * @param { 0 } root 根节点
 * @param { 1 } root 元素
 * @param { 2 } text 文本节点
 * @param { 4 } simple_expression 表达式
 * @param { 5 } interpolation 插值
 */ 
const template = `<div>hello {{ world }}</div>`
const calls001_res = [


  [
    {
      "type":0,
      "children": [TEMPLATE_CHILDREN],
      "codegenNode": TEMPLATE_CHILDREN
    },
    {
      "root": {
        "type":0,
        "children": [TEMPLATE_CHILDREN],
        "codegenNode": TEMPLATE_CHILDREN
      },
      "scopes": TEMPLATE_SCOPES,
      "parent": null,
      "currentNode": {
        "type":0,
        "children": [TEMPLATE_CHILDREN],
        "codegenNode": TEMPLATE_CHILDREN,
      },
      "childIndex":0
    }
  ],


  [
    TEMPLATE_CHILDREN,
    {
      "root":{
        "type":0,
        "children": [TEMPLATE_CHILDREN],
        "codegenNode": TEMPLATE_CHILDREN
      },
      "scopes": TEMPLATE_SCOPES,
      "parent":{
        "type":0,
        "children": [TEMPLATE_CHILDREN],
        "codegenNode": TEMPLATE_CHILDREN,
      },
      "currentNode": TEMPLATE_CHILDREN,
      "childIndex":0
    }
  ],
  
  
  [
    {
      "type":2,
      "content":"hello ",
    },
    {
      "root":{
        "type":0,
        "children":[TEMPLATE_CHILDREN],
        "codegenNode": TEMPLATE_CHILDREN
      },
      "scopes": TEMPLATE_SCOPES,
      "parent": TEMPLATE_CHILDREN,
      "currentNode":{
        "type":2,
        "content":"hello ",
      },
      "childIndex":0
    }
  ],
  
  
  [
    {
      "type":5,
      "content":{
        "type":4,
        "isStatic":false,
        "isConstant":false,
        "content":"world"
      }
    },
    {
      "root":{
        "type":0,
        "children": [TEMPLATE_CHILDREN],
        "codegenNode": TEMPLATE_CHILDREN,
      },
      "scopes": TEMPLATE_SCOPES,
      "parent": TEMPLATE_CHILDREN,
      "currentNode":{
        "type":5,
        "content":{
          "type":4,
          "isStatic":false,
          "isConstant":false,
          "content":"world"
        }
      },
      "childIndex":1
    }
  ]
]