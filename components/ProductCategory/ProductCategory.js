import {Card, CardImg, CardBody,CardTitle} from 'reactstrap';

const ProductCategory =({data}) => {
  return(
  <div>
    <a href={'/category/' + data.id} className="hover:no-underline">
    <Card className="ml-15 border-0 ">
    <CardImg top width="100%" src={data.image.formats.small?.url} alt="Card image cap"  height={800}  />
    <CardBody>
      <CardTitle className="font-light text-2xl mb-6">{data.title}</CardTitle>
    </CardBody>
  </Card>
    </a>
</div>
  )
}


export default ProductCategory;
