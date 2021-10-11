import { Categoria } from "./Categoria"

export class Produto{
    public id: number
    public nomeProduto: string
    public descricao: string
    public estoque: number
    public valor: number
    public categoria: Categoria[]

}