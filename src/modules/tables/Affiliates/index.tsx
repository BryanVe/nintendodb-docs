import { MainInfoTable } from 'components'
import tableInfo from './data.json'

const Affiliates = () => (
   <MainInfoTable
      title={tableInfo.title}
      description={tableInfo.description}
      attributes={tableInfo.attributes}
   />
)

export default Affiliates