import './style.scss'
import imagem from './../../assets/images/clockhabit.jpg'

export function TerceiraAula(){

    const title = 'Teste de titulo'
    const components = [
        {name: 'um coelho', description:'descrição coelho', img:imagem},
        {name: 'um coelho', description:'descrição coelho', img:imagem}
    ]

    return (
        <main>
            {/* <h1>{componente[0].name}</h1> */}
            {/* <img src={components[0].img} alt="rabit" /> */}
            <h1> Lista de componentes</h1>
            <ul>
                {/* <h1>{title}</h1> */}
                {components.map(component => (
                    <li>
                    <img src={component.img} alt="rabit" />
                    <h1>{component.name}</h1>
                    <p>{component.description}</p>
                </li>
                ))
                }
            <li>
                <h2>Card outro</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            </ul>
        </main>
    )
}