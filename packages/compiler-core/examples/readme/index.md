
# AST

## packages/compiler-core
主要的目录

## 目录


- ast.ts
定义了各种*node*类型，这里就枚举几个
  - CommentNode 注释节点
  - ElementNode 元素节点
  - InterpolationNode 插值节点
  ....


### codeframes.ts
```js
import { generateCodeFrame } from '../src/codeframes'
```
根据*template*，返回*template*的一部分
并提供了3个测试用例，测试的方法是*generateCodeFrame*




### codegen.ts
```js
import { 
  locStub,
  generate,
  NodeTypes,
  RootNode,
  createSimpleExpression,
  createObjectExpression,
  createObjectProperty,
  createArrayExpression,
  createCompoundExpression,
  createInterpolation,
  createSequenceExpression,
  createCallExpression,
  createConditionalExpression,
  IfCodegenNode,
  ForCodegenNode,
  createCacheExpression
  ... 
} from '../src/ast'
```
1、根据*node(root)*，来生成对应的*code*，主要是*render*方法





### complie.ts
```js
import { baseCompile as compile } from '../src/index'
```
1、根据*template*，来生成对应的渲染*code*，主要是*render*方法




### parse.ts
```js
import { parse, ParserOptions, TextModes } from '../src/parse'
import {
  CommentNode,
  ElementNode,
  ElementTypes,
  Namespaces,
  NodeTypes,
  Position,
  TextNode,
  AttributeNode,
  InterpolationNode
} from '../src/ast'
```
1、根据*html*，来生成对应的*code*，主要是*parse*等方法




### transform.ts
```js
import { parse } from '../src/parse'
import { transform, NodeTransform } from '../src/transform'
import {
  ElementNode,
  NodeTypes,
  DirectiveNode,
  ExpressionNode
} from '../src/ast'
import { transformIf } from '../src/transforms/vIf'
import { transformFor } from '../src/transforms/vFor'
import { transformElement } from '../src/transforms/transformElement'
import { transformSlotOutlet } from '../src/transforms/transformSlotOutlet'
import { transformText } from '../src/transforms/transformText'
```
1、根据*template*，调用*parse*方法，生成*ast*
2、调用*transform*，传入*ast*，生成一个*calls*数组




### utils.ts



## 单元测试
- codeframes.spec.js
- codegen.spec.js
- complie.spec.js
- parse.spec.js





