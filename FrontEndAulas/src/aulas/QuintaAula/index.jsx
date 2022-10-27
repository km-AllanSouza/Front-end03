import './style.scss'
import { QuintaAulaItem } from '../../components/QuintaAulaItem'
import clockhabit from './../../assets/images/clockhabit.jpg'
import batataGif from './../../assets/images/batata.gif'
import sagita from './../../assets/images/sagita.jpg'

export function QuintaAula() {

    const componentsFinded = [
        {
            id: 1,
            title: 'Vídeo Component',
            image: clockhabit,
            text: 'Lorem ipsum, dolor sit amet consectetur.'
        },
        {
            id: 2,
            title: 'Input Component',
            image: batataGif,
            text: 'Lorem ipsum, dolor sit amet consectetur.'
        },
        {
            id: 3,
            title: 'Button Component',
            image: sagita,
            text: 'Lorem ipsum, dolor sit amet consectetur.'
        }
    ]

    return (

        <div className='quarta-aula-component'>

            <h1 className='main-title'>Componentes identificados</h1>

            <ul className='components-finded'>

                {
                    componentsFinded.map(
                        component => {
                            return (
                                <QuintaAulaItem
                                    key={component.id}
                                    item={component}
                                />
                            )
                        }
                    )
                }

            </ul>

        </div>
    )
}