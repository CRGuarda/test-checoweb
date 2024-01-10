export const getClientByPhoneNumberQuery = `SELECT
                                           A.ID_CLIENTE,
                                           B.ID_PRESTAMO,
                                           CONCAT_WS(' ', A.PRIMER_NOMBRE, A.SEGUNDO_NOMBRE, A.APELLIDO_PATERNO, A.APELLIDO_MATERNO) AS 'NOMBRE_COMPLETO',
                                           B.CUOTA
                                       FROM T_CLIENTE A
                                       LEFT JOIN T_PRESTAMO B ON (A.ID_CLIENTE = B.ID_CLIENTE)
                                       WHERE A.CELULAR = ? AND B.ESTADO='VIGENTE';`

export const insertPaymentQuery = `INSERT INTO T_PAGO VALUES (?, ?, ?, ?)`
