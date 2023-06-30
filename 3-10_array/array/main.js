'use strict'

console.log("3-10 test")

let items = [
    "やること",
    "プログラムを見る",
    "PCを買い替える",
    "スマートフォンを買い替える",
    undefined
]

//console.log(todo[1])

//itemsをすべて出力するようなプログラム

items.forEach(
    (item) => {
        console.log(item)
    }
);

//項目を追加する
items.push("スマートフォン")
console.log(items)