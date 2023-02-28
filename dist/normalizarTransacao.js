import moedaParaNumero from "./moedaParaNumero.js";
import stringToDate from "./stringParaData.js";
export default function normalizarTransacao(transacao) {
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
//# sourceMappingURL=normalizarTransacao.js.map