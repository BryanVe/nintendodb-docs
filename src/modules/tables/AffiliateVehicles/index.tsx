import { MainInfoTable } from 'components'
import { ITableInfo } from 'types'

const tableInfo: ITableInfo = {
    title: 'AffiliateVehicles',
    description: `
        Contiene información del vehículo asociado a una afiliación.
    `,
    attributes: [
        {
            name: 'id',
            type: 'serial',
            description: 'Índice de la tabla',
        },
        {
            name: 'affiliateID',
            type: 'uuid, NULL',
            description: 'Índice de la entidad que representa a la repartidor que está asociada al vehículo. Ver a detalle en tabla Affiliates'
        },
        {
            name: 'categoryVehicleID',
            type: 'int',
            description: 'Índice de la entidad que representa el tipo de vehículo que es. Ver a detalle en tabla GeneralType'
        },
        {
            name: 'vehiclePlate',
            type: 'varchar',
            description: 'Verifica si el registro está eliminado o no'
        },
        {
            name: 'deleted',
            type: 'bool',
            description: 'Tiempo en realizar la actividad'
        },
        {
            name: 'createdAt',
            type: 'timestamptz',
            description: 'Fecha de creación del registro'
        },
        {
            name: 'updatedAt',
            type: 'timestamptz',
            description: 'Última fecha de actualización del registro'
        }
    ]
}

const AffiliateDriverInformation = () => (
    <MainInfoTable
        title={tableInfo.title}
        description={tableInfo.description}
        attributes={tableInfo.attributes}
    />
)

export default AffiliateDriverInformation