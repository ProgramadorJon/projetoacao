import { Col, Row, Figure } from "react-bootstrap"
import '../App.css'


export default function Informacoes() {

    return (
        <>
            <div className="container">
                <Row>
                    <Col md={1}>
                    <Figure>
                        <Figure.Image
                            width={80}
                            height={80}
                            src="https://s3-symbol-logo.tradingview.com/fii--big.svg"
                        />
                    </Figure>
                    </Col>

                    <Col md={2}>
                        <h1 className="text-white">ticker</h1>
                        <h5 className="text-white">nome ticker</h5>
                    </Col>

                    <Col id="data" mb={2}>
                        <h5>Data</h5>
                        <h2>valordata</h2>
                    </Col>

                </Row>

                <Row id="row">
                    <Col md={3}>
                        <h5>Cotação</h5>
                        <h2>valor</h2>
                    </Col>
                    <Col md={3}>
                        <h5>Valor de Mercado</h5>
                        <h2>valor</h2>
                    </Col>
                    <Col md={3}>
                        <h5>Volume de Transações</h5>
                        <h2>valor</h2>
                    </Col>
                    <Col md={3}>
                        <h5>Moeda</h5>
                        <h2>valor</h2>
                    </Col>
                </Row>
            </div>


        </>
    )
}