import { ReactNode } from "react";

export type AttributeValue = 'name' | 'type' | 'description'
export type AttributeAlign = 'left' | 'right' | 'center' | 'justify' | 'inherit'

export interface ITableAttribute {
    name: string
    type: string
    description: string
}

export interface ITableColumn {
    title: string
    value: AttributeValue
    align?: AttributeAlign
}

export interface ITableInfo {
    title: string
    description: string
    attributes: ITableAttribute[]
}