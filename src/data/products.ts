export type Product = {
  id: string
  name: string
  price: number
  description: string
  category: string
  discount: number
  stock: number
  imageUrl: string
}

// Names, pack sizes, and MRPs transcribed from the supplied 2022 brochure price list.
// Descriptions stay neutral; confirm current availability, labels, and prices before launch.
const brochureItems: Array<[string, number, string, string]> = [
  ['Gyasto-G · 200 ml', 155, 'Digestive syrup', 'Herbal formulation listed in the supplied brochure. 200 ml. Check the original label and consult a qualified practitioner for directions.'],
  ['Gyasto-G · 450 ml', 270, 'Digestive syrup', 'Herbal formulation listed in the supplied brochure. 450 ml. Check the original label and consult a qualified practitioner for directions.'],
  ['Dizestozyme · 200 ml', 155, 'Digestive syrup', 'Herbal formulation listed in the supplied brochure. 200 ml. Check the original label and consult a qualified practitioner for directions.'],
  ['Dizestozyme · 450 ml', 265, 'Digestive syrup', 'Herbal formulation listed in the supplied brochure. 450 ml. Check the original label and consult a qualified practitioner for directions.'],
  ['TonoLiv · 200 ml', 149, 'Herbal syrup', 'Herbal formulation listed in the supplied brochure. 200 ml. Check the original label and consult a qualified practitioner for directions.'],
  ['TonoLiv · 450 ml', 260, 'Herbal syrup', 'Herbal formulation listed in the supplied brochure. 450 ml. Check the original label and consult a qualified practitioner for directions.'],
  ['Noppi Syrup · 200 ml', 170, 'Herbal syrup', 'Herbal formulation listed in the supplied brochure. 200 ml. Check the original label and consult a qualified practitioner for directions.'],
  ['Noppi Syrup · 450 ml', 290, 'Herbal syrup', 'Herbal formulation listed in the supplied brochure. 450 ml. Check the original label and consult a qualified practitioner for directions.'],
  ['Noppi Oil · 30 ml', 95, 'Herbal oil', 'Topical oil listed in the supplied brochure. 30 ml. Check the original packaging before use.'],
  ['Noppi Oil · 60 ml', 175, 'Herbal oil', 'Topical oil listed in the supplied brochure. 60 ml. Check the original packaging before use.'],
  ['AlfaPride · 200 ml', 165, 'Herbal syrup', 'Herbal formulation listed in the supplied brochure. 200 ml. Check the original label and consult a qualified practitioner for directions.'],
  ['AlfaPride · 450 ml', 280, 'Herbal syrup', 'Herbal formulation listed in the supplied brochure. 450 ml. Check the original label and consult a qualified practitioner for directions.'],
  ['Nutrino G · 200 ml', 190, 'Herbal syrup', 'Herbal formulation listed in the supplied brochure. 200 ml. Check the original label and consult a qualified practitioner for directions.'],
  ['Nutrino G · 450 ml', 315, 'Herbal syrup', 'Herbal formulation listed in the supplied brochure. 450 ml. Check the original label and consult a qualified practitioner for directions.'],
  ['Lefkoria · 200 ml', 170, 'Herbal syrup', 'Herbal formulation listed in the supplied brochure. 200 ml. Check the original label and consult a qualified practitioner for directions.'],
  ['Lefkoria · 450 ml', 285, 'Herbal syrup', 'Herbal formulation listed in the supplied brochure. 450 ml. Check the original label and consult a qualified practitioner for directions.'],
  ['FiborX · 60 ml', 70, 'Herbal syrup', 'Herbal formulation listed in the supplied brochure. 60 ml. Check the original label and consult a qualified practitioner for directions.'],
  ['FiborX · 170 ml', 160, 'Herbal syrup', 'Herbal formulation listed in the supplied brochure. 170 ml. Check the original label and consult a qualified practitioner for directions.'],
  ['Kafnoll · 100 ml', 95, 'Herbal syrup', 'Herbal formulation listed in the supplied brochure. 100 ml. Check the original label and consult a qualified practitioner for directions.'],
  ['Kafnoll · 170 ml', 135, 'Herbal syrup', 'Herbal formulation listed in the supplied brochure. 170 ml. Check the original label and consult a qualified practitioner for directions.'],
  ['Kalmegh Syrup · 170 ml', 140, 'Herbal syrup', 'Herbal formulation listed in the supplied brochure. 170 ml. Check the original label and consult a qualified practitioner for directions.'],
  ['Kalmegh Syrup · 450 ml', 265, 'Herbal syrup', 'Herbal formulation listed in the supplied brochure. 450 ml. Check the original label and consult a qualified practitioner for directions.'],
  ['Kalmegh Drops · 30 ml', 65, 'Herbal drops', 'Herbal formulation listed in the supplied brochure. 30 ml. Check the original label and consult a qualified practitioner for directions.'],
  ['Wormo · 30 ml', 65, 'Herbal drops', 'Herbal formulation listed in the supplied brochure. 30 ml. Check the original label and consult a qualified practitioner for directions.'],
  ['Calprosip · 200 ml', 155, 'Herbal syrup', 'Herbal formulation listed in the supplied brochure. 200 ml. Check the original label and consult a qualified practitioner for directions.'],
  ['Calprosip · 450 ml', 270, 'Herbal syrup', 'Herbal formulation listed in the supplied brochure. 450 ml. Check the original label and consult a qualified practitioner for directions.'],
  ['Kinderplex · 170 ml', 140, 'Herbal syrup', 'Herbal formulation listed in the supplied brochure. 170 ml. Check the original label and consult a qualified practitioner for directions.'],
  ['Femotone · 200 ml', 160, 'Herbal syrup', 'Herbal formulation listed in the supplied brochure. 200 ml. Check the original label and consult a qualified practitioner for directions.'],
  ['Rolig · 60 ml', 110, 'Herbal syrup', 'Herbal formulation listed in the supplied brochure. 60 ml. Check the original label and consult a qualified practitioner for directions.'],
  ['Griponil · 170 ml', 95, 'Herbal formulation', 'Product listed in the supplied brochure. 170 ml. Check the original label and consult a qualified practitioner for directions.'],
  ['Bebis Baby Oil · 100 ml', 125, 'Baby care', 'Baby oil listed in the supplied brochure. 100 ml. Check the original packaging before use.'],
]

export const starterProducts: Product[] = brochureItems.map(([name, price, category, description], index) => ({
  id: `brochure-${index + 1}`,
  name,
  price,
  description,
  category,
  discount: 0,
  stock: 0,
  imageUrl: '',
}))
