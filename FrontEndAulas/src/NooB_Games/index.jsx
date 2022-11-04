import './style.scss'
import { newGames } from './games'
import { Card_Lateral } from './components/component_card-lateral'


export function NoobGames() {

    return (

        <main className='board'>
            <section>

                <h2>New Games</h2>

                <ul className="card-lateral">

                    {
                        newGames.map((game) =>
                            <Card_Lateral
                                //key={index}
                                item={game}
                            />
                        )
                    }

                </ul>
            </section>
            <section>

                <h2>New Games/teste</h2>

                <ul className="card-lateral">

                    {
                        newGames.map((game) =>
                            <Card_Lateral
                                //key={index}
                                item={game}
                            />
                        )
                    }

                </ul>
            </section>

        </main>


    )
}