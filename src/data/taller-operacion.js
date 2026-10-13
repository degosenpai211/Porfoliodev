export const TALLER_WEEKS = [
  { semana: "S1", ingresos: 8420, egresos: 6100, entregadas: 11, sinRecoger: 4, proformas: 18, ots: 9 },
  { semana: "S2", ingresos: 9100, egresos: 6400, entregadas: 13, sinRecoger: 5, proformas: 16, ots: 10 },
  { semana: "S3", ingresos: 7800, egresos: 7050, entregadas: 9, sinRecoger: 7, proformas: 21, ots: 8 },
  { semana: "S4", ingresos: 10250, egresos: 6800, entregadas: 14, sinRecoger: 6, proformas: 19, ots: 12 },
  { semana: "S5", ingresos: 9700, egresos: 7200, entregadas: 12, sinRecoger: 8, proformas: 17, ots: 11 },
  { semana: "S6", ingresos: 8650, egresos: 8100, entregadas: 10, sinRecoger: 9, proformas: 22, ots: 7 },
  { semana: "S7", ingresos: 11100, egresos: 7400, entregadas: 16, sinRecoger: 7, proformas: 20, ots: 13 },
  { semana: "S8", ingresos: 10840, egresos: 7600, entregadas: 15, sinRecoger: 8, proformas: 18, ots: 12 },
  { semana: "S9", ingresos: 9400, egresos: 8300, entregadas: 11, sinRecoger: 10, proformas: 24, ots: 9 },
  { semana: "S10", ingresos: 12100, egresos: 7900, entregadas: 17, sinRecoger: 9, proformas: 21, ots: 14 },
  { semana: "S11", ingresos: 11550, egresos: 8200, entregadas: 16, sinRecoger: 11, proformas: 19, ots: 13 },
  { semana: "S12", ingresos: 11880, egresos: 8450, entregadas: 15, sinRecoger: 12, proformas: 23, ots: 12 },
]

export const EGRESO_RUBROS = [
  { rubro: "Filamentos / Plastic 27", monto: 21400 },
  { rubro: "Sueldos y salarios", monto: 18600 },
  { rubro: "Alquileres", monto: 14400 },
  { rubro: "Insumos y herramientas", monto: 12850 },
  { rubro: "Servicios básicos", monto: 9200 },
  { rubro: "Otros egresos", monto: 13050 },
]

const sum = (key) => TALLER_WEEKS.reduce((acc, row) => acc + row[key], 0)

const ingresos = sum("ingresos")
const egresos = sum("egresos")
const entregadas = sum("entregadas")
const proformas = sum("proformas")
const ots = sum("ots")
const margen = ingresos - egresos

export const TALLER_TOTALS = {
  ingresos,
  egresos,
  entregadas,
  sinRecoger: TALLER_WEEKS[TALLER_WEEKS.length - 1].sinRecoger,
  proformas,
  ots,
  margen,
  margenPct: Math.round((margen / ingresos) * 100),
  conversion: Math.round((ots / proformas) * 100),
  ticket: Math.round(ingresos / entregadas),
}
