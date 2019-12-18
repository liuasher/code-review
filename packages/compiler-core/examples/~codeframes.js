const { generateCodeFrame } = require('../js/compiler-core/src/codeframe')

const source = `
  <div>
    <template key="one"></template>
    <ul>
      <li v-for="foobar">hi</li>
    </ul>
    <template key="two"></template>
  </div>
`.trim()

/**
 * @param { Number 001 }
 * @function generateCodeFrame 
 * 方法入参：
 * 方法出参：
 * 方法总结：
 *    1、
 */
const keyStart = source.indexOf(`key="one"`)
const keyEnd = keyStart + `key="one"`.length
const output001 = generateCodeFrame(source, keyStart, keyEnd)

// <div>
//     <template key="one"></template>
//     <ul>
//       <li v-for="foobar">hi</li>




/**
 * @param { Number 002 }
 * @function generateCodeFrame 
 * 方法入参：
 * 方法出参：
 * 方法总结：
 *    1、
 */
const forStart = source.indexOf(`v-for=`)
const forEnd = forStart + `v-for="foobar"`.length
const output002 = generateCodeFrame(source, keyStart, keyEnd)

//     <template key="one"></template>
//     <ul>
//       <li v-for="foobar">hi</li>
//     </ul>
//     <template key="two"></template>



/**
 * @param { Number 003 }
 * @function generateCodeFrame 
 * 方法入参：
 * 方法出参：
 * 方法总结：
 *    1、
 */
const keyStart1 = source.indexOf(`key="two"`)
const keyEnd1 = keyStart1 + `key="two"`.length
const output003 = generateCodeFrame(source, keyStart, keyEnd)

//        <li v-for="foobar">hi</li>
//     </ul>
//     <template key="two"></template>
//   </div>

/**
 * @summary 
 * 总的来说，都是一些对字符串模板的截取
 * 看到这里，我们可以开始看generateCodeFrame方法了
 */

function _generateCodeFrame(ast, options = {}){
  // 根据ast生成code
}
