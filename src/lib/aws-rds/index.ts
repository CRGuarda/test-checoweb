import { createPool } from 'mysql2/promise'

const RDSPool = createPool({
  host: process.env.RDS_HOST,
  user: process.env.RDS_USER,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

const RDSPoolSingleton = () => RDSPool

declare global {
  // eslint-disable-next-line no-unused-vars
  var RDSPoolGlobal: undefined | ReturnType<typeof RDSPoolSingleton>
}

const RDSPoolGlobal = globalThis.RDSPoolGlobal ?? RDSPoolSingleton()

export default RDSPoolGlobal

if (process.env.NODE_ENV !== 'production') globalThis.RDSPoolGlobal = RDSPoolGlobal
