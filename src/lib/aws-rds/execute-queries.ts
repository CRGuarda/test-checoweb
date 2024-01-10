import RDSPoolGlobal from '@/lib/aws-rds'

export const executeQuery = async (query: string, values: any) => {
  const RDSConnection = await RDSPoolGlobal.getConnection()
  try {
    const results = await RDSConnection.query(query, values)

    return results as unknown[]
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)

    return []
  } finally {
    RDSConnection.release()
  }
}
