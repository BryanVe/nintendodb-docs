import { MainInfoTable } from 'components'
import tableInfo from './data.json'

const AffiliateDriverInformation = () => (
    <MainInfoTable
        title={tableInfo.title}
        description={tableInfo.description}
        attributes={tableInfo.attributes}
    />
)

export default AffiliateDriverInformation