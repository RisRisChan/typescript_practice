// エントリポイントは慣例的に index.ts
// default export された module をさらに named export できる

//defaultという名前を改め「function1」という名前で使用する
export { default as function1 } from './default1'
//defaultという名前を改め「function2」という名前で使用する
export { default as function2 } from './default2'
// named export された module をさらに named export できる
export { function3, function4 } from './named'
