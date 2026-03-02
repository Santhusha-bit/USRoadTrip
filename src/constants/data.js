export const STATS = [
  { num: '~13,000', label: 'Miles Total' },
  { num: '50', label: 'States Visited' },
  { num: '~90', label: 'Days Recommended' },
  { num: '$11,843', label: 'Est. Per Person' },
]

export const STATE_SEQUENCE = [
  ['ME', 'Maine'], ['NH', 'New Hampshire'], ['VT', 'Vermont'], ['MA', 'Massachusetts'],
  ['RI', 'Rhode Island'], ['CT', 'Connecticut'], ['NY', 'New York'], ['NJ', 'New Jersey'],
  ['PA', 'Pennsylvania'], ['DE', 'Delaware'], ['MD', 'Maryland'], ['VA', 'Virginia'],
  ['WV', 'West Virginia'], ['NC', 'North Carolina'], ['SC', 'South Carolina'], ['GA', 'Georgia'],
  ['FL', 'Florida'], ['AL', 'Alabama'], ['MS', 'Mississippi'], ['TN', 'Tennessee'],
  ['KY', 'Kentucky'], ['OH', 'Ohio'], ['IN', 'Indiana'], ['MI', 'Michigan'],
  ['WI', 'Wisconsin'], ['IL', 'Illinois'], ['MO', 'Missouri'], ['AR', 'Arkansas'],
  ['LA', 'Louisiana'], ['TX', 'Texas'], ['OK', 'Oklahoma'], ['KS', 'Kansas'],
  ['NE', 'Nebraska'], ['IA', 'Iowa'], ['MN', 'Minnesota'], ['SD', 'South Dakota'],
  ['ND', 'North Dakota'], ['MT', 'Montana'], ['WY', 'Wyoming'], ['CO', 'Colorado'],
  ['NM', 'New Mexico'], ['AZ', 'Arizona'], ['UT', 'Utah'], ['NV', 'Nevada'],
  ['CA', 'California'], ['OR', 'Oregon'], ['WA', 'Washington'], ['ID', 'Idaho'],
  ['AK', 'Alaska ✈'], ['HI', 'Hawaii ✈'],
]

export const PHASES = [
  {
    num: '1',
    weeks: 'Week 1–2',
    title: 'New England & Mid-Atlantic',
    miles: '~900 miles',
    desc: 'Start in Portland, Maine. Cover all 6 New England states in under 600 miles, then drop south through New York, New Jersey, Pennsylvania, Delaware, and Maryland.',
    states: ['ME', 'NH', 'VT', 'MA', 'RI', 'CT', 'NY', 'NJ', 'PA', 'DE', 'MD'],
    stops: 'Acadia NP, Cape Cod, NYC, Philadelphia, Washington DC',
  },
  {
    num: '2',
    weeks: 'Week 3–4',
    title: 'The South & Appalachia',
    miles: '~1,800 miles',
    desc: 'Head south through Virginia into the Appalachians, then sweep through the Carolinas and deep South. Florida is a mandatory detour south.',
    states: ['VA', 'WV', 'NC', 'SC', 'GA', 'FL', 'AL', 'MS'],
    stops: 'Shenandoah NP, Smoky Mountains, Savannah, Miami',
  },
  {
    num: '3',
    weeks: 'Week 5–6',
    title: 'Midwest & Great Lakes',
    miles: '~1,400 miles',
    desc: "Cut north through Tennessee and Kentucky, then loop the Great Lakes states. Chicago is the hub. Visit Michigan's Upper Peninsula before heading back.",
    states: ['TN', 'KY', 'OH', 'IN', 'MI', 'WI', 'IL'],
    stops: 'Nashville, Louisville, Cleveland, Chicago, Mackinac Island',
  },
  {
    num: '4',
    weeks: 'Week 7–8',
    title: 'The Heartland & Gulf Coast',
    miles: '~2,200 miles',
    desc: 'Head southwest through Missouri and Arkansas to Louisiana. Cut west across vast Texas, then north through Oklahoma and Kansas to Iowa and Minnesota.',
    states: ['MO', 'AR', 'LA', 'TX', 'OK', 'KS', 'NE', 'IA', 'MN'],
    stops: 'St. Louis, New Orleans, San Antonio, Austin, Minneapolis',
  },
  {
    num: '5',
    weeks: 'Week 9–10',
    title: 'Northern Plains & Rockies',
    miles: '~1,800 miles',
    desc: 'Drive west through the Dakotas to Montana. Mount Rushmore, Badlands, Glacier NP. Drop south through Wyoming and Colorado, then New Mexico.',
    states: ['SD', 'ND', 'MT', 'WY', 'CO', 'NM'],
    stops: 'Mount Rushmore, Badlands, Glacier NP, Yellowstone, Denver, Santa Fe',
  },
  {
    num: '6',
    weeks: 'Week 11–12',
    title: 'Southwest & Pacific Coast',
    miles: '~2,800 miles',
    desc: "Enter Arizona for the Grand Canyon, sweep through Utah's red rock, across Nevada to California. Drive the Pacific Coast Highway north through Oregon into Washington.",
    states: ['AZ', 'UT', 'NV', 'CA', 'OR', 'WA', 'ID'],
    stops: 'Grand Canyon, Zion NP, Las Vegas, San Francisco, PCH, Portland, Seattle',
  },
  {
    num: '✈',
    weeks: 'Week 13',
    title: 'Alaska & Hawaii — Fly-In Finishers',
    miles: '~4,200 air miles',
    isSpecial: true,
    desc: 'Fly from Seattle to Anchorage for a 4-day adventure, then to Honolulu to complete all 50 states. These two non-contiguous states require flights.',
    states: ['AK', 'HI'],
    stops: 'Denali NP, Anchorage, Honolulu, Maui, Waikiki Beach',
  },
]

export const COSTS = [
  { icon: '⛽', category: 'Fuel', detail: '13,000 mi ÷ 28 mpg × $3.50/gal ÷ 2 people', est: '~$813/person', total: '$813' },
  { icon: '🏨', category: 'Accommodation', detail: 'Mix of motels, camping, Airbnb. ~$55/night × 90 nights', est: '$55/night avg', total: '$4,950' },
  { icon: '🍔', category: 'Food & Dining', detail: '$35/day avg: groceries + restaurants', est: '$35/day × 90', total: '$3,150' },
  { icon: '✈️', category: 'Flights (AK + HI)', detail: 'SEA → ANC → HNL → Home roundtrip equiv.', est: '$800–$1,200', total: '$1,000' },
  { icon: '🎫', category: 'Attractions & Parks', detail: 'National Parks pass $80 + paid attractions ~$300', est: '~$380 total', total: '$380' },
  { icon: '🚗', category: 'Car / Maintenance', detail: 'Oil change, tires, misc wear. Rental option: $1,200', est: '$400–$1,200', total: '$800' },
  { icon: '🏥', category: 'Insurance & Health', detail: 'Travel insurance + roadside assistance', est: '~$250', total: '$250' },
  { icon: '📱', category: 'Misc & Shopping', detail: 'Souvenirs, laundry, connectivity, parking', est: '~$500', total: '$500' },
]

export const BUDGET_TIERS = [
  {
    label: 'Budget',
    amount: '$6,000',
    color: '#4CAF50',
    bg: 'rgba(46,125,50,0.1)',
    border: 'rgba(46,125,50,0.3)',
    note: 'Camping, cook your own meals, drive own car',
  },
  {
    label: 'Mid-Range ✓',
    amount: '$11,843',
    color: '#F4C542',
    bg: 'rgba(244,197,66,0.08)',
    border: 'rgba(244,197,66,0.3)',
    note: 'Mix of motels, Airbnb, dining out occasionally',
  },
  {
    label: 'Comfort',
    amount: '$18,000',
    color: '#C8102E',
    bg: 'rgba(200,16,46,0.08)',
    border: 'rgba(200,16,46,0.3)',
    note: 'Solo travel, hotels, restaurants, guided tours',
  },
]

export const TIPS = [
  {
    icon: '🏕️',
    title: 'Camp to Cut Costs',
    body: 'An America the Beautiful Pass ($80/year) covers 400+ federal sites. Free camping at National Forests can save $50–$100/night vs motels.',
  },
  {
    icon: '📅',
    title: 'Best Time: May–Sep',
    body: 'Start in May for New England spring. Northern Plains open by June. Avoid Florida in July–Aug. Alaska is best June–August.',
  },
  {
    icon: '⛽',
    title: 'GasBuddy App',
    body: 'Gas is 30–50¢/gallon cheaper in rural Texas, Oklahoma, and Midwest vs California. Always fill up before entering CA or NV.',
  },
  {
    icon: '🚙',
    title: 'Car Choice Matters',
    body: 'A reliable SUV or crossover is ideal: fits camping gear, handles mountain roads, and gets decent MPG.',
  },
  {
    icon: '📶',
    title: 'Connectivity',
    body: 'T-Mobile has best rural coverage. Download offline Google Maps before leaving city areas. Starlink portable for Montana/Wyoming.',
  },
  {
    icon: '🗺️',
    title: 'Book Parks Ahead',
    body: 'Yellowstone, Yosemite, Glacier all require timed-entry reservations May–Sep. Book 2–3 months ahead on Recreation.gov.',
  },
  {
    icon: '✈️',
    title: 'Alaska & Hawaii Flights',
    body: 'Book Alaska Airlines miles for both legs — best for Seattle→Anchorage and Hawaii routes. 4 nights minimum in each.',
  },
  {
    icon: '💰',
    title: 'Cut the Budget',
    body: 'A 12V portable cooler for cooking, free campsites on Freecampsites.net, and Planet Fitness ($25/mo) can drop daily costs below $70.',
  },
  {
    icon: '🏥',
    title: 'Safety & Insurance',
    body: 'Get travel insurance covering medical evacuation — crucial for Alaska. AAA membership ($60/yr) covers roadside assistance in all 50 states.',
  },
]

export const HIGHLIGHTS = [
  { num: '01', state: 'Maine', name: 'Acadia National Park', body: 'Dramatic Atlantic coastline with rocky headlands, kayaking, and the famous Cadillac Mountain sunrise.' },
  { num: '02', state: 'New York', name: 'New York City', body: 'Times Square, Central Park, the Met, Brooklyn Bridge. Allow 2–3 days minimum.' },
  { num: '03', state: 'D.C./Maryland', name: 'Washington D.C.', body: 'All Smithsonian museums are free. Capitol Hill, Lincoln Memorial, Arlington Cemetery.' },
  { num: '04', state: 'TN / NC', name: 'Great Smoky Mountains', body: "America's most visited national park — misty ridges, waterfalls, black bears, and no entrance fee." },
  { num: '05', state: 'Florida', name: 'Everglades National Park', body: "Airboat tours through the world's largest subtropical wilderness. Alligators everywhere." },
  { num: '06', state: 'Louisiana', name: 'New Orleans', body: 'French Quarter, jazz on Bourbon Street, beignets at Café Du Monde. Try to visit during Jazz Fest.' },
  { num: '07', state: 'Tennessee', name: 'Nashville', body: 'Broadway honky-tonks, Grand Ole Opry, hot chicken. Country music capital of the world.' },
  { num: '08', state: 'Illinois', name: 'Chicago', body: "Architecture boat tours, deep dish pizza, Art Institute, Millennium Park's Cloud Gate." },
  { num: '09', state: 'Texas', name: 'San Antonio & Austin', body: 'The Alamo + River Walk in SA; live music on 6th Street, BBQ, and tech culture in Austin.' },
  { num: '10', state: 'South Dakota', name: 'Mount Rushmore & Badlands', body: 'The carved presidents, then otherworldly Badlands formations just an hour away.' },
  { num: '11', state: 'Montana', name: 'Glacier National Park', body: "Going-to-the-Sun Road is one of the world's most spectacular drives. Glaciers and turquoise lakes." },
  { num: '12', state: 'Wyoming', name: 'Yellowstone', body: "Old Faithful, geysers, hot springs, bison herds, wolves. America's first national park." },
  { num: '13', state: 'Colorado', name: 'Rocky Mountain NP & Denver', body: 'Trail Ridge Road tops 12,000 ft. Denver has great food, craft breweries, and museum row.' },
  { num: '14', state: 'New Mexico', name: 'Albuquerque & Santa Fe', body: "Hot air balloon festival, adobe architecture, incredible New Mexican food, Georgia O'Keeffe country." },
  { num: '15', state: 'Arizona', name: 'Grand Canyon', body: "One of Earth's great natural wonders. South Rim for accessibility; North Rim for solitude." },
  { num: '16', state: 'Utah', name: 'Zion & Bryce Canyon', body: 'Red sandstone cathedrals at Zion, and the alien hoodoo formations at Bryce Canyon.' },
  { num: '17', state: 'Nevada', name: 'Las Vegas', body: 'The Strip at night, world-class shows, Valley of Fire and Red Rock Canyon nearby.' },
  { num: '18', state: 'California', name: 'Yosemite & National Parks', body: 'El Capitan, Half Dome, Yosemite Falls. Plus: Sequoia, Joshua Tree, and Highway 1 coastal drive.' },
  { num: '19', state: 'California', name: 'San Francisco', body: 'Golden Gate Bridge, Alcatraz, dim sum in the Richmond, sea lions at Pier 39. 2–3 days minimum.' },
  { num: '20', state: 'CA → OR', name: 'Pacific Coast Highway', body: 'Drive PCH from LA to San Francisco and continue north into Oregon. World-class coastal scenery.' },
  { num: '21', state: 'Oregon', name: 'Crater Lake', body: "America's deepest lake, formed in a collapsed volcano caldera. Impossibly blue water." },
  { num: '22', state: 'Washington', name: 'Olympic & Rainforest', body: 'Hoh Rainforest, Hurricane Ridge, and Pacific beaches — all within one stunning national park.' },
  { num: '23', state: 'Washington', name: 'Seattle', body: 'Pike Place Market, Space Needle, ferry to Bainbridge Island. Gateway to Alaska flights.' },
  { num: '24', state: 'Alaska', name: 'Denali & Kenai Fjords', body: "North America's tallest peak, calving glaciers, whales, bears, and utter wilderness." },
  { num: '25', state: 'Hawaii', name: 'Maui & Oahu', body: 'Road to Hana on Maui, Pearl Harbor on Oahu, Waimea Canyon on Kauai. Aloha spirit.' },
]

export const NAV_TABS = ['Overview', 'Phases', 'Costs', 'Highlights', 'Tips']

export const SUMMARY_STATS = [
  ['48', 'Driven States'],
  ['2', 'Flown States (AK/HI)'],
  ['~145', 'Avg Miles/Day'],
  ['~260', 'Driving Hours'],
  ['90', 'Trip Days'],
]
