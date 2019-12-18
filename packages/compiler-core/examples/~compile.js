const { baseCompile } = require('../js/compiler-core/src/index')
// const { SourceMapConsumer, RawSourceMap } = require('source-map')
const compile = baseCompile


function getPositionInCode(code, token, expectName){
  const generatedOffset = code.indexOf(token)
  let line = 1
  let lastNewLinePos = -1
  for (let i = 0; i < generatedOffset; i++) {
    if (code.charCodeAt(i) === 10 /* newline char code */) {
      line++
      lastNewLinePos = i
    }
  }
  const res= {
    line,
    column:
      lastNewLinePos === -1
        ? generatedOffset
        : generatedOffset - lastNewLinePos - 1
  }
  if (expectName) {
    res.name = typeof expectName === 'string' ? expectName : token
  }
  return res
}

/**
 * @param { Number 001 }
 * @function compile 
 * 方法入参：source、参数
 * 方法出参：
 * 方法总结：
 *    1、
 */
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

const source008 = `<div>hello world</div>`
const { code: code8, map: map8 } = compile(source008, {
  sourceMap: false,
  filename: `foo.vue`
})

console.log(111, code8)


const { code: code1, map: map1 } = compile(source, {
  sourceMap: true,
  filename: `foo.vue`
})

const output001 = function () {
  /** compile函数返回结果 */
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
  /** compile函数返回结果 */
}



/**
 * not supported in this build of compiler
 * @param { Number 002 }
 * @function compile 
 * not supported in this build of compiler
 */
const { code: code2, map: map2 } = compile(source, {
  sourceMap: true,
  filename: `foo.vue`,
  prefixIdentifiers: true
})
const { code: code3, map: map3 } = compile(source, {
  mode: 'module',
  sourceMap: true,
  filename: `foo.vue`
})
