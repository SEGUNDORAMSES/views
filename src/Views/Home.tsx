import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Home() {
    return (
        <div className="container" id='card'>
            <Card>
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXgzljoi9gKbJc8oV9UjkYFyeU5WRIOjgR9Q&s" style={{}} />
                <Card.Body>
                    <Card.Title>Información de companía</Card.Title>
                    <Card.Text>
                        Nuestra misión es organizar la información del mundo para que todos puedan acceder a ella y usarla.
                        <br />
                        Google no es una empresa convencional. No tenemos intención de convertirnos en una. A lo largo de la evolución de Google como empresa privada, hemos gestionado Google de forma diferente. También hemos hecho hincapié en una atmósfera de creatividad y desafío, que nos ha ayudado a proporcionar un acceso imparcial, preciso y gratuito a la información para quienes confían en nosotros en todo el mundo.
                        Ahora ha llegado el momento de que la empresa pase a ser de propiedad pública. Este cambio traerá importantes beneficios para nuestros empleados, para nuestros accionistas actuales y futuros, para nuestros clientes y, sobre todo, para los usuarios de Google. Pero la estructura estándar de propiedad pública puede poner en peligro la independencia y la objetividad centrada que han sido más importantes en el éxito pasado de Google y que consideramos más fundamentales para su futuro. Por lo tanto, hemos implementado una estructura corporativa diseñada para proteger la capacidad de Google de innovar y conservar sus características más distintivas.
                    </Card.Text>
                    <Button variant="primary" href='https://about.google/intl/es-419/' id='boton'>Info</Button>
                </Card.Body>
            </Card>
        </div>)
}


export default Home