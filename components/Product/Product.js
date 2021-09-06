import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';

export default function Product({postNum,search}){
    return(
       <div>
            {search.length === 0 ?
            <h1 className="text-center text-2xl	sm:pt-10">No Data Found</h1>
        :
        <Container fluid className="container">
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12}>
                        <Row>    
                            {search.slice(0, postNum).map(item => (
                            <Col key={item.id} md={4} lg={3}>
                                <a href={'/detail/' + item.id} className="hover:no-underline">
                                <div className="text-center border rounded-md border-gray-300 border-solid p-2 -ml-1 mt-4 w-84">
                                <Image
                                    alt={item.image.name}
                                    src={item.image?.formats.small.url}
                                    width={150}
                                    height={170}
                                    />
                                    <h1 className="text-xl truncate	">{item.title}</h1>
                                    <p className="text-lg">Price: Rs. {item.price}</p>
                                </div>
                                </a>
                            </Col>
                            ))}
                        </Row>
                        </Col>
                    </Row>
            </Container>
            }
      </div>
    )
}
