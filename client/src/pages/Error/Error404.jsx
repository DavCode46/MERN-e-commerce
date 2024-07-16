import { Button, Result } from 'antd';

const Error404 = () => {
  return (
    <Result
    status="404"
    title="404"
    subTitle="Lo sentimos, la página que buscas no existe."
    extra={<Button type="primary">Vuelve a nuestra tienda</Button>}
  />
  )
}

export default Error404