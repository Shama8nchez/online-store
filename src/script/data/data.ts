import { aviaCategory, IGoods } from './types';

const data: IGoods[] = [
  {
    title: 'Airbus A320',
    produce: 'Airbus',
    category: aviaCategory.Civil,
    description: 'A320 is a series of narrow-body airliners developed and produced by Airbus.',
    source: ['https://www.ixbt.com/img/n1/news/2022/10/6/A320%20Exterior_large.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Airbus_A320-214%2C_Airbus_Industrie_JP7617615.jpg/640px-Airbus_A320-214%2C_Airbus_Industrie_JP7617615.jpg'],
    price: 90000000,
    onstock: 5,
    capacity: 180,
    range: 6150
  },
  {
    title: 'Airbus A321',
    produce: 'Airbus',
    category: aviaCategory.Civil,
    description: 'The Airbus A321 is a member of the Airbus A320 family of short to medium range, narrow-body, commercial passenger twin engine jet airliners',
    source: ['https://www.charterom.com/useruploads/a321.jpg', 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Airbus_A321_%28SAS%29_SE-REG.jpg?20050505120327'],
    price: 100000000,
    onstock: 3,
    capacity: 220,
    range: 5950
  },
  {
    title: 'Airbus A220',
    produce: 'Airbus',
    category: aviaCategory.Civil,
    description: 'The Airbus A220 is a family of five-abreast narrow-body airliners by Airbus Canada Limited Partnership',
    source: ['https://bluebiz-media.azureedge.net/4a77a2/globalassets/bluebook/news-items/airbus-a220-af-624-x-380.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/YL-CSD_Bombardier_BD-500-1A100_CS300_BCS3_Airbus_A220-300_A223_c_n_55006_-_BTI_%2831100301167%29.jpg/800px-YL-CSD_Bombardier_BD-500-1A100_CS300_BCS3_Airbus_A220-300_A223_c_n_55006_-_BTI_%2831100301167%29.jpg'],
    price: 80000000,
    onstock: 7,
    capacity: 150,
    range: 4000
  },
  {
    title: 'Airbus A330',
    produce: 'Airbus',
    category: aviaCategory.Civil,
    description: 'The A330 shares its airframe with the early A340 variants, having two main landing gear legs instead of three, lower weights, and slightly different lengths',
    source: ['https://aircraft.airbus.com/sites/g/files/jlcbta126/files/styles/airbus_608x608/public/2021-09/A330-300_GE_AIRBUS_V10_300dpi2.jpg.webp?itok=Znn31LY0', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Turkish_Airlines%2C_Airbus_A330-300_TC-JNL_NRT_%2823708073592%29.jpg/640px-Turkish_Airlines%2C_Airbus_A330-300_TC-JNL_NRT_%2823708073592%29.jpg'],
    price: 245000000,
    onstock: 5,
    capacity: 335,
    range: 11300
  },
  {
    title: 'Airbus A340',
    produce: 'Airbus',
    category: aviaCategory.Civil,
    description: 'The Airbus A340 is a twin-aisle passenger airliner that was the first long-range Airbus, powered by four turbofan jet engines.',
    source: ['https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Airbus_A340-311%2C_Lufthansa_AN1936774.jpg/640px-Airbus_A340-311%2C_Lufthansa_AN1936774.jpg', 'https://st2.depositphotos.com/1044737/7495/i/450/depositphotos_74956587-stock-photo-lufthansa-airbus-a340-300-airplane.jpg'],
    price: 240000000,
    onstock: 2,
    capacity: 313,
    range: 15000
  },
  {
    title: 'Airbus A350',
    produce: 'Airbus',
    category: aviaCategory.Civil,
    description: 'The Airbus A350 is a long-range, wide-body twin-engine jet airliner developed and produced by Airbus',
    source: ['https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/F-WWCF_A350_LBG_SIAE_2015_%2818953559366%29.jpg/800px-F-WWCF_A350_LBG_SIAE_2015_%2818953559366%29.jpg', 'https://aviatorinsider.com/wp-content/uploads/2022/07/Airbus-a350-Guide-and-Specs-950x650.jpg'],
    price: 320000000,
    onstock: 4,
    capacity: 325,
    range: 15000
  },
  {
    title: 'Airbus A380',
    produce: 'Airbus',
    category: aviaCategory.Civil,
    description: 'It is the world\'s largest passenger airliner and only full-length double-deck jet airliner',
    source: ['https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/A6-EDY_A380_Emirates_31_jan_2013_jfk_%288442269364%29_%28cropped%29.jpg/640px-A6-EDY_A380_Emirates_31_jan_2013_jfk_%288442269364%29_%28cropped%29.jpg', 'https://static.dw.com/image/47318757_905.jpg'],
    price: 490000000,
    onstock: 2,
    capacity: 525,
    range: 15200
  },
  {
    title: 'Airbus Beluga XL',
    produce: 'Airbus',
    category: aviaCategory.Cargo,
    description: 'It\'s a large transport aircraft based on the Airbus A330-200F built by Airbus',
    source: ['https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/%22Beluga_XL%22_A330-743L_%28cropped%29.jpg/640px-%22Beluga_XL%22_A330-743L_%28cropped%29.jpg', 'https://images.techinsider.ru/upload/img_cache/caf/caf0d5e2de718bfc0c48cbb3192b041c_cropped_666x464.jpg'],
    price: 250000000,
    onstock: 2,
    capacity: 60,
    range: 4700
  },
  {
    title: 'Airbus A400M',
    produce: 'Airbus',
    category: aviaCategory.Military,
    description: 'The Airbus A400M increases the airlift capacity and range compared with the aircraft it was originally set to replace, the older versions of the Hercules and Transall.',
    source: ['https://mediaassets.airbus.com/permalinks/591061/wpr/a400m-saf.jpg', 'https://i0.wp.com/en.aviation-report.com/wp-content/uploads/sites/2/2021/04/Airbus_A400M_H225M_HAAR_5.jpg?resize=750%2C400&ssl=1'],
    price: 150000000,
    onstock: 8,
    capacity: 120,
    range: 8000
  },
  {
    title: 'Boeing 737-800',
    produce: 'Boeing',
    category: aviaCategory.Civil,
    description: 'B737-800 is a narrow-body aircraft powered by two jet engines and produced by Boeing Commercial Airplanes.',
    source: ['https://thumbs.dreamstime.com/b/turkish-airlines-%D0%B1%D0%BE%D0%B8%D0%BD%D0%B3-84181441.jpg', 'https://www.avianews.com/wp-content/uploads/2018/02/belavia1.jpg'],
    price: 93000000,
    onstock: 9,
    capacity: 188,
    range: 5600
  },
  {
    title: 'Boeing 737MAX',
    produce: 'Boeing',
    category: aviaCategory.Civil,
    description: 'The 737 MAX is based on earlier 737 designs, with more efficient CFM International LEAP-1B engines, aerodynamic changes, including distinctive split-tip winglets, and airframe modifications',
    source: ['https://www.aex.ru/images/media/900/15446.jpg', 'https://aviav.ru/wp-content/uploads/737belavia.jpg'],
    price: 120000000,
    onstock: 5,
    capacity: 200,
    range: 6600
  },
  {
    title: 'Boeing 747-8',
    produce: 'Boeing',
    category: aviaCategory.Civil,
    description: 'The Boeing 747-8 is a wide-body airliner formerly developed by Boeing Commercial Airplanes, and the largest variant of the 747',
    source: ['https://www.corporatejetinvestor.com/wp-content/uploads/2019/03/Boeing-747-8-Intercontinental.jpg', 'https://d1a2ot8agkqe8w.cloudfront.net/web/2012/11/lufthansa-747-8i-roll-out_48493.jpg'],
    price: 378000000,
    onstock: 2,
    capacity: 467,
    range: 14800
  },
  {
    title: 'Boeing 757-200',
    produce: 'Boeing',
    category: aviaCategory.Civil,
    description: 'The 757 is a low-wing cantilever monoplane with a conventional tail unit featuring a single fin and rudder',
    source: ['http://www.flugzeuginfo.net/acimages/7572_kp.jpg', 'https://upload.wikimedia.org/wikipedia/commons/3/31/Icelandair_Boeing_757-200_Wedelstaedt.jpg'],
    price: 80000000,
    onstock: 2,
    capacity: 200,
    range: 7000
  },
  {
    title: 'Boeing 757VIP',
    produce: 'Boeing',
    category: aviaCategory.VIP,
    description: 'Be like a superstar! Donald Trump and others choosed B757 VIP.',
    source: ['https://jet-partners.ru/upload/medialibrary/533/hd1a8rm8kok0j4c8w299q5ew97tc6q6n/Boeing_757_200_ext_2_.jpg', 'https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2022/06/ACC-Aviation-VIP-757.jpeg'],
    price: 180000000,
    onstock: 2,
    capacity: 15,
    range: 8000
  },
  {
    title: 'Boeing 777-300',
    produce: 'Boeing',
    category: aviaCategory.Civil,
    description: 'The Boeing 777, commonly referred to as the Triple Seven, is an American long-range wide-body airliner',
    source: ['https://s9.travelask.ru/system/images/files/001/516/558/wysiwyg_jpg/Boeing_777-300ER_of_Emirates_at_London_Gatwick_Airport_%281%29.jpg?1644145331', 'https://cdn.businesstraveller.com/wp-content/uploads/fly-images/927692/Boeing-777-300ER-v2-916x516.jpg'],
    price: 330000000,
    onstock: 8,
    capacity: 365,
    range: 10300
  },
  {
    title: 'Boeing 787-9',
    produce: 'Boeing',
    category: aviaCategory.Civil,
    description: 'The Boeing 787 Dreamliner is an American wide-body jet airliner. One of the best.',
    source: ['https://www.aex.ru/images/media/900/23065.jpg', 'https://images.ctfassets.net/tjnj6enyzr6b/28ncGHs4VueskINP1WyOL7/d96e0a1873a6fbaa260c48ec9e6cde46/787-HD-web.jpg?w=1000&q=50'],
    price: 292000000,
    onstock: 5,
    capacity: 290,
    range: 14000
  },
  {
    title: 'Boeing 787VIP',
    produce: 'Boeing',
    category: aviaCategory.VIP,
    description: 'The biggest VIP jet! Roman Abromovich likes it.',
    source: ['https://i.ytimg.com/vi/EX_Rk4iN_AE/maxresdefault.jpg', 'https://i.pinimg.com/originals/18/f9/1a/18f91a6c3df16190825f29c9d5f9f7cd.jpg'],
    price: 390000000,
    onstock: 1,
    capacity: 17,
    range: 15000
  },
  {
    title: 'Boeing 747-8F',
    produce: 'Boeing',
    category: aviaCategory.Cargo,
    description: 'The Boeing 747-8 is a wide-body airliner formerly developed by Boeing Commercial Airplanes, and the largest variant of the 747. Cargo option.',
    source: ['https://aerocorner.com/wp-content/uploads/2020/12/Cathay-Pacific-Cargo-747-8F-taking-off-1090x500.jpg', 'https://www.aircharter.kz/upload/iblock/09c/B747-400F-large_tcm114-3523.jpg'],
    price: 378000000,
    onstock: 2,
    capacity: 132,
    range: 14800
  },
  {
    title: 'Boeing 777F',
    produce: 'Boeing',
    category: aviaCategory.Cargo,
    description: 'The Boeing 777, commonly referred to as the Triple Seven, is an American long-range wide-body airliner. Cargo option.',
    source: ['https://lufthansa-cargo.com/documents/20184/38981/12_B777F_MD-11F_topview_800x600.jpg/12d9389a-de0d-5de5-c57e-a94fbdd18b6a?t=1665393185000', 'https://www.aircargoweek.com/wp-content/uploads/2017/12/IMG_5399.jpg'],
    price: 308000000,
    onstock: 3,
    capacity: 112,
    range: 9065
  },
  {
    title: 'Boeing C-17',
    produce: 'Boeing',
    category: aviaCategory.Military,
    description: 'The C-17 Globemaster III is a strategic transport aircraft, able to airlift cargo close to a battle area',
    source: ['https://www.airforce-technology.com/wp-content/uploads/sites/6/2020/03/Image-1-C-17-Globemaster-III-Tactical-Transport-Aircraft.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/C-17_test_sortie.jpg/800px-C-17_test_sortie.jpg'],
    price: 318000000,
    onstock: 7,
    capacity: 102,
    range: 5000
  },
  {
    title: 'An-225 Mriya',
    produce: 'Antonov',
    category: aviaCategory.Cargo,
    description: 'An-225 held several records, including heaviest aircraft ever built and largest wingspan of any aircraft in operational service',
    source: ['https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Antonov_An-225_Beltyukov-1.jpg/800px-Antonov_An-225_Beltyukov-1.jpg', 'https://asiaplustj.info/sites/default/files/articles/309147/1f3feb1---------.jpg'],
    price: 3000000000,
    onstock: 1,
    capacity: 250,
    range: 15000
  },
  {
    title: 'Bombardier Challenger 650',
    produce: 'Bombardier',
    category: aviaCategory.VIP,
    description: 'The best option of the most popular VIP-jets family.',
    source: ['https://businessaircraft.bombardier.com/sites/default/files/styles/retina_1400x1240/public/2020-06/Challenger650_Cutting_cost.jpg?itok=lmOcdNRm', 'https://jet-partners.ru/upload/medialibrary/917/nl34lz1a5xqqabej8ce8idhhxzee5au7/Bombardier_Challenger_650_ext_1.jpg'],
    price: 32000000,
    onstock: 5,
    capacity: 8,
    range: 6300
  },
];

export default data;
