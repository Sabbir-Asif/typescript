"use strict";
// TypeScript Advanced Types
// const article: ReadOnlyArticle = {
//     title: 'Hello World',
//     text: 'This is a test article',
//     published: true,
// }
// const article: MutableArticle = {
//     title: 'Hello World',
//     text: 'This is a test article',
//     published: true,
// }
// article.title = 'Hello World'; // This is allowed because the property is mutable
// type helloType = 'hello';
// type titleType = `${Capitalize<helloType>}`
// Conditional Types
// type IdLabel = {
//     id : number;
// }
// type NameLabel = {
//     name : string;
// }
// type NameOrId<T extends number | string> = T extends number
//     ? IdLabel
//     : NameLabel;
// function CreateLabel<T extends number | string>(label: T): NameOrId<T> {
//     if (typeof label === 'number') {
//         return { id: label } as NameOrId<T>;
//     } else {
//         return { name: label } as NameOrId<T>;
//     }
// }
// let a = CreateLabel("typescript");
// let b = CreateLabel(2.8);
