import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Tecnologias() {
    return (
        <div className="container">
            <h1 style={{ textAlign: 'center',backgroundColor:'orange' }}>TECNOLOGÍAS</h1>
            <Container>
                <Row>
                    <Col><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*Zn_HDykxaSmwBcEq.png" />
                        <Card.Body>
                            <Card.Title>C++ es un lenguaje de programación popular, de alto nivel y de propósito general que se utiliza para crear programas de computadora</Card.Title>
                            <Card.Text>
                                C++ es un lenguaje multiplataforma conocido por su rendimiento, potencia y control sobre la memoria y los componentes de hardware. Se suele utilizar para desarrollar aplicaciones para múltiples plataformas
                            </Card.Text>

                        </Card.Body>
                    </Card></Col>
                    <Col>    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/270px-Python.svg.png" />
                        <Card.Body>
                            <Card.Title>Python es un lenguaje de programación informática que se utiliza a menudo para crear sitios web y software, automatizar tareas y realizar análisis de datos </Card.Title>
                            <Card.Text>

                            </Card.Text>

                        </Card.Body>
                    </Card></Col>
                </Row>
                <br />
                <Row>
                    <Col>    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://jbstechinfo.com/wp-content/uploads/2023/08/JavaScript-Symbol-1536x864.png" />
                        <Card.Body>
                            <Card.Title>JavaScript es un lenguaje de programación que se utiliza para desarrollar páginas web .</Card.Title>
                            <Card.Text>
                                Desarrollado en Netscape, JS permite a los desarrolladores crear una página web dinámica e interactiva para interactuar con los visitantes y ejecutar acciones complejas. También permite a los usuarios cargar contenido en un documento sin tener que recargar toda la página.
                            </Card.Text>

                        </Card.Body>
                    </Card></Col>
                    <Col>    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*NNI7aPLtSaLo6jb4KGEFDA.jpeg" />
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                Google Pay, anteriormente conocida como Pay with Google y Android Pay, es una plataforma desarrollada por Google para su uso en sistemas de pago desde dispositivos móviles, la cual ofrece a los usuarios la capacidad de hacer pagos con dispositivos Android, tabletas o smartwatches
                            </Card.Text>

                        </Card.Body>
                    </Card></Col>
                    <Col>    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.internetya.co/wp-content/uploads/2017/02/integracion-moodle-google-apps.png" />
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                La integración con aplicaciones de Google puede referirse a varias cosas, como agregar aplicaciones a Google Chat, integrar Google Apps, o agregar un botón de Acceso con Google a una app web
                            </Card.Text>

                        </Card.Body>
                    </Card></Col>
                </Row>
            </Container>
            <br />
            <Container>
                <Row>
                    <Col>    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://depor.com/resizer/nbJFWeIQ6VWndoamRTxetAck9dU=/1200x677/smart/filters:format(jpeg):quality(90)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/BZDNPHSJSZFHZNT4ULJ6WSUHWE.jpg" />
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                El Traductor de Google es un sistema multilingüe de traducción automática, desarrollado y proporcionado por Google, para traducir texto, voz, imágenes o video en tiempo real de un idioma a otro
                            </Card.Text>

                        </Card.Body>
                    </Card></Col>
                    <Col>    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://static1.pocketlintimages.com/wordpress/wp-content/uploads/wm/2024/08/chromecast-timeline-header.jpg?q=49&fit=crop&w=1140&h=&dpr=2" />
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                El Chromecast de Google fue uno de los primeros reproductores multimedia digitales de bajo coste y bajo perfil
                            </Card.Text>

                        </Card.Body>
                    </Card></Col>
                </Row>
                <br />
                <Row>
                    <Col>    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="data:image/png;base64,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" />
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                ChromeOS es el sistema operativo creado por Google incorporado en cada Chromebook. Además, gracias a la administración de dispositivos ChromeOS, puedes capacitar empleados, administrar dispositivos de manera remota y mucho más.
                            </Card.Text>

                        </Card.Body>
                    </Card></Col>
                    <Col>    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://img.pacifiko.com/PROD/resize/1/1000x1000/NDFmMTc4YW.jpg" />
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                Google Pixel es una línea de dispositivos electrónicos de consumo de Google los cuales funcionan con el sistema operativo Chrome o Android.
                            </Card.Text>

                        </Card.Body>
                    </Card></Col>
                    <Col>    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.benton.org/sites/default/files/2021/GF_Logo_RGB_x4.png" />
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                Google Fiber , a veces estilizado como GFiber , es un servicio de Internet de banda ancha de fibra operado por Google Fiber Inc.
                            </Card.Text>

                        </Card.Body>
                    </Card></Col>
                </Row>
            </Container>


        </div>







    )
}


export default Tecnologias