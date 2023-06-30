'use stript'

// object
let jsbook = {
    //key: "value",
    // ↓key   ↓value
    title: 'JavaScript入門',
    price: 2500,
    stock: 3,
    obj: {
        text: "test",
        func: () => {
            console.log("this is callback function")
        }
    }
}

console.log(jsbook)

//オブジェクトのkeyへのアクセス方法
//本のタイトルにアクセス

let booktitle = jsbook.title;
console.log(bookTitle)
console.log(jsbook.price)

console.log(jsbook, obj, text)
console.log(jsbook, obj, func)

//オブジェクトの値を変える方法は？
jsbook.price = 3000

console.log('オブジェクトの値を変える方法は？'.jsbook.price)

console.log(jsbook['stock'])