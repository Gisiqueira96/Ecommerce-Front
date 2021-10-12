import { Produto } from "./Produto"

export class Categoria{
    public id: number
    public localAtuacao: string
    public nomeOng: string
    public tipo: string
    public produto: Produto[]
    public foto: string
}