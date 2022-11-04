import './style.scss'

export function Card_Lateral(props) {

    return (
        <li className="card-lateral">
            <img className="card-lateral-image" src={props.item.picture}></img>
            <div className="card-lateral-text">
                <div className="card-lateral-description">
                    <h3 className="card-lateral-title">{props.item.name}</h3>
                    <p className="card-lateral-platforms"> {props.item.plataforms}</p>
                    <p className="card-lateral-categories">{props.item.categories}</p>
                </div>
                <div className="card-lateral-price">{props.item.price}</div>
            </div>
        </li>
    )

}