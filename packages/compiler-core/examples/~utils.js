const { Position } = require('../js/compiler-core/src/ast')
// const { getInnerRange, advancePositionWithClone } = require('../js/compiler-core/src/utils')

function p(line, column, offset) {
  return { column, line, offset }
}


/**
 * @param { Number 001 advancePositionWithClone}
 * 
 * 方法入参：@param {位置} 
 *          @param {代码}
 *          @param {偏移量}
 * 
 * 方法出参：@param {新的位置}
 * 
 * 方法总结：@param {解析代码}
 *    1、pos是会改变的
 */


const pos = p(1, 1, 0)
const newPos1 = advancePositionWithClone(pos, 'foo\nbar', 2)
// { column: 3, line: 1, offset: 2 }

/**
 * @param {输出结果}
 * pos:     { column: 1, line: 1, offset: 0 }
 * newPos:  { column: 3, line: 1, offset: 2 }
 */
/**
 * @param {这个方法很简单，我们可以看一下。（这里做了简化处理）}
 */ 
/**
 * @param {参数} pos  { column: 1, line: 1, offset: 0 }
 * pos.offset   0   偏移
 * pos.line     1   行数
 * pos.column   1   偏移
 * @param {字符串} source 'foo\nbar'
 * @param {往后遍历的字符个数，开区间} numberOfCharacters 2
 */

function advancePositionWithClone( pos, source, numberOfCharacters ) {
  let linesCount = 0
  let lastNewLinePos = -1
  for (let i = 0; i < numberOfCharacters; i++) {
    // '\n'的charCode值是10
    if (source.charCodeAt(i) === 10) {
      linesCount++
      lastNewLinePos = i
    }
  }
  /**
   * @param {换行符总个数} linesCount
   * @param {最后一个换行符的index} lastNewLinePos
   */ 
  pos.offset += numberOfCharacters
  pos.line += linesCount
  console.log('>>> ', numberOfCharacters, lastNewLinePos)
  pos.column =
    lastNewLinePos === -1
      ? pos.column + numberOfCharacters // 如果没有换行
      : Math.max(1, numberOfCharacters - lastNewLinePos) // 如果有换行。偏移量 - 最后一个换行符的index
  return pos
}