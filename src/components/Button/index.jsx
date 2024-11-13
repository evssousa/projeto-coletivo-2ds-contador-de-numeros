export default function Button(props) {
    return (
        <div>
            <button>{props.nameIncrement}</button>
            <button>{props.nameDecrement}</button>
            <button>{props.nameReset}</button>
        </div>
    )
}