// última correção: problema de fechamento de div pela Evellyn.
// corrigido! Próxima pessoa do requisito que mexer aqui pode apagar esse comentário...
export default function Button(props) {
    return (
        <div>
            <button>{props.nameIncrement}</button>
            <button>{props.nameDecrement}</button>
        </div>
    )
}