import { MainInfoTable } from 'components'
import tableInfo from './data.json'

const Activities = () => (
    <MainInfoTable
        title={tableInfo.title}
        description={tableInfo.description}
        attributes={tableInfo.attributes}
    />
)

export default Activities