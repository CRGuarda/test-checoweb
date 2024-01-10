export type userData = [
  {
    ID_CLIENTE: number
    ID_PRESTAMO: string
    NOMBRE_COMPLETO: string
    CUOTA: string
  }
]

export type queuePayment = {
  phoneNumber: string
  userData: userData[0] | undefined
  lastModified: string | Date
  imageURL: string
  key: string
}
