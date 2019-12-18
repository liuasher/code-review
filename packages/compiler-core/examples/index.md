
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

-------------------

- codeframes.ts
根据*template*，返回*template*的一部分
并提供了3个测试用例，测试的方法是*generateCodeFrame*

- codegen.ts
根据*node(root)*，来生成对应的*code*，主要是*render*方法
提供了许多测试用例。测试的方法是*generate*

- complie.ts
根据*template*，来生成对应的渲染*code*，主要是*render*方法
提供了许多测试用例。测试的方法是*compile*

- parse.ts
根据*html*，来生成对应的*code*，主要是*parse*等方法

- transform.ts


## 单元测试
- codeframes.spec.js
- codegen.spec.js
- complie.spec.js
- parse.spec.js





