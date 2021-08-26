import { LazyExoticComponent, ReactNode } from "react";

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

export interface INavigationConfig {
    title?: string
    href?: string
    pages?: INavigationConfig[],
    children?: ReactNode
}
export interface IRoute {
    path: string
    exact: true
    component: LazyExoticComponent<any>
}

export type LoadRoutes = (navigationConfig: INavigationConfig[], routes: IRoute[]) => void
