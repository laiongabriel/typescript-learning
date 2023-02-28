import countBy from "./countBy.js";
function filtrarValor(transacao) {
    return transacao.valor !== null;
}
export default class Estatisticas {
    transacoes;
    total;
    pagamento;
    status;
    semana;
    melhorDia;
    constructor(transacoes) {
        this.transacoes = transacoes;
        this.total = this.setTotal();
        this.pagamento = this.setPagamento();
        this.status = this.setStatus();
        this.semana = this.setSemana();
        this.melhorDia = this.setMelhorDia();
    }
    setTotal() {
        return this.transacoes.filter(filtrarValor).reduce((acc, item) => {
            return acc + item.valor;
        }, 0);
    }
    setPagamento() {
        return countBy(this.transacoes.map(({ pagamento }) => pagamento));
    }
    setStatus() {
        return countBy(this.transacoes.map(({ status }) => status));
    }
    setSemana() {
        const semana = {
            ["domingo"]: 0,
            ["segunda-feira"]: 0,
            ["terça-feira"]: 0,
            ["quarta-feira"]: 0,
            ["quinta-feira"]: 0,
            ["sexta-feira"]: 0,
            ["sábado"]: 0,
        };
        for (let i = 0; i < this.transacoes.length; i++) {
            const dia = this.transacoes[i].data.getDay();
            if (dia === 0)
                semana["domingo"] += 1;
            if (dia === 1)
                semana["segunda-feira"] += 1;
            if (dia === 2)
                semana["terça-feira"] += 1;
            if (dia === 3)
                semana["quarta-feira"] += 1;
            if (dia === 4)
                semana["quinta-feira"] += 1;
            if (dia === 5)
                semana["sexta-feira"] += 1;
            if (dia === 6)
                semana["sábado"] += 1;
        }
        return semana;
    }
    setMelhorDia() {
        return Object.entries(this.semana).sort((a, b) => {
            return b[1] - a[1];
        })[0];
    }
}
//# sourceMappingURL=Estatisticas.js.map