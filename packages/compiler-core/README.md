

# compiler-core

## 简介
- ast         约束Node
- codegen     Node -> Code
- complie     Template -> Code
- parse       Template -> Node
- transform   Node -> 
- utils


## ast
总结：
  总的来说就是对Node类型的创建于约束。

作用：
  1、约束Node，定义了NodeTypes、ElementTypes

注意：
  Expression与Node，都是节点类型

代码：
```ts
// 比较简单
export const enum ElementTypes {
  ELEMENT,
  COMPONENT,
  SLOT,
  TEMPLATE,
  PORTAL, // 新特性
  SUSPENSE // 新特性
}

// emmm，似乎明白
export const enum NodeTypes {
  ROOT, 
  ELEMENT, 
  TEXT, 
  COMMENT,
  ATTRIBUTE, 
  DIRECTIVE, 
  COMPOUND_EXPRESSION,
  IF, 
  IF_BRANCH, 
  JS_ARRAY_EXPRESSION, 
  JS_FUNCTION_EXPRESSION, 
  ...
}

// 定义了一些节点
export interface Node {
  type: NodeTypes
  loc: SourceLocation
}
export interface RootNode extends Node {
  type: NodeTypes.ROOT
  children: TemplateChildNode[]
  helpers: symbol[]
  components: string[]
  directives: string[]
  hoists: JSChildNode[]
  cached: number
  codegenNode: TemplateChildNode | JSChildNode | undefined
}


// 归类了一些节点（Node类型）
export type ParentNode = RootNode | ElementNode | IfBranchNode | ForNode
export type TemplateChildNode = ElementNode | InterpolationNode
  | CompoundExpressionNode
  | TextNode | CommentNode | IfNode | ForNode | TextCallNode
// 归类了一些节点（Expression类型）
export type JSChildNode =
  | CallExpression
  | ObjectExpression
  | ArrayExpression
  | ExpressionNode
  | FunctionExpression
  | ConditionalExpression
  | SequenceExpression
  | CacheExpression

// 暴露了一些构造方法
export function createArrayExpression(
  elements: ArrayExpression['elements'],
  loc: SourceLocation = locStub
): ArrayExpression {
  return {
    type: NodeTypes.JS_ARRAY_EXPRESSION,
    loc,
    elements
  }
}

// 暴露了一些接口（Expression类型）
export interface ArrayExpression extends Node {
  type: NodeTypes.JS_ARRAY_EXPRESSION
  elements: Array<string | JSChildNode>
}
// 暴露了一些接口（Node类型）
export interface TextNode extends Node {
  type: NodeTypes.TEXT
  content: string
}

```

---------------------------------------------------------------

### codegen.ts
总结：
  主要是generate方法，它是编译的最后一步，他的作用就是把ast转换成可执行的代码。

作用：
  1、Node -> Code，根据ast生成code

注意：
  

代码：
```ts

function generate(ast: RootNode, options: CodegenOptions = {}): CodegenResult {

}
// CodegenOptions 参数格式
export interface CodegenOptions {
  mode?: 'module' | 'function'
  prefixIdentifiers?: boolean
  sourceMap?: boolean
  filename?: string
}

// CodegenResult 返回格式
export interface CodegenResult {
  code: string
  ast: RootNode
  map?: RawSourceMap
}

// 测试用例
const root = { 
  type: 0,
  helpers: [ CREATE_VNODE, RESOLVE_DIRECTIVE ],
  codegenNode: { 
    type: 4,
    loc: [null],
    isConstant: false,
    content: 'null',
    isStatic: false 
  },
  loc: 'USELESS2' 
}
const untest002 = generate(root, { mode: 'function' })
const output002 = { 
  ast: { 
    root
  },
  code: `
    const _Vue = Vue
    return function render() {
      with (this) {
        const { 
          createVNode: _createVNode , 
          resolveDirective: _resolveDirective 
        } = _Vue
        return null
      }
    }`,
  map: undefined 
}
```

---------------------------------------------------------------

### complie.ts (baseCompile)
总结：
  主要是compile方法，他的作用就是把vue-template装换成code

作用：
  1、Template -> Code，根据template生成node

注意：
  1、complie返回结果，与codegen是同一类型（CodegenResult）
  

代码：
```ts

export function baseCompile(
  template: string | RootNode,
  options: CompilerOptions = {}
): CodegenResult {
  // 调用了transform方法
  transform(ast, { ...options })
  // 调用了generate方法
  return generate(ast, {
    ...options,
    prefixIdentifiers
  })
}

export interface CodegenResult {
  code: string
  ast: RootNode
  map?: RawSourceMap
}

// 看看测试用例
const source = `
  <div id="foo" :class="bar.baz">
    {{ world.burn() }}
    <div v-if="ok">yes</div>
    <template v-else>no</template>
    <div v-for="(value, index) in list">
      <span>{{ value + index }}</span>
    </div>
  </div>
`.trim()

const { code: code1, map: map1 } = compile(source, {
  sourceMap: true,
  filename: `foo.vue`
})

const output001 = function () {
  /** 
   * compile函数返回结果，是一个字符串
   */
  return function render() {
    with (this) {
      return (_openBlock(), _createBlock("div", {
        id: "foo",
        class: bar.baz
      }, [
        _createTextVNode(_toString(world.burn()) + " ", 1 /* TEXT */),
        (_openBlock(), ok
          ? _createBlock("div", { key: 0 }, "yes")
          : _createBlock(_Fragment, { key: 1 }, ["no"])),
        (_openBlock(false), _createBlock(_Fragment, null, _renderList(list, (value, index) => {
          return (_openBlock(), _createBlock("div", null, [
            _createVNode("span", null, _toString(value + index), 1 /* TEXT */)
          ]))
        }), 128 /* UNKEYED_FRAGMENT */))
      ], 2 /* CLASS */))
    }
  }
  /** 
   * compile函数返回结果
   */
}
```

---------------------------------------------------------------

### parse.ts
总结：
  主要是parse方法，它的作用是把template片段转换成Node

作用：
  1、Template片段 -> Node，根据template片段解析出ast

注意：
  1、{ offset: 0, line: 1, column: 1 }的解析规则，如何计算的？
  2、这是重点查看的方法

代码：
```ts

export function parse(content, options): RootNode {
  return {
    type: NodeTypes.ROOT,
    children: parseChildren(context, TextModes.DATA, []),
    loc: getSelection(context, start)
  }
}

function parseChildren(
  context: ParserContext,
  mode: TextModes,
  ancestors: ElementNode[]
): TemplateChildNode[] {
  
}

function getSelection(
  context: ParserContext,
  start: Position,
  end?: Position
): SourceLocation {
  end = end || getCursor(context)
  return {
    start,
    end,
    source: context.originalSource.slice(start.offset, end.offset)
  }
}


```

---------------------------------------------------------------

### transform.ts
总结：
 

作用：
  1、调用transform方法，传入一个Node

注意：
  

代码：
```ts

// 回顾一些root-node
export interface RootNode extends Node {
  type: NodeTypes.ROOT
  children: TemplateChildNode[]
  helpers: symbol[]
  components: string[]
  directives: string[]
  hoists: JSChildNode[]
  cached: number
  codegenNode: TemplateChildNode | JSChildNode | undefined
}

// 1、无返回指的函数，
// 2、无返回值函数的数组
// 3、参数可以有，但是只能为(RootNode, TransformContext)
export type NodeTransform = (
  node: RootNode | TemplateChildNode,
  context: TransformContext
) => void | (() => void) | (() => void)[]


export function transform(root: RootNode, options: TransformOptions) {
  const context = createTransformContext(root, options)
  traverseNode(root, context)
  if (options.hoistStatic) {
    hoistStatic(root, context)
  }
  finalizeRoot(root, context)
}


export function traverseNode(
  node: RootNode | TemplateChildNode,
  context: TransformContext
) {}


function finalizeRoot(root: RootNode, context: TransformContext) {
  root.helpers = [...context.helpers]
  root.components = [...context.components]
  root.directives = [...context.directives]
  root.hoists = context.hoists
  root.cached = context.cached
}


```

---------------------------------------------------------------

### utils.ts
总结：
 

作用：
  1、

注意：
  

代码：
```ts

```

---------------------------------------------------------------


