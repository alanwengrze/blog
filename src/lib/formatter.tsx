import { formatDistanceToNow } from "date-fns";
import { ptBR } from 'date-fns/locale/pt-BR'
export const createdAtFormatted = (createdAt: string) => {
  return formatDistanceToNow(new Date(createdAt),  {
    locale: ptBR,
    addSuffix: true
  })
}