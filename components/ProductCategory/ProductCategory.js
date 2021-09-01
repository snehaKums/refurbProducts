import {Card, CardImg, CardBody,CardTitle, CardSubtitle} from 'reactstrap';

const ProductCategory =({data}) => {
  return(
  <div>
    <a href={'/category/' + data.id} className="hover:no-underline">
    <Card className="ml-15">
    <CardImg top width="100%" src={data.image.formats.small?.url} alt="Card image cap"  height={800}  />
    <CardBody>
      <CardTitle className="font-light text-4xl mb-6">{data.title}</CardTitle>
      <CardSubtitle className="text-xl ">{data.detail}</CardSubtitle>
    </CardBody>
  </Card>
    </a>
</div>
  )
}


export default ProductCategory;
