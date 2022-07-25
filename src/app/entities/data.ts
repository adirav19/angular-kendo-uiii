import { HtmlParser, SelectorContext } from "@angular/compiler";
import { Component, ComponentDecorator } from "@angular/core";

export interface Item {
    title?:Component
    url?:string
}

export const data = [
    { title: 'Flower', url:"" },
    { title: 'Mountain', url: '10' },
    { title: 'Sky', url: '10' }
];