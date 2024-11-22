import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Testimonios() {
    return (
        <Container className='test'>
            <h1 style={{ textAlign: 'center', backgroundColor: 'lightblue' }}>TESTIMONIOS</h1>
            <Row>
                <Col><Card>
                    <Card.Img variant="top" src="https://lh3.googleusercontent.com/lpGzAO2r_gSgr9Ym9kGRHUvX_kzHYfrIAzdiFuJRYZVkfRMJNmn--wcV6TVbuYDpNl-o5RwzbAUHdwjr1qms-69xmT6Vjt0I2QvTxx3tp_Kk4PCf0_A=w2880-l80-sg-rp" />
                    <Card.Body className='body'>
                        <Card.Title>“Todos nos despertamos por la mañana y tenemos un propósito, ya sea grande o pequeño. Todo importa”.
                            Thoka Maer, ella, directora de Arte, equipo de Google Doodles</Card.Title>
                        <Card.Text>
                            Thoka Maer es la Doodler nacida en Alemania Oriental y radicada en EE. UU. que está detrás del Doodle global. Dado que muchas mujeres aún enfrentan los desafíos de la pandemia, su deseo es que todas las mujeres “puedan elegir la vida que quieren vivir y recibir el respeto que merecen”. Espera que, al ver a otras como ellas representadas en la página de inicio de Google, las mujeres de todo el mundo se sientan reconocidas e inspiradas.
                        </Card.Text>
                    </Card.Body>
                </Card></Col>
                <Col>  <Card>
                    <Card.Img variant="top" style={{ height: '197px' }} src="https://lh3.googleusercontent.com/zE9mSGvVUAYIXcZJFsCARBgA6mKW7SNh7SzAOInEws6B3ZXpxIEGQxjYuqAYPTI-fMr10xVzg2Rdx9kadLBQ-eKUsa2S0BLTsyTHOHAQCsvE1K_f9Q=w2880" />
                    <Card.Body>
                        <Card.Title>"La tecnología y la inteligencia artificial nos ofrecen una oportunidad única para observar y comprender los cambios en la naturaleza".
                            Ruth Alcantara, gerente del Programa, Google Research</Card.Title>
                        <Card.Text>
                            La tecnología de mapeo de Tree Canopy Lab les brinda datos a los líderes de las ciudades y de las comunidades a fin de que inviertan recursos en la plantación y el cuidado de los árboles.
                        </Card.Text>
                    </Card.Body>
                </Card></Col>
                <Col>  <Card>
                    <Card.Img variant="top" src='https://lh3.googleusercontent.com/NpymXGXp7XUxC2CKsvom5kO6x6YhoqPvVXkA1MvEEnLixNlctrTrkWBs-r9dD7Hi8zQrE0imWNxHP_06FrcDbEV7xt38lRqYJ6lnPCmxq2R6Ac6-1jo8=w2880' />
                    <Card.Body>
                        <Card.Title>"Creamos el Google Impact Challenge sobre el clima para acelerar el progreso en la lucha contra el cambio climático".
                            Brigitte Gosselink, directora, Google.org</Card.Title>
                        <Card.Text>
                            Cómo usar la inteligencia artificial para hacer un seguimiento de los datos oceanográficos y predecir las condiciones climáticas extremas
                            con ayuda de Google
                        </Card.Text>
                    </Card.Body>
                </Card></Col>
            </Row>
        </Container>

    )
}

export default Testimonios