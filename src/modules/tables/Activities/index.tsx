import { MainInfoTable } from 'components'
import { ITableInfo } from 'types'

const tableInfo: ITableInfo = {
    title: 'Activities',
    description: `
        Es la secuencia que se recorre en la ruta para entregar las órdenes. Generalmente hay 2 activities
        por perdida ya que los pedidos tiene 2 puntos que ir (el recojo y la entrega).
    `,
    attributes: [
        {
            name: 'id',
            type: 'serial',
            description: 'Índice de la tabla',
        },
        {
            name: 'orderID',
            type: 'int',
            description: 'Índice de la entidad que representa el pedido a entregar. Ver a detalle en la tabla Orders'
        },
        {
            name: 'routeID',
            type: 'int, NULL',
            description: 'Índice de la entidad que representa la ruta que se está realizando. Ver a detalle en la tabla Route'
        },
        {
            name: 'typeID',
            type: 'int',
            description: 'Índice de la entidad que representa el tipo de actividad que es. Ver a detalle en la tabla GeneralType'
        },
        {
            name: 'workingTime',
            type: 'time, NULL',
            description: 'Tiempo en realizar la actividad'
        },
        {
            name: 'addressPoint',
            type: 'geometry(Point)',
            description: 'Ubicación geoespacial de la entrega'
        },
        {
            name: 'arrTime',
            type: 'time, NULL',
            description: 'Hora de inicio de la actividad por el planeador'
        },
        {
            name: 'endTime',
            type: 'time, NULL',
            description: 'Hora de finalización de la actividad por el planeador'
        },
        {
            name: 'deleted',
            type: 'boolean',
            description: 'Determinar si el registro está eliminado'
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

const Activities = () => (
    <MainInfoTable
        title={tableInfo.title}
        description={tableInfo.description}
        attributes={tableInfo.attributes}
    />
)

export default Activities