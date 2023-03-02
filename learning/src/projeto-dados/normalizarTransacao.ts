import moedaParaNumero from "./moedaParaNumero.js";
import stringToDate from "./stringParaData.js";

declare global {
   type TransacaoPagamento = "Boleto" | "Cartão de Crédito";
   type TransacaoStatus =
      | "Paga"
      | "Recusada pela operadora de cartão"
      | "Aguardando pagamento"
      | "Estornada";

   interface TransacaoAPI {
      Status: TransacaoStatus;
      ID: number;
      Data: string;
      Nome: string;
      Email: string;
      ["Forma de Pagamento"]: TransacaoPagamento;
      ["Valor (R$)"]: string;
      ["Cliente Novo"]: number;
   }

   interface Transacao {
      status: TransacaoStatus;
      id: number;
      data: Date;
      nome: string;
      email: string;
      pagamento: TransacaoPagamento;
      moeda: string;
      valor: number | null;
      novo: boolean;
   }
}

export default function normalizarTransacao(transacao: TransacaoAPI): Transacao {
   return {
      status: transacao.Status,
      id: transacao.ID,
      data: stringToDate(transacao.Data),
      nome: transacao.Nome,
      email: transacao.Email,
      pagamento: transacao["Forma de Pagamento"],
      moeda: transacao["Valor (R$)"],
      valor: moedaParaNumero(transacao["Valor (R$)"]),
      novo: Boolean(transacao["Cliente Novo"]),
   };
}
