import { Spin } from "antd"
import { LoadingOutlined } from '@ant-design/icons'
import './index.less'

const Loading = () => {
  return (
    <div className='Spin-Style'>
      <Spin
        indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
        // tip='Loading'
        size='large'
      >
        <div className='block-box'>Loading</div>
      </Spin>
    </div>
  )
}

export default Loading